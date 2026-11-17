---
title: 表达式求值
published: '2026-04-19 23:24:59'
updated: '2026-06-15 00:24:13'
description: q枚举将变量的值一一列举出来，变量的值只限于列举出来的值的范围内在枚举中列出的每一个值，称为枚举元素每一个枚举元素由系统定义了一个用序号表示的数值，从 0 开始，分别为 0，1，2 … 语法：enum 枚举名 { 枚举元素... }#include  enum weekday...
category: 数据结构
tags: ["数据结构","算法"]
draft: false
cover: /images/yuque/7d7f83afd74eb1e620c7ce44a5518ec9.png
---

q![](/images/yuque/7d7f83afd74eb1e620c7ce44a5518ec9.png)



# 枚举
将变量的值一一列举出来，变量的值只限于列举出来的值的范围内在枚举中列出的每一个值，称为枚举元素

每一个枚举元素由系统定义了一个用序号表示的数值，从 0 开始，分别为 0，1，2 …  

语法：

```c
enum 枚举名
{
    枚举元素...
}
```

```c
#include <stdio.h>

enum weekday
{
	mon=1, tue, wed, thu, fri, sat, sun
};

int main(int argc, char const *argv[])
{
	enum weekday a;
	a = mon;
	enum weekday b;
	b = tue;
	printf("%d\n", a);
	printf("%d\n", b);
	return 0;
}

//运行：
//1
//2
```

# 后缀表达式求值
![](/images/yuque/998c56be26421cc14e51e925f1306059.png)

![](/images/yuque/d93e4936a766f38fb84ab42315281e4d.png)

![](/images/yuque/c97f68fa213a9a79ca7b521c08e091a4.png)

![](/images/yuque/eca1889b543ddae7190d979f3f4a7f82.png)

![](/images/yuque/b485c8fdcc1de8417b98d2906211173e.png)

![](/images/yuque/76ccb09a61fca67af4493ae5e13be7f1.png)

![](/images/yuque/7ed94e6c2b4e1c21aa4c0ac9ba3efaac.png)

![](/images/yuque/f539ed0bde753cb0c0aa4972cbeded8a.png)

![](/images/yuque/453d0a44e2ca0526edce087aa0a80a04.png)

![](/images/yuque/dc922988370e8285080da6b9b1d9e06c.png)

![](/images/yuque/8c5d4ef39e95487158d3169810148854.png)

![](/images/yuque/e1b17e86c6a12cf8fa42dc20370fc966.png)

![](/images/yuque/de192c84ec8c16b5211e6e0609d000fa.png)

![](/images/yuque/c84ef44d3701889ed3a4ac2be9963678.png)

![](/images/yuque/a91aa9922d674db569060bc159f328fa.png)

![](/images/yuque/b57f2f01f0804ee9a549a98e8c3d250e.png)

![](/images/yuque/8a82ca6389237d9cb27153f4d228b7d0.png)

![](/images/yuque/64c8b5ee8abd605e7c4caeb62dd24893.png)

![](/images/yuque/d9ed7577bca87ee51f75f736cc2e2f65.png)

![](/images/yuque/11d86fc137762239fd8865d9e8ed4969.png)

![](/images/yuque/6d578f780845bc3f8b7caf5480c5a359.png)

![](/images/yuque/b7aa1bbccd5b73a836faab7558850b11.png)

![](/images/yuque/b03590c1deae0068a831be476ab68cf6.png)

![](/images/yuque/42a4c990377e7cd4f4f08fe10501b60d.png)



# 中缀表达式转后缀表达式
![](/images/yuque/7992167f19194eb4ea738bf12b068635.png)

![](/images/yuque/21a9a6cabe1910aa3101c4b6777b51dc.png)

![](/images/yuque/481fe870c944f266b333bf901a7943c0.png)

![](/images/yuque/4683cc901594a162a1cb30810767d9ef.png)

![](/images/yuque/9c52ba35b71ae69dcd54f07ef577c99e.png)

![](/images/yuque/d7dd8e1c911f962515e2211069dc6d16.png)

![](/images/yuque/e8016a709d3061e33e803b929759c1d1.png)

![](/images/yuque/06004f6bb88ec0f7144479f4c8acfb45.png)

![](/images/yuque/bf5108fe516ebb1171ab812e6ecb5676.png)

![](/images/yuque/6d0258257e3918ab43c45a6f5b371713.png)

![](/images/yuque/1a50758da08852e9bc5611eb42883f31.png)

![](/images/yuque/f790ce88348f6273e3c2d1a81858bbad.png)

![](/images/yuque/9f3928cf9f5ea5012c2398b548722c2e.png)

![](/images/yuque/718c82be143b834c23368d746fc45a60.png)

![](/images/yuque/5d539318b8b8e9cc07ffa540519d7412.png)

![](/images/yuque/f20692f3752c1af203aafecf92eb3abd.png)

![](/images/yuque/de7da90be084b0cecbc25d35a0b17f1f.png)

![](/images/yuque/dcc1a00ca75eb4e45ecac5be0f11272f.png)

![](/images/yuque/483c8d0e02f591b7c75806c31a211bba.png)

![](/images/yuque/126f65c22b754e90faa16b063bb26daa.png)

![](/images/yuque/8da83e4134be763d8e8c891964167d61.png)

![](/images/yuque/34d24191ecbbad98b523e5b85375cf41.png)

![](/images/yuque/995250c531f0ab10a96d82eae3c496ca.png)

![](/images/yuque/7d02b9e9ab3911cc887d623cf785ff7c.png)

![](/images/yuque/91b7c601b32dfdf13d32169b5b2eaced.png)

![](/images/yuque/d03a2ec630f7e1e9fae6e178091cd2e9.png)



# 栈与队列
![](/images/yuque/c20e5b5017590b85e623eadaf1543eb4.png)

