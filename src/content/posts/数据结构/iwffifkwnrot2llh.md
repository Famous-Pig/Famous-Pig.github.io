---
title: 二叉排序树
published: '2026-05-02 21:41:45'
updated: '2026-06-11 13:44:31'
description: 二叉排序树（Binary Search Tree，BST）是一种特殊的二叉树，它通过巧妙的节点排列方式，实现了“查找效率高、插入删除灵活”的目标， 它满足以下特性：1. 对于树中任意一个节点，其左子树上所有节点的值都小于该节点的值2. 对于树中任意一个节点，其右子树上所有节点的值都大于该节点的...
category: 数据结构
tags: ["数据结构","算法"]
draft: false
cover: /images/yuque/e0bf0a6962710f62e824936017ffc53b.png
---

二叉排序树（Binary Search Tree，BST）是一种特殊的二叉树，它通过巧妙的节点排列方式，实现了“查找效率高、插入删除灵活”的目标， 它满足以下特性：

1. 对于树中任意一个节点，其左子树上所有节点的值都小于该节点的值

2. 对于树中任意一个节点，其右子树上所有节点的值都大于该节点的值，并且左右子树本身也都是一棵二叉排序树

注意：构造二叉排序树的目的，并不是为了排序，而是为了提高查找、插入以及删除关键字的速度



# 二叉排序树-查找
比如在下面这棵树中查找53

从根节点开始找，逐个判断53与各个节点的大小

![](/images/yuque/e0bf0a6962710f62e824936017ffc53b.png)

```c
#include <stdio.h>
#include <stdlib.h>
typedef int ElemType; // 定义二叉树节点数据类型
// 定义二叉树节点结构体
typedef struct TreeNode
{
	ElemType data;               // 节点存储的数据（关键字）
	struct TreeNode *lchild;    // 左子节点
	struct TreeNode *rchild;    // 右子节点
} TreeNode;

typedef TreeNode* BiTree;      // 定义二叉树指针类型

// 用数组模拟先序创建一棵二叉树（-1 表示空节点）
int treeArr[] = {70, 55, 49, 30, -1, 39, -1, -1, 53, -1, -1, -1, 80, 75, -1, -1, 98, 95, -1, -1, -1};
int idx = 0;

// 递归先序方式构建二叉树（含空节点）
void createTree(BiTree *T)
{
	ElemType num;
	num = treeArr[idx++];  // 取当前索引位置的值

	if (num == -1)
	{
		// -1 代表空指针
		*T = NULL;
	}
	else
	{
		// 创建新节点并递归构建左右子树
		*T = (BiTree)malloc(sizeof(TreeNode));
		(*T)->data = num;
		createTree(&(*T)->lchild);  // 构建左子树
		createTree(&(*T)->rchild);  // 构建右子树
	}
}

// 先序遍历打印二叉树结点值（调试用）
void preOrder(BiTree T)
{
	if (T == NULL)
	{
		return;
	}

	printf("%d ", T->data);     // 访问当前节点
	preOrder(T->lchild);        // 遍历左子树
	preOrder(T->rchild);        // 遍历右子树
}

/*
 * 查找二叉排序树中是否包含指定值 value
 * 参数 T: 当前子树根节点
 * 参数 value: 要查找的值
 * 参数 parent: 当前节点的父节点
 * 参数 pos: 指针变量，用于返回找到的节点
 * 返回值：1 表示找到；0 表示未找到
 */
int search_bst(BiTree T, int value, BiTree parent, BiTree *pos)
{
	if (T == NULL)
	{
		*pos = parent; // 递归到空节点，查找失败，将父节点返回（后面内容可用于插入）
		return 0;
	}

	if (T->data == value)
	{
		*pos = T; // 找到目标值
		return 1;
	}

	if (T->data > value)
	{
		return search_bst(T->lchild, value, T, pos); // 要查找的值比当前节点小，往左子树找
	}
	else
	{
		return search_bst(T->rchild, value, T, pos); // 要查找的值比当前节点大，往右子树找
	}
}

int main(int argc, char const *argv[])
{
	BiTree T;
	createTree(&T);   // 创建二叉排序树

	BiTree searchT;
	search_bst(T, 53, NULL, &searchT);  // 查找值为 53 的节点

	preOrder(T);      // 输出树结构（调试用）
	printf("\n");

	printf("%d\n", searchT->data);  // 输出查找到的节点值
	return 0;
}
```



