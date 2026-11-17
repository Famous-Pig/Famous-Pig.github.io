---
title: 多维数组
published: '2026-04-20 14:13:38'
updated: '2026-06-09 14:46:16'
description: 一维数组int main() { int a[] = {16, 47, 89, 42, 38}; }二维数组数据类型 数组名[数组长度][数组长度]int a[5][6]; char ch[3][4]; float f[3][5];数据类型 数组名[数组长度][数组长度] = {元素 1, 元...
category: 数据结构
tags: ["数据结构"]
draft: false
cover: /images/yuque/6cdfa112c23f7ea171e3ef8b32b674da.png
---

# 一维数组
```c
int main()
{
    int a[] = {16, 47, 89, 42, 38};
}
```

![](/images/yuque/6cdfa112c23f7ea171e3ef8b32b674da.png)



# 二维数组
数据类型 数组名[数组长度][数组长度]

```c
int a[5][6];
char ch[3][4];
float f[3][5];
```



数据类型 数组名[数组长度][数组长度] = {元素 1, 元素 2, …, 元素 n}

数据类型 数组名[数组长度][数组长度] = {{…}, {…}, {…}…}

数据类型 数组名[][数组长度] = {元素 1, 元素 2, …, 元素 n}

```c
int a[2][3] = {1, 2, 3, 4, 5, 6};
int b[2][3] = {{1, 2, 3}, {4, 5, 6}};
int c[][3] = {1, 2, 3, 4, 5, 6};
```

![](/images/yuque/3aae43bfdbcc322c749179ed3296817b.png)

## 按行优先排列
![](/images/yuque/86e21bab7fce757654fbe64f4e20cc73.png)

## 按列优先排列
![](/images/yuque/01fa54fd286aa7bf1d1dab16a01fca2a.png)



# 真题解析
![](/images/yuque/d7532a195b939ab097f85416ce7c236a.png)

![](/images/yuque/781bd190785072c83fedb98226f87052.png)

![](/images/yuque/1df95a6c1de847ee1bc43ebd29e46626.png)

![](/images/yuque/38c3807b24f147f312ac5ccaf34a5dc9.png)

![](/images/yuque/4e92c4a5c6ad360926502d19d4696b16.png)

100+201-1 = 300

![](/images/yuque/e39f564c92b749952103d6ab3f3c2eb4.png)





