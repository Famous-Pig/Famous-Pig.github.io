---
title: 堆与堆排序
published: '2026-05-08 10:28:34'
updated: '2026-05-08 10:47:34'
description: 堆排序（Heap Sort）是一种基于完全二叉树结构的选择排序，它利用堆这种特殊的数据结构来选出当前无序部分的最大（或最小）元素，进而完成排序操作这里的“堆”不是平时程序中提到的“内存堆区”，而是一种满足特定性质的树状结构。 在堆排序中，我们通常使用的是大根堆 / 最大堆（每个节点都大于等于其...
category: 数据结构
tags: ["数据结构","算法"]
draft: false
cover: /images/yuque/c83159381137c96f7f83b87fb7177fe8.png
---

堆排序（Heap Sort）是一种基于完全二叉树结构的选择排序，它利用堆这种特殊的数据结构来选出当前无序部分的最大（或最小）元素，进而完成排序操作

这里的“堆”不是平时程序中提到的“内存堆区”，而是一种满足特定性质的树状结构。 在堆排序中，我们通常使用的是大根堆 / 最大堆（每个节点都大于等于其子节点）或小根堆 / 最小堆（每个节点都小于等于其子节点）

![](/images/yuque/c83159381137c96f7f83b87fb7177fe8.png)



# 堆的插入操作
1.保证形态为完全二叉树的基础上插入

2.逐层调整

![](/images/yuque/1cea67165cb667c2c1797921b47efd6e.png)

![](/images/yuque/2d19dcef965d69165a38cd97e6361f68.png)

![](/images/yuque/853bbaf18c77fd4fc48eb16e5b65d282.png)



# 堆的删除操作
1.用最后一个结点替换要删除的结点

2.逐层调整

![](/images/yuque/7f4519e95febaaf2e886dabd6a19fcba.png)

![](/images/yuque/44dec54eb719bec5b33834850007faae.png)

![](/images/yuque/11cd24ef1c40e82c8993add57f4311ae.png)

![](/images/yuque/f8d27af3bba832318fe1ff969cf291ad.png)

![](/images/yuque/69f5aa1a42e9beebdc31d6fa9715f61c.png)

![](/images/yuque/3c3e47fb5868008f4fb595006b93d808.png)



# 堆排序
使用顺序存储方式构建二叉树

![](/images/yuque/7137a3bbb3b8cc4478a671603c76e3bf.png)

![](/images/yuque/ed3b2b04d0b4d7a31c925c381c24720f.png)

根据待排序的数组，构建二叉树

![](/images/yuque/e84b40a34e342def31fd47144aba4d1e.png)

建堆：从最后一个非叶子节点开始向前遍历，每个节点都执行一次向下调整，最终构成一个大根堆

![](/images/yuque/cc54ae40b189ca396691ca8510dca244.png)

![](/images/yuque/ffd8d8b356229fc27b87bedb2af0c4cf.png)

![](/images/yuque/ee45b2530d3e6642cb7c0e6a3a034dd3.png)

![](/images/yuque/70bf8bb75471872cb40ff78ccefbe86c.png)

![](/images/yuque/e9c262d59477a9d03fa7044342c22bd0.png)

![](/images/yuque/e436cae976db8529105fa1eeb6c9e46e.png)

排序：不断将堆顶（最大值）放到数组末尾，并重新调整剩下部分为大根堆

![](/images/yuque/d438aef86cbc5d4390ac3c614c39dece.png)

![](/images/yuque/0d9af1526ae139113c90712780165d01.png)

![](/images/yuque/e2b2e3d448928364c70333a475206903.png)

![](/images/yuque/f1ce6c0bf6f86bbfcde9239c38efe8eb.png)

![](/images/yuque/106d4c4b6524e9f82b4136f6d6753e58.png)

![](/images/yuque/54ce3d5813c70f827efd15b8fb77a00d.png)

![](/images/yuque/0b9631c22283b17f7bfc6bdf5376a8bd.png)

![](/images/yuque/77437bb8f7b5cf13f24422416b16e383.png)

![](/images/yuque/34dbda66355ce47b68d594810cf35ec4.png)