# 二叉排序树-插入
![](/images/yuque/d4b93f405a9a4a7216b22e2ca59ea563.png)

![](/images/yuque/fef9b4b2a680885a41b011e1170c07a4.png)

![](/images/yuque/fb32a1bf1448599da72226cde7dfdad3.png)

![](/images/yuque/17f2f3ef5d2222610b8413d30139c6e7.png)

```c
#include <stdio.h>
#include <stdlib.h>

typedef int ElemType;

// 二叉树结点结构体定义
typedef struct TreeNode
{
	ElemType data;               // 数据域
	struct TreeNode *lchild;     // 左子树指针
	struct TreeNode *rchild;     // 右子树指针
}TreeNode;

typedef TreeNode* BiTree;

// 先序遍历，用于查看当前树结构
void preOrder(BiTree T)
{
	if (T == NULL)
	{
		return;
	}

	printf("%d ", T->data);       // 先访问根结点
	preOrder(T->lchild);          // 遍历左子树
	preOrder(T->rchild);          // 遍历右子树
}

// 查找元素是否存在于二叉排序树中
// 如果找到，pos 指向该结点，返回 1
// 如果未找到，pos 指向应插入位置的父节点，返回 0
int search_bst(BiTree T, int value, BiTree parent, BiTree *pos)
{
	if (T == NULL)
	{
		*pos = parent;             // 最终未找到，pos 指向待插入位置的父结点
		return 0;
	}

	if (T->data == value)
	{
		*pos = T;                 // 找到了该值
		return 1;
	}

	if (T->data > value)
	{
		// 当前值大于目标值，向左子树查找
		return search_bst(T->lchild, value, T, pos);
	}
	else
	{
		// 当前值小于目标值，向右子树查找
		return search_bst(T->rchild, value, T, pos);
	}
}

// 向二叉排序树中插入一个值
// 如果值已存在，插入失败，返回 0；否则插入成功，返回 1
int insert_bst(BiTree *T, int value)
{
	BiTree parent, pos;          // parent 用于辅助 search_bst，pos 表示插入位置或已存在的位置
	BiTree curr;

	// 查找插入位置
	int status = search_bst(*T, value, NULL, &pos);
	if(status == 0)
	{
		// 如果未找到，创建新结点
		curr = (BiTree)malloc(sizeof(TreeNode));
		curr->data = value;
		curr->lchild = NULL;
		curr->rchild = NULL;
		// 如果树为空，新结点作为根结点
		if (pos == NULL)
		{
			*T = curr;
		}
		// 插入为左子结点
		else if (value < pos->data)
		{
			pos->lchild = curr;
		}
		// 插入为右子结点
		else
		{
			pos->rchild = curr;
		}
		return 1;
	}
	else
	{
		// 如果已存在，不插入
		return 0;
	}
}

int main(int argc, char const *argv[])
{
	int i = 0;
	BiTree T = NULL;

	// 准备插入的初始序列
	int treeArr[] = {70, 55, 49, 30, 39, 53, 80, 75, 98, 95};

	// 批量插入
	for (int i = 0; i < 10; i++)
	{
		insert_bst(&T, treeArr[i]);
	}

	preOrder(T); // 查看当前树结构
	printf("\n");

	insert_bst(&T, 99); // 插入一个新值 99

	preOrder(T); // 再次查看树结构
	printf("\n");

	return 0;
}
```



# 二叉排序树-删除
情况一：删除的结点是叶子节点（没有左右孩子）

直接将其从树中移除即可，不影响其它结构

情况二：删除的结点只有一个孩子（左孩子或右孩子）

让其唯一的子节点“顶替”它的位置，保持排序特性不变

情况三：删除的结点有两个孩子

使用右子树中最小的结点代替，或使用左子树中最大的结点代替

![](/images/yuque/3a40abfbdceb43ac80c3fdabfc805e30.png)

![](/images/yuque/0813bc923f47ebb8081825910061face.png)

![](/images/yuque/7b5a829777fffec0713a1bbffbfcb29a.png)

![](/images/yuque/e9a94a57052a3a8d2744ef7c046e3b45.png)

![](/images/yuque/c62a7dfe0e1f51ee9cbaa7440ec4da20.png)

![](/images/yuque/55823c06f303e3497546b62c7fa5d830.png)

![](/images/yuque/d8b933a627dfd0128f6ac3a813e606c2.png)

