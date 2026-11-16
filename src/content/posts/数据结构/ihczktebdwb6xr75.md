---
title: 顺序查找
published: '2026-04-29 11:30:19'
updated: '2026-06-14 17:11:32'
description: 查找的基本概念查找表是由一组具有相同数据类型的数据元素组成的集合，这些元素通常保存在一张结构化的数据表中，用于支持对其中元素的查找操作。可以把查找表理解成一个“装着数据的仓库”，就像超市货架那样。你想找某个商品（数据），就要在这张“表”中查一查它在哪儿。而查找表的主要作用，就是为了方便你“找东...
category: 数据结构
tags: []
draft: false
cover: /images/yuque/6415449853384aaa9193e510198d28ee.png
---

# 查找的基本概念
## 查找表
是由一组具有相同数据类型的数据元素组成的集合，这些元素通常保存在一张结构化的数据表中，用于支持对其中元素的查找操作。

可以把查找表理解成一个“装着数据的仓库”，就像超市货架那样。你想找某个商品（数据），就要在这张“表”中查一查它在哪儿。而查找表的主要作用，就是为了方便你“找东西”。

说白了就是：想查找得有地方查找，查找表就提供了这个地方



## 关键字
数据元素中能唯一标识该元素的属性值，查找时就是通过关键字来定位对应的数据元素的。

关键字就像“身份证号”或“商品条码”，它是用来区分每个数据的“标签”。比如你要查找学生信息，就得知道学号；要找图书，就要用ISBN；这些就是关键字



## 查找
在查找表中根据给定的“关键字”找出对应数据元素的过程 。

查找就像“翻书找页码”或者“在通讯录里找某个人的电话”。你给出一个线索（关键字），系统就帮你从表里把它找出来，告诉你在哪。查得快慢、准不准，就是我们后面要学习的重点



## 平均查找长度
是指在一种查找方法下，查找一个元素所需要比较的关键字的平均次数，是衡量查找算法效率的一个重要指标。它通常分为两种情况来讨论：查找成功和查找失败

![](/images/yuque/6415449853384aaa9193e510198d28ee.png)

如果表中有 n 个元素，第 i 个元素被查到的概率为 Pi，查找它需要比较 Ci 次关键字

基于一个数组的场景来举例，如下：

![](/images/yuque/d94cf832b58c87be4166ef8c0b897628.png)



# 线性表的查找-顺序查找
![](/images/yuque/0a2b28839b0c14b57b6c008901250c1c.png)

![](/images/yuque/ff843a568bc3a5376b3a21bd6b914074.png)

![](/images/yuque/1007b3b6a6c36acf8e279057254da68f.png)

![](/images/yuque/8c47a6e63ef2ca1fbc7eee9a9eeeac36.png)

![](/images/yuque/34c30014edfbbd9b4b0ee286fed621bc.png)

```c
#include <stdio.h>
//顺序查找函数
int search(int* data, int len, int value)
{
	//data:查找表 n:表中元素个数 value:要查找的内容
	for (int i = 0; i < len; i++)
	{
		//逐个比对是表中元素与要查找数据是否一致
		if (data[i] == value)
		{
			return i;//返回找到的元素下标
		}
	}
	return -1;//没有查到返回-1（失败为什么不返回0，因为数组中下标存在0）
}

int main(int argc, char const *argv[])
{
	int arr[] = {15, 54, 76, 6, 9, 45, 12}; //查找表
	int len = sizeof(arr) / sizeof(arr[0]); //数组长度
	int pos = search(arr, len, 45); //调用函数查找45
	printf("%d\n", pos);
	return 0;
}
```



# 线性表的查找-折半查找（二分查找）
折半查找的前提是：查找表必须是有序的，这一点非常关键。无序的数据使用折半查找是完全没有意义的。

![](/images/yuque/597d8d002f1cb379b174ffe1a854b03d.png)

![](/images/yuque/a312f0ab6a2e264e4fe57b1e432d7eed.png)

![](/images/yuque/62d410243d01700316ceed5ae4bb3e3f.png)

![](/images/yuque/e1c2712b1f7443ffe356d7f1b2b982fa.png)

![](/images/yuque/5fedb1d7200918e5fbac42af3336357f.png)

![](/images/yuque/f2a8fb97f65fb3b082925238aabeb567.png)、![](/images/yuque/0a03e61a9a51da97faea899c0d289754.png)

```c
#include <stdio.h>
//折半查找函数
int binary_search(int* data, int len, int value)
{
	//data:查找表 n:表中元素个数 value:要查找的内容
	int low = 0; //查找表的起始下标为low
	int high = len - 1; //假设查找表的结束下标为high
	int mid;
	while(low <= high)
	{
		mid = (low + high) / 2; //计算中间下标：mid = (low + high) / 2
		if (value > data[mid])
		{
			low = mid + 1; //如果关键字大于a[mid]，则在右半部分继续查找，令low = mid + 1
		}
		else if(value < data[mid])
		{
			high = mid - 1; //如果关键字小于data[mid]，则在左半部分继续查找，令high = mid - 1
		}
		else
		{
			return mid; //如果关键字等于data[mid]，查找成功，返回下标
		}
	}
	return -1;
}

int main(int argc, char const *argv[])
{
	int arr[] = {2, 13, 22, 38, 46, 58, 66, 77, 85, 98}; //查找表
	int len = sizeof(arr) / sizeof(arr[0]); //数组长度
	int pos = binary_search(arr, len, 66); //调用函数查找66
	printf("%d\n", pos);
	return 0;
}
```



顺序查找效率较低，而折半查找又依赖于有序的顺序表结构，且插入与删除操作较为麻烦。于是我们开始思考，有没有一种查找结构，既能保持较高的查找效率，又能在动态插入和删除时保持结构的有序性？



有的兄弟，有的，叫二叉排序树