![](/images/yuque/67dd590bd7106e85d5c5b11e0fb8cf25.png)

![](/images/yuque/c0c0a3cb548d1f028b297d57777fc8e2.png)

![](/images/yuque/1f067c5a2110b71dcbb12fa12a622f14.png)

![](/images/yuque/3fe45d42f8cc43abcb76c87b843a3db9.png)

![](/images/yuque/4695b06eb652f27d9e6ad1d66994828f.png)

![](/images/yuque/0c02035a821a5f3a7a3f68acb8c9b814.png)

![](/images/yuque/58c6334420bae49c2bd5789fa305e3ed.png)

![](/images/yuque/2142fac84c9a23f8c7ed24e6470a45b3.png)

![](/images/yuque/8ab36afe8f35ff5afa54cf28d702fdec.png)

![](/images/yuque/95c868c035b5940a780a46e04e97ad68.png)

![](/images/yuque/89292935ab44d2f0fb607e99bd204b22.png)

![](/images/yuque/3239c825a80a6d52915137cdab71f031.png)

![](/images/yuque/8e210da655a98b998669feb78e1da2d1.png)

![](/images/yuque/92145e6c6e7e6acf8879046429cde2e8.png)

![](/images/yuque/5cff5d45438f3130a7648e269ffa54a1.png)

![](/images/yuque/67f0cfa8dd891787fb0d4dabda7cdcd5.png)

![](/images/yuque/0dd0e17fea93802bff41ed83e46811ee.png)

![](/images/yuque/ca610677e02a148fc7fd3e35c98c2b93.png)

![](/images/yuque/602e0f82fa5531a796dc8affdeee80b6.png)

![](/images/yuque/65e42761411cdb0bcfc79383c00d7811.png)

![](/images/yuque/1838aaa0b1b52672c3a9fb9f78edbc3f.png)

![](/images/yuque/7b2d95f74f850e561fb9c0e236dd39e0.png)

![](/images/yuque/840bb2425b21bcbc51ccb9f01c0d69bc.png)

![](/images/yuque/6d332a8739255588ccd518caba0bebbd.png)

```c
#include <stdio.h>

// 交换数组中两个元素的值
void swap(int* data, int m, int n)
{
	int temp = data[m];
	data[m] = data[n];
	data[n] = temp;
}

// 向下调整堆（从 root 开始，len 为当前堆的大小）
void adjust(int* data, int root, int len)
{
	int child;
	int temp = data[root];  // 保存当前根节点的值
	child = 2 * root;        // 左孩子下标

	// 只要存在孩子节点
	while(child <= len)
	{
		// 如果有右孩子，且右孩子比左孩子大，则选右孩子
		if (child < len && data[child] < data[child+1])
		{
			child++;  // 右孩子下标
		}
		// 如果当前节点比较大，不需要调整
		if (temp > data[child])
		{
			break;
		}
		// 将子节点的值上移
		data[child/2] = data[child];
		// 继续向下调整
		child = child * 2;
	}
	// 把原 root 的值放到最终位置
	data[child/2] = temp;
}

// 堆排序主函数
void heapSort(int* data, int len)
{
	// 1. 建堆过程：从最后一个非叶子节点开始向上调整
	for (int i = len / 2; i > 0; i--)
	{
		adjust(data, i, len);
	}

	// 2. 排序过程：将堆顶最大值依次交换到数组末尾，并调整剩余部分为大根堆
	for(int i = len; i > 1; i--)
	{
		swap(data, 1, i);         // 将当前最大值（堆顶）移到末尾
		adjust(data, 1, i-1);     // 对剩余部分重新建堆
	}
}

int main(int argc, char const *argv[])
{
	// 注意：data[0]未使用，占位是为了从 data[1] 开始建堆
	int data[] = {-1, 47, 35, 60, 95, 77, 15, 28};
	int len = sizeof(data) / sizeof(data[0]);

	// 调用堆排序函数（不包含占位的 data[0]）
	heapSort(data, len-1);

	// 输出排序结果
	for(int i = 1; i < len; i++)
	{
		printf("%d ", data[i]);
	}
	return 0;
}
```



# 真题解析
暂略



