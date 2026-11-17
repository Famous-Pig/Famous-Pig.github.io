---
title: 哈夫曼树
published: '2026-04-22 21:15:25'
updated: '2026-05-13 11:23:20'
description: 引入对于上面的表格，可以做一个二叉树，如下：if(a &lt; 60) b = “不及格”; else if(a &lt; 70) b = “及格”; else if(a &lt; 80) b = “中等”; else if(a &lt; 90) b = “良好”； else b = “优秀”;但这样效率比较低，如果...
category: 数据结构
tags: ["数据结构"]
draft: false
cover: /images/yuque/4e3acf33b570f7a1913b790bc3012eec.png
---

# 引入
![](/images/yuque/e967fe9c9cec35ad4b6ea86c04b36c24.png)

对于上面的表格，可以做一个二叉树，如下：

```c
if(a < 60) 
    b = “不及格”; 
else if(a < 70) 
    b = “及格”; 
else if(a < 80) 
    b = “中等”; 
else if(a < 90) 
    b = “良好”； 
else 
    b = “优秀”;
```

![](/images/yuque/faf1035b091ceff2a5ef0e08e3393a54.png)



但这样效率比较低，如果按照他们的比例来做优先判断，变成如下：

这样的效率是不是做高的呢？

![](/images/yuque/85b104eb4733fd323cf26e926163fe9a.png)

# 哈夫曼树-基本概念
![](/images/yuque/2affefcf9e9012044e5745e8809d62b5.png)

![](/images/yuque/20ba172d11ba68a05fb8520956399448.png)



# 哈夫曼树-计算WPL
![](/images/yuque/b11b40170c298bb7e42167cd68b61396.png)



# 哈夫曼树-定义
带权路径长度WPL最小的二叉树称为哈夫曼树



# 构造哈夫曼树
![](/images/yuque/138ed0f408855fafbf41929e99380ce4.png)

![](/images/yuque/6fa335f1aeb646e16b1236cf46a9184a.png)![](/images/yuque/3f0605887d10a6f85b9dda8ecc17804f.png)

![](/images/yuque/38e76f5bb52beb791b599d62e78f2cdc.png)

![](/images/yuque/e820e97aef8415cb9b807bcfda3c0370.png)![](/images/yuque/11504d2c08acf19e01181e4ee21abcd3.png)

![](/images/yuque/340d1125f025c3836f04435cf47c9822.png)

![](/images/yuque/cadd168ca39c32558e3a45274c640609.png)![](/images/yuque/9b2470457bd1c7e7a9b52343f8a50fa0.png)



# 哈夫曼编码
![](/images/yuque/b4d307dbbe8c21d15d6c04d45de40895.png)

![](/images/yuque/c13d5c8285616cf4a0c4ef44c68f2202.png)

![](/images/yuque/19fe49c9f827451e26fe95c4324f9450.png)

![](/images/yuque/003ab9e733acc489c7b2048eb23b359b.png)

使用二进制编码的效率不高，所以要做哈夫曼编码，如上所示



# 哈夫曼树-真题解析
![](/images/yuque/532d4b58a7f7a9ba793e5b655776b985.png)

![](/images/yuque/a5d0e9da7ad316a26288536f2cd049cc.png)

![](/images/yuque/a14c2b20d47f64d956ddedd0396f7828.png)

![](/images/yuque/bba73f4feda621cc4cea53090a33062a.png)

![](/images/yuque/f3d111718a52da60ff93017f29c09173.png)

![](/images/yuque/0bede9c671fb193e69255edf9d346974.png)

![](/images/yuque/bfaef0e9429cb1532cec6d460132d420.png)![](/images/yuque/276c989035ea0c0e0f03ad9f8d6955ec.png)



