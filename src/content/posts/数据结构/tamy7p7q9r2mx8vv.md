---
title: 树与二叉树的转换
published: '2026-04-23 22:26:59'
updated: '2026-05-13 11:23:52'
description: 树 -&gt; 二叉树
category: 数据结构
tags: []
draft: false
cover: /images/yuque/c66274d707a9b51713687eadbb21b709.png
---

# 树 -> 二叉树
![](/images/yuque/c66274d707a9b51713687eadbb21b709.png)

![](/images/yuque/a5a7467c82492f6fe689b717b91420a9.png)

![](/images/yuque/db82dfb06a18c1ca3ec54aab0d018f3c.png)

![](/images/yuque/2d8039fbbcdbd4fe4c5ab2718326e7e7.png)



# 二叉树 -> 树
![](/images/yuque/d66db08a52b77b0d8c61400d38e69027.png)

![](/images/yuque/d249ef76ad7415d370f541af499ac590.png)

![](/images/yuque/497e7c4dcda420693163040237e66883.png)

![](/images/yuque/810cd8cec3a9e134bc696ea6174de6a3.png)



# 森林 -> 二叉树
森林：好多棵树

![](/images/yuque/dae56ebb499fe15e8821c1dd2d17c17f.png)

![](/images/yuque/b067cf6209a9319b4218592db70b5260.png)

![](/images/yuque/a41d924af6085a6dbf422ea1a3d4db3c.png)

![](/images/yuque/4b36ea39f9c04de330f3829d722589a3.png)

![](/images/yuque/11c232e736425cf529305d4009c96692.png)

![](/images/yuque/f9846c48a9bb9c73a528f8d651766f35.png)

![](/images/yuque/b750815228540a308887cbf01817d3e5.png)

![](/images/yuque/7dec1072db18dffee132aea98605b5bb.png)

![](/images/yuque/36d37b85c5b18d6a6721f7708671f2f3.png)



# 二叉树 -> 森林
![](/images/yuque/a2ed6a4950c11f8c4402004b1670610a.png)

![](/images/yuque/57bf7f579a01a970ae7e1e19e0df0cb7.png)

![](/images/yuque/922c9771cd79eb4167c9e15fb765af63.png)

![](/images/yuque/13ad33c77440fb9f2367456e433b8c6a.png)

![](/images/yuque/aad7a5411f9ac975629b58fd96d55811.png)

![](/images/yuque/cc3d85caa20363b3419f64158e02e87e.png)

![](/images/yuque/c7a18a57e0a3c984e39efb9a358e48a0.png)

![](/images/yuque/485c15cff8628c2c9af7dddd1fcfdd3f.png)



# 树的遍历
![](/images/yuque/42416fe19becb70f5b2d8fbf1554f433.png)



# 森林的遍历
![](/images/yuque/6661b989f4e167302db73ef9f143242c.png)



# 树、森林与二叉树的遍历关系
![](/images/yuque/0455e233abe804a5c3e96d256fc6236d.png)



# 树、森林、二叉树-真题解析
![](/images/yuque/56d2cf2245c9954098ca57edfa323d67.png)

![](/images/yuque/2f18343ab37a769465334b9af3a1d529.png)

![](/images/yuque/f2d7a92f7e9370df0d1036028cf52063.png)

![](/images/yuque/c47132e8ee4433c6c46536944ecfd102.png)

![](/images/yuque/03eb34e37a138559a6bc9abda5a8ae8e.png)

![](/images/yuque/7af8167e93e2ecfe9d67eb05b128bf80.png)

![](/images/yuque/b3538d9b675efffbe203c670dc3ce704.png)

![](/images/yuque/73c1b9657b65de27fea18941d19336ff.png)

![](/images/yuque/c98d36089fccdaaa6c1714bb13946876.png)

![](/images/yuque/89df3047cb461e354f85063045b7cc64.png)

![](/images/yuque/bc6817ffbd48f7ce5fd1ee525fc7a175.png)

![](/images/yuque/e92ab5a968962e25147f9699f6b0b18c.png)

![](/images/yuque/ca049d959d3156e1c986616827cc436f.png)