![](/images/yuque/f1fff56b797a3a5e9d980e598f0cf0a9.png)

第三种情况有些复杂，下面针对它进行分析：

![](/images/yuque/5026b761210ada13a04a116435c892c3.png)

![](/images/yuque/d395d87654dc0e37601c09ea08a228b5.png)

![](/images/yuque/2affd5ebcd3997384a08e9fdefb0efe6.png)

![](/images/yuque/a50bd6ed1bca974f84e911c22cb704ae.png)

![](/images/yuque/3679fdcd09b9f0f05c74c7e172b0e55c.png)

```c
#include <stdio.h>
#include <stdlib.h>

// 定义数据类型
typedef int ElemType;

// 定义树的节点结构
typedef struct TreeNode
{
	ElemType data;
	struct TreeNode *lchild;  // 左子树
	struct TreeNode *rchild;  // 右子树
}TreeNode;

typedef TreeNode* BiTree;

// 前序遍历：递归地访问根、左、右
void preOrder(BiTree T)
{
	if (T == NULL)
	{
		return;
	}

	printf("%d ", T->data);
	preOrder(T->lchild);
	preOrder(T->rchild);
}

// 查找指定值，若找到将pos指向该节点，若未找到则pos指向待插入位置的双亲节点
int search_bst(BiTree T, int value, BiTree parent, BiTree *pos)
{
	if (T == NULL)
	{
		*pos = parent;  // 没找到，返回最后访问的节点
		return 0;
	}

	if (T->data == value)
	{
		*pos = T;  // 找到，pos指向该节点
		return 1;
	}

	if (T->data > value)
	{
		return search_bst(T->lchild, value, T, pos);
	}
	else
	{
		return search_bst(T->rchild, value, T, pos);
	}
}

// 插入操作，若值不存在，则插入到合适位置
int insert_bst(BiTree *T, int value)
{
	BiTree parent, pos;
	BiTree curr;

	int status = search_bst(*T, value, NULL, &pos);
	if(status == 0)
	{
		// 创建新节点
		curr = (BiTree)malloc(sizeof(TreeNode));
		curr->data = value;
		curr->lchild = NULL;
		curr->rchild = NULL;

		// 如果是根节点
		if (pos == NULL)
		{
			*T = curr;
		}
		else if (value < pos->data)
		{
			pos->lchild = curr;
		}
		else
		{
			pos->rchild = curr;
		}
		return 1;
	}
	else
	{
		// 已存在该值
		return 0;
	}
}

// 真正执行删除的操作（分三种情况）
int delete(BiTree *d)
{
	BiTree temp, record;

	if((*d)->rchild == NULL)
	{
		// 情况1：只有左子树或无子节点
		temp = *d;
		*d = (*d)->lchild;
		free(temp);
	}
	else if ((*d)->lchild == NULL)
	{
		// 情况2：只有右子树
		temp = *d;
		*d = (*d)->rchild;
		free(temp);
	}
	else
	{
		// 情况3：左右子树都有，找左子树中最大的节点替换
		temp = *d;
		record = (*d)->lchild;
		while(record->rchild != NULL)
		{
			temp = record;
			record = record->rchild;
		}

		// 替换当前值
		(*d)->data = record->data;

		// 删除替代节点
		if (temp != *d)
		{
			temp->rchild = record->lchild;
		}
		else
		{
			temp->lchild = record->lchild;
		}
		free(record);
	}
	return 1;
}

// 递归查找并删除目标节点
int delete_bst(BiTree *T, int value)
{
	if (*T == NULL)
	{
		printf("not found!\n");
		return 0;
	}
	else
	{
		if ((*T)->data == value)
		{
			return delete(T);
		}
		else if ((*T)->data > value)
		{
			return delete_bst(&(*T)->lchild, value);
		}
		else
		{
			return delete_bst(&(*T)->rchild, value);
		}
	}
}

int main(int argc, char const *argv[])
{
	int i = 0;
	BiTree T = NULL;
	// 构建初始二叉排序树
	int treeArr[] = {70, 55, 49, 30, 39, 53, 80, 75, 98, 95};
	for (int i = 0; i < 10; i++)
	{
		insert_bst(&T, treeArr[i]);
	}

	preOrder(T);  // 输出原始树结构
	printf("\n");

	delete_bst(&T, 49);  // 删除指定节点

	preOrder(T);  // 再次输出
	printf("\n");
	return 0;
}
```

