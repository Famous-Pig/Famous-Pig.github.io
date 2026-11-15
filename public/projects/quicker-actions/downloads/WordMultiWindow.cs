// Word 同文多窗 1.0 — Quicker 1.x「运行C#代码 / 低权限模式v2」
// 前一步须为「恢复活动窗口」。参数为空：双窗；custom：输入总数。
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Drawing;
using System.IO;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading;
using System.Windows.Forms;

public static class Program
{
    const string Title = "Word 同文多窗";
    delegate bool EnumProc(IntPtr hwnd, IntPtr param);
    [DllImport("user32.dll")] static extern IntPtr GetForegroundWindow();
    [DllImport("user32.dll")] static extern uint GetWindowThreadProcessId(IntPtr h, out uint pid);
    [DllImport("user32.dll", CharSet=CharSet.Unicode)] static extern int GetClassName(IntPtr h, StringBuilder s, int n);
    [DllImport("user32.dll")] static extern bool EnumChildWindows(IntPtr h, EnumProc p, IntPtr arg);
    [DllImport("oleacc.dll")] static extern int AccessibleObjectFromWindow(IntPtr h, uint id, ref Guid iid, [MarshalAs(UnmanagedType.Interface)] out object obj);
    [DllImport("user32.dll")] static extern bool SetWindowPos(IntPtr h, IntPtr after, int x, int y, int w, int ht, uint flags);
    [DllImport("user32.dll")] static extern IntPtr MonitorFromWindow(IntPtr h, uint flags);
    [DllImport("user32.dll", CharSet=CharSet.Auto)] static extern bool GetMonitorInfo(IntPtr h, ref MonitorInfo info);
    [DllImport("user32.dll")] static extern IntPtr SetThreadDpiAwarenessContext(IntPtr context);
    [StructLayout(LayoutKind.Sequential)] struct Rect { public int L,T,R,B; }
    [StructLayout(LayoutKind.Sequential)] struct MonitorInfo { public int Size; public Rect Monitor,Work; public uint Flags; }

    public static string Exec(string paramValue)
    {
        IntPtr source = GetForegroundWindow();
        string result = "";
        var thread = new Thread(() => {
            using (var gate = new Mutex(false, "Local\\Quicker.WordMultiWindow.1")) {
                bool acquired = false;
                try {
                    try { acquired = gate.WaitOne(0); } catch (AbandonedMutexException) { acquired = true; }
                    if (!acquired) { result = "busy"; return; }
                    result = Run(source, (paramValue ?? "").Trim());
                } catch (Exception ex) {
                    MessageBox.Show("未能完成操作：" + ex.Message + "\n\n请回到可编辑的 Word 文档后重试。已打开的窗口会保留。", Title, MessageBoxButtons.OK, MessageBoxIcon.Information);
                    result = "error: " + ex.Message;
                } finally { if (acquired) gate.ReleaseMutex(); }
            }
        });
        thread.SetApartmentState(ApartmentState.STA);
        thread.Start(); thread.Join();
        return result;
    }

    static string Run(IntPtr source, string mode)
    {
        uint pid; GetWindowThreadProcessId(source, out pid);
        using (var process = Process.GetProcessById((int)pid))
            if (!string.Equals(process.ProcessName, "WINWORD", StringComparison.OrdinalIgnoreCase))
                throw new InvalidOperationException("请先激活 Microsoft Word 文档，再调出 Quicker 面板。");

        var objects = new List<object>();
        try {
            object native = null;
            EnumChildWindows(source, (h, p) => {
                var cls = new StringBuilder(64); GetClassName(h, cls, cls.Capacity);
                if (cls.ToString() != "_WwG") return true;
                Guid iid = new Guid("00020400-0000-0000-C000-000000000046");
                object candidate;
                if (AccessibleObjectFromWindow(h, 0xFFFFFFF0, ref iid, out candidate) == 0 && candidate != null) {
                    native = candidate; return false;
                }
                return true;
            }, IntPtr.Zero);
            if (native == null) throw new InvalidOperationException("当前窗口没有可访问的文档。请关闭对话框，并检查是否处于受保护视图。");
            objects.Add(native);
            dynamic original = native;
            dynamic document = original.Document; objects.Add(document);
            dynamic windows = document.Windows; objects.Add(windows);
            int wanted = 2;
            if (mode == "custom") {
                int? selected = AskCount(source, ReadCount(), (int)windows.Count);
                if (!selected.HasValue) return "cancelled";
                wanted = selected.Value;
            } else if (mode.Length > 0) {
                if (!int.TryParse(mode, out wanted) || wanted < 1 || wanted > 12)
                    throw new InvalidOperationException("窗口总数必须是 1 至 12 的整数。");
            }
            int before = (int)windows.Count;
            // 只增加窗口，绝不因为数量较小而关闭现有窗口。
            for (int i = before; i < wanted; i++) {
                object added = original.NewWindow(); objects.Add(added);
            }
            int count = (int)windows.Count;
            var handles = new List<IntPtr>();
            for (int i = 1; i <= count; i++) {
                dynamic window = windows[i]; objects.Add(window);
                window.WindowState = 0; // wdWindowStateNormal
                handles.Add(new IntPtr((int)window.Hwnd));
            }
            // Word 的并排比较可能开启联动滚动；禁用后各窗口可独立浏览。
            bool sync = false;
            try { sync = (bool)windows.SyncScrollingSideBySide; }
            catch (COMException) { /* 未处于并排比较时，部分 Word 版本不提供此属性。 */ }
            if (sync) windows.SyncScrollingSideBySide = false;
            Arrange(source, handles);
            original.Activate();
            if (mode == "custom") WriteCount(wanted);
            return "ok;total=" + count + ";created=" + Math.Max(0, count-before);
        } finally {
            // 释放本次取得的引用，不退出 Word，也不关闭或保存文档。
            for (int i=objects.Count-1; i>=0; i--)
                if (objects[i] != null && Marshal.IsComObject(objects[i]))
                    try { Marshal.ReleaseComObject(objects[i]); } catch { }
        }
    }