![](/images/yuque/7f87a29aaa42af2ed3741149cf970e49.png)



# 层序遍历
如何得到一棵树有多少层，通过队列来实现

每拿完一层，就出队，通过一个变量来累加层数，如果一层全部出队，那么变量就加一

![](/images/yuque/34e0c404558fe37f9844d134d8dd1806.png)

![](/images/yuque/902ed6f5564f155084b19fb563300d20.png)

![](/images/yuque/9e5a8a3df9104a531455313b6c0de682.png)

![](/images/yuque/3837fa44c51ede33baae0fcb563af773.png)

变量加一

![](/images/yuque/96ecb7a90aec1c11ec058d8576cb5dcf.png)

变量加一

![](/images/yuque/712ba68e3e191fd56d7965bd9fe63acf.png)

![](/images/yuque/da3324aa1cfb493d61d01f1bb8f76948.png)

![](/images/yuque/4d20f015aa6bac960818af1b949e003e.png)

![](/images/yuque/39c69b9498c10321ccde73ba083828df.png)

变量加一

```c
#include <stdio.h>
#include <stdlib.h>

#define MAXSIZE 100

typedef char TreeType;

typedef struct TreeNode
{
	TreeType data;
	struct TreeNode *lchild;
	struct TreeNode *rchild;
}TreeNode;

typedef TreeNode* ElemType;

typedef struct 
{
	ElemType *data;
	int front;
	int rear;
	
}Queue;

typedef TreeNode* BiTree;

char str[] = "ABDH#K###E##CFI###G#J##";
int idx = 0;

void createTree(BiTree *T)
{
	TreeType ch;
	ch = str[idx++];
	if (ch == '#')
	{
		*T = NULL;		
	}
	else
	{
		*T = (BiTree)malloc(sizeof(TreeNode));
		(*T)->data = ch;
		createTree(&(*T)->lchild);
		createTree(&(*T)->rchild);

	}
}

//初始化
Queue* initQueue()
{
	Queue *q = (Queue*)malloc(sizeof(Queue));
	q->data = (ElemType*)malloc(sizeof(ElemType) * MAXSIZE);
	q->front = 0;
	q->rear = 0;
	return q;
}

//判断队列是否为空
int isEmpty(Queue *Q)
{
	if (Q->front == Q->rear)
	{
		printf("空的\n");
		return 1;
	}
	else
	{
		return 0;	
	}
}

//入队
int equeue(Queue *Q, ElemType e)
{
	if ((Q->rear + 1) % MAXSIZE == Q->front)
	{
		printf("满了\n");
		return 0;
	}
	Q->data[Q->rear] = e;
	Q->rear = (Q->rear + 1) % MAXSIZE;
	return 1;
}

//出队
int dequeue(Queue *Q, ElemType *e)
{
	if (Q->front == Q->rear)
	{
		printf("空的\n");
		return 0;
	}
	*e = Q->data[Q->front];
	Q->front = (Q->front + 1) % MAXSIZE;
	return 1;
}

//获取队头元素
int getHead(Queue *Q, ElemType *e)
{
	if (Q->front == Q->rear)
	{
		printf("空的\n");
		return 0;
	}
	*e = Q->data[Q->front];
	return 1;
}

//获取队列元素数量
int queueSize(Queue *Q)
{
	if (!isEmpty(Q))
	{
		return Q->rear - Q->front;
	}
	else
	{
		return 0;
	}
}

int maxDepth(TreeNode* root)
{
	if (root == NULL)
	{
		return 0;
	}

	int depth = 0;
	Queue *q = initQueue();
	equeue(q, root);

	while(!isEmpty(q))
	{
		int count = queueSize(q);
		while(count > 0)
		{
			TreeNode* curr;
			dequeue(q, &curr);
			if (curr->lchild != NULL)
			{
				equeue(q, curr->lchild);
			}
			if (curr->rchild != NULL)
			{
				equeue(q, curr->rchild);
			}
			count--;
		}
		depth++;
	}
	return depth;
}

int main(int argc, char const *argv[])
{
	
	BiTree T;
	createTree(&T);
	printf("%d\n", maxDepth(T));

	return 0;
}
```





