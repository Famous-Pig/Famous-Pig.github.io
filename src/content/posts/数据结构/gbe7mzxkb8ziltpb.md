---
title: 递归
published: '2026-04-19 23:10:06'
updated: '2026-06-09 14:14:14'
description: '函数调用过程中，调用自己本身计算 1~n 的和-非递归方式int fun(int n) { int sum = 0; for (int i = 1; i '
category: 数据结构
tags: []
draft: false
cover: /images/yuque/e94690e5a385d43971f6935c52c9bfe5.png
---

函数调用过程中，调用自己本身

# 计算 1~n 的和-非递归方式
```c
int fun(int n) 
{ 
    int sum = 0; 
    for (int i = 1; i <= n; i++) 
    { 
        sum += i; 
    } 
    return sum; 
}
```



# 计算 1~n 的和-递归方式
```c
int fun(int n) 
{ 
    if (n == 1) 
    { 
        return 1; 
    } 
    else 
    { 
        return fun(n-1) + n; 
    } 
}
```

![](/images/yuque/e94690e5a385d43971f6935c52c9bfe5.png)![](/images/yuque/7179c53e08b74025a777f02141b2fee3.png)![](/images/yuque/ebd97283b9fb8d3bd98da0b529d660da.png)![](/images/yuque/c0de7dc0069c8c5e6974685886e89a99.png)![](/images/yuque/4edf4d6246f25340fb237e2e9a458a21.png)![](/images/yuque/c820cacebbba7bbfe761c3d5c9fcd8ec.png)![](/images/yuque/91d734f7a897f83e751427313f0eca81.png)![](/images/yuque/4a4cb586f916861368ae1d167a710d8d.png)

![](/images/yuque/4f8a041916d6e8d1b37a4677373eee3b.png)

![](/images/yuque/c0a492a55c15676baf94ae02993cda46.png)

![](/images/yuque/ac1a1b29fd4afae646252bccbcee72ee.png)

![](/images/yuque/4173051b469c6d99188cde594587b70d.png)

![](/images/yuque/8db40cab45fc35e24645e895c5a6f4e2.png)

![](/images/yuque/6e4158b7d75307f6fc055fdf87ea043f.png)

![](/images/yuque/30deb08a070de45bb31c114f3a1fc0bb.png)

![](/images/yuque/376b762701f4b8c318a0e9cd0f608375.png)

![](/images/yuque/4e4bc4989f8f00df213403f6cfb51725.png)

![](/images/yuque/630c04f7b5e106ea11efe4f7e470ceb2.png)

![](/images/yuque/1c186de91dd1ec40e0747a5d9745c9ed.png)

![](/images/yuque/51e186d14488cabac5ac7ced21fa4f61.png)

![](/images/yuque/88b882aa2cb20bcbdbbebf4c26da5ac5.png)

![](/images/yuque/bef9ff3f6851d2b3ec6c2548c05d8ba8.png)

![](/images/yuque/fda26d5aa3fad1ff3048c501afc56bd9.png)

![](/images/yuque/64503697aeb4a9cfe873f79a6b47d571.png)



# 斐波那契数
斐波那契数列（Fibonacci sequence），又称黄金分割数列，因数学家莱昂纳多·斐 波那契（Leonardo Fibonacci）以兔子繁殖为例子而引入，故又称“兔子数列”，其 数值为：1、1、2、3、5、8、13、21、34…… 第 1、2 项为 1，从第 3 项开始每一项的值为前两项的和

# 求斐波那契数列第n项值-非递归方式
```c
int fibonacci(int n) 
{ 
    int last1 = 1; 
    int last2 = 1; 
    int result = 0; 
    for (int i = 3; i <= n; i++) 
    { 
        result = last1 + last2; 
        last2 = last1; 
        last1 = result; 
    } 
    return result; 
}
```



# 求斐波那契数列第n项值-递归方式
```c
int fibonacci(int n) 
{ 
    if (n == 1 || n == 2) 
    { 
        return 1; 
    } 
    else 
    { 
        return fibonacci(n - 1) + fibonacci(n - 2); 
    } 
}
```