    public static Rectangle[] Grid(Rectangle area, int count)
    {
        if (count < 1) throw new ArgumentOutOfRangeException("count");
        int columns = count == 2 ? 2 : (int)Math.Ceiling(Math.Sqrt(count));
        int rows = (count + columns - 1) / columns;
        var result = new Rectangle[count];
        for (int i=0; i<count; i++) {
            int row=i/columns, col=i%columns;
            int rowCount=Math.Min(columns,count-row*columns);
            int l=area.Left+area.Width*col/rowCount, r=area.Left+area.Width*(col+1)/rowCount;
            int t=area.Top+area.Height*row/rows, b=area.Top+area.Height*(row+1)/rows;
            result[i]=Rectangle.FromLTRB(l,t,r,b);
        }
        return result;
    }

    static void Arrange(IntPtr source, List<IntPtr> handles)
    {
        IntPtr old=IntPtr.Zero;
        try {
            try { old=SetThreadDpiAwarenessContext(new IntPtr(-4)); } catch (EntryPointNotFoundException) { }
            var info=new MonitorInfo(); info.Size=Marshal.SizeOf(typeof(MonitorInfo));
            if (!GetMonitorInfo(MonitorFromWindow(source,2), ref info))
                throw new InvalidOperationException("无法读取当前显示器工作区域。");
            var cells=Grid(Rectangle.FromLTRB(info.Work.L,info.Work.T,info.Work.R,info.Work.B),handles.Count);
            for(int i=0;i<handles.Count;i++) {
                Rectangle c=cells[i];
                if(!SetWindowPos(handles[i],IntPtr.Zero,c.X,c.Y,c.Width,c.Height,0x0014))
                    throw new InvalidOperationException("窗口已打开，但自动排列失败。");
            }
        } finally { if(old!=IntPtr.Zero) SetThreadDpiAwarenessContext(old); }
    }

    sealed class Owner : IWin32Window { public IntPtr Handle {get;private set;} public Owner(IntPtr h){Handle=h;} }
    static int? AskCount(IntPtr owner, int last, int existing)
    {
        using(var form=new Form()) using(var box=new TextBox()) using(var hint=new Label())
        using(var ok=new Button()) using(var cancel=new Button()) {
            form.Text=Title; form.ClientSize=new Size(410,160); form.FormBorderStyle=FormBorderStyle.FixedDialog;
            form.MaximizeBox=false;form.MinimizeBox=false;form.ShowInTaskbar=false;form.StartPosition=FormStartPosition.CenterParent;
            hint.Text="窗口总数（包含原窗口，1–12）\n当前已有 "+existing+" 个；数量较小时保留已有窗口。";
            hint.SetBounds(18,16,375,42); box.SetBounds(20,68,370,26);box.Text=last.ToString();
            ok.Text="打开并排列";ok.SetBounds(180,112,110,30);
            cancel.Text="取消";cancel.SetBounds(300,112,90,30);cancel.DialogResult=DialogResult.Cancel;
            int selected=0;
            ok.Click+=(s,e)=>{int value;if(!int.TryParse(box.Text.Trim(),out value)||value<1||value>12){MessageBox.Show(form,"请输入 1 至 12 的整数。",Title);box.Focus();box.SelectAll();return;} selected=value;form.DialogResult=DialogResult.OK;};
            form.Controls.AddRange(new Control[]{hint,box,ok,cancel});form.AcceptButton=ok;form.CancelButton=cancel;
            form.Shown+=(s,e)=>{box.Focus();box.SelectAll();};
            return form.ShowDialog(new Owner(owner))==DialogResult.OK?(int?)selected:null;
        }
    }
    static string StateFile {get{return Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData),"Quicker","WordMultiWindow","count.txt");}}
    static int ReadCount(){try{int n;if(int.TryParse(File.ReadAllText(StateFile),out n)&&n>=1&&n<=12)return n;}catch{}return 2;}
    static void WriteCount(int count){try{Directory.CreateDirectory(Path.GetDirectoryName(StateFile));File.WriteAllText(StateFile,count.ToString());}catch{/* 记忆数量失败不影响窗口操作。 */}}
}
