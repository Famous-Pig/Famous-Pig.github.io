---
title: 双向链表
published: '2026-04-17 21:18:39'
updated: '2026-06-09 11:05:37'
description: 链式存储结构的节点中只有一个指示直接后继的指针域，由此，从某个结点出发只能顺指针向后寻查其他节点。若要寻查结点的直接前驱、则必须从表头指针出发。换句话说，在单链表中，查找直接后继的执行时间为 O(1)，而查找直接前驱的执行时间为 O(n) 。 为克服单链表这种单向性的缺点，可利用双向链表（Do...
category: 数据结构
tags: []
draft: false
cover: /images/yuque/d524ba36860afcd863ba1281ecd697a7.png
---

链式存储结构的节点中只有一个指示直接后继的指针域，由此，从某个结点出发只能顺指针向后寻查其他节点。若要寻查结点的直接前驱、则必须从表头指针出发。换句话说，在单链表中，查找直接后继的执行时间为 O(1)，而查找直接前驱的执行时间为 O(n) 。 为克服单链表这种单向性的缺点，可利用双向链表（Double Linked List）。在双向链表的节点中有两个指针域，一个指向直接后继，另一个指向直接前驱

![](/images/yuque/d524ba36860afcd863ba1281ecd697a7.png)

# 双向链表-初始化
```c
typedef int ElemType; 
typedef struct node{ 
    ElemType data; 
    struct node *prev, *next; 
}Node;
```

```c
Node* initList()
{
	Node *head = (Node*)malloc(sizeof(Node));
	head->data = 0;
	head->next = NULL;
	head->prev = NULL;
	return head;
}
```

# 双向链表-头插法
![](/images/yuque/03b09eb2f1700f9ba9d779f21b88a371.png)

![](/images/yuque/1c90cde60c85ad5f5abd11145701baf2.png)

![](/images/yuque/75a2862bb94da733f19e9397356cae7d.png)

![](/images/yuque/da0d4dd6f20d262f82546807ca0d3609.png)

![](/images/yuque/881f07fa47c1099249310f24dbb56603.png)

![](/images/yuque/9ada803514c5021e9ce1e9072cab931b.png)

```c
//头插法
int insertHead(Node* L, ElemType e)
{
	Node *p = (Node*)malloc(sizeof(Node));
	p->data = e;
	p->prev = L;
	p->next = L->next;
	if (L->next != NULL)
	{
		L->next->prev = p;
	}
	L->next = p;
	return 1;
}
```



# 双向链表-尾插法
![](/images/yuque/0b8b4c393b7139de923748e7778f0d59.png)

![](/images/yuque/9d0e56e3eb45914828f013d1fb01ad21.png)

![](/images/yuque/729c5cd2109a3ab6c44d6426b0916e23.png)![](/images/yuque/77c687280c2bcdb2b86b32eccfddf35e.png)

![](/images/yuque/dd85f3a167a20f0ce113c9a5f30bda54.png)

```c
//尾插法
Node* insertTail(Node *tail, ElemType e)
{
	Node *p = (Node*)malloc(sizeof(Node));
	p->data = e;
	p->prev = tail;
	tail->next = p;
	p->next = NULL;
	return p;
}
```



# 双向链表-在指定位置插入数据
![](/images/yuque/5a6b4207e07394cb97937da70e845413.png)![](/images/yuque/c00e160c151a133b32308b44104b6068.png)

![](/images/yuque/553097e119b59b79642a1a8fad9615a4.png)

![](/images/yuque/150621f107ea92cefd13948a30c52fb9.png)

![](/images/yuque/7b593010817a57467c5a3f9717d61568.png)

![](/images/yuque/f9db5851b98e6d20485405f1ed3d200c.png)

![](/images/yuque/59d250af5a35856b075e9b8fa36f5728.png)

```c
//指定位置插入
int insertNode(Node *L, int pos, ElemType e)
{
	Node *p = L;
	int i = 0;
	while(i < pos-1)
	{
		p = p->next;
		i++;
		if (p == NULL)
		{
			return 0;
		}
	}
	

	Node *q = (Node*)malloc(sizeof(Node));
	q->data = e;
	q->prev = p;
	q->next = p->next;
	p->next->prev = q;
	p->next = q;
	return 1;
}
```



# 双向链表-删除数据
![](/images/yuque/e46598f1c7abc29e1fb911e8448d5efc.png)

![](/images/yuque/6c80721389b25d40afec9f1c189802a3.png)

![](/images/yuque/26e2bea85c35599fdcc286cf952b9c1c.png)

![](/images/yuque/af214c789d4eea9cb82f386ff9b6bed2.png)

![](/images/yuque/9e75d731fd3312613ca4dff69a405e53.png)

![](/images/yuque/a3261caff968031f97c19786528dbbb8.png)

```c
//删除节点
int deleteNode(Node *L, int pos)
{
	Node *p = L;
	int i = 0;
	while(i < pos-1)
	{
		p = p->next;
		i++;
		if (p == NULL)
		{
			return 0;
		}
	}

	if(p->next == NULL)
	{
		printf("要删除的位置错误\n");
		return 0;
	}

	Node *q = p->next;
	p->next = q->next;
	q->next->prev = p;
	free(q);
	return 1;
}
```

```c
//释放链表
void freeList(Node *L)
{
	Node *p = L->next;
	Node *q;

	while(p != NULL)
	{
		q = p->next;
		free(p);
		p = q;
	}
	L->next = NULL;
}
```



# 顺序表VS链表
![](/images/yuque/42fd0b49d3e13bc1445b8b009d083ef4.png)



