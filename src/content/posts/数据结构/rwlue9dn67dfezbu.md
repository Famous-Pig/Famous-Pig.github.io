---
title: 单链表应用
published: '2026-04-17 14:30:35'
updated: '2026-06-13 21:08:56'
description: 单链表应用1-找到链表倒数第k个节点使用双指针（快慢指针）
category: 数据结构
tags: ["数据结构"]
draft: false
cover: /images/yuque/8c3b6f9db452b635762ab493b2d63ce1.png
---

# 单链表应用1-找到链表倒数第k个节点
## ![](/images/yuque/8c3b6f9db452b635762ab493b2d63ce1.png)
## 使用双指针（快慢指针）
![](/images/yuque/c22df12d3cccffb9414515027f529087.png)

![](/images/yuque/6770297fa9976fac34cd70cda33ec1a8.png)

![](/images/yuque/f1b20fe9b9a4d67f29d7346ab5329db2.png)

![](/images/yuque/24851a249a8ad884056f17dd62152e0c.png)

![](/images/yuque/8c407c9e4cac96deba7e5a3857cf04f5.png)

![](/images/yuque/e6942e181ed3ab7ee221d06c828ae56a.png)

![](/images/yuque/46c86b15244cad9e09d13fb7a3405101.png)

![](/images/yuque/894716ae0b88970f08698ee022289e2f.png)

![](/images/yuque/4959ba30fc66c0bdd6834e87fabd897e.png)

```c
int findNodeFS(Node *L, int k) 
{ 
    Node *fast = L->next; 
    Node *slow = L->next; 
    for (int i = 0; i < k; i++) 
    { 
        fast = fast->next; //快指针先走 k 步
    }
    //如果快指针没走到头，快指针与慢指针一起走，直到快指针为空，慢指针就是答案
    while(fast != NULL) 
    { 
        fast = fast->next; 
        slow = slow->next; 
    }
    printf("倒数第%d个节点值为：%d\n", k, slow->data); 
}
```



# 单链表应用2-共享后缀
![](/images/yuque/ccf3d5964b54d8bc436a98f345e8e8d4.png)

## 使用双指针（快慢指针）
![](/images/yuque/3703717c94c67ac063fa769c2964d124.png)

![](/images/yuque/ad6f1929fd4375669334ebe89b7c606d.png)

![](/images/yuque/ee27504335eebda1b106a4e1cd625bba.png)

![](/images/yuque/21e369c4d4dc49faa1d397f01e478827.png)

![](/images/yuque/02128b18b6515381eb7d98305826f258.png)

```c
//查找两个节点共同后缀的起始位置
Node* findIntersectionNode(Node *headA, Node *headB)
{
	if(headA == NULL || headB == NULL)
	{
		return NULL;
	}

	Node *p = headA;
	int lenA = 0;
	int lenB = 0;
	
	//遍历链表A，获取链表A的长度
	while(p != NULL)
	{
		p = p->next;
		lenA++;
	}
	//遍历链表B，获取链表B的长度
	p = headB;
	while(p != NULL)
	{
		p = p->next;
		lenB++;
	}

	Node *m;//快指针
	Node *n;//慢指针
	int step;//两个单词之间数量的差值，可以用于快指针先走的步数
	if (lenA > lenB)
	{
		step = lenA - lenB;
		m = headA;
		n = headB;
	}
	else
	{
		step = lenB - lenA;
		m = headB;
		n = headA;
	}
	//让快指针先走step步
	for (int i = 0; i < step; i++)
	{
		m = m->next;
	}
	//快慢指针同步走，直到指向同一个节点退出循环
	while(m != n)
	{
		m = m->next;
		n = n->next;
	}
	return m;
}
```



# 单链表应用3-删除绝对值相同的节点
![](/images/yuque/30fcb8354cff2b524a511a452466d767.png)

```c
//删除绝对值相同的节点
void removeNode(Node *L, int n)
{
	Node *p = L;
	int index;//作为数组下标使用
	int *q = (int*)malloc(sizeof(int)*(n+1));

	//遍历数组，初始化值为0
	for (int i = 0; i < n+1; i++)
	{
		*(q + i) = 0;
	}

	while(p->next != NULL)
	{
		//abs获取绝对值
		index = abs(p->next->data);
		if(*(q+index) == 0)
		{
			*(q + index) = 1;
			p = p->next;
		}
		else
		{
			Node *temp = p->next;
			p->next = temp->next;
			free(temp);
		}
		
	}
	free(q);
}
```

![](/images/yuque/41bda0dead1ad3dd2de6715044b34ea6.png)

![](/images/yuque/970966ac706fb7dc4c1411df03f21009.png)

![](/images/yuque/895025eb5bbf2ca8cd83c45f090220f1.png)

![](/images/yuque/bd96d7312dfbf23e8cdff627df794d72.png)

![](/images/yuque/8e5208695c57bdc50c2e129eed07a0d2.png)

![](/images/yuque/064f88a4db564455acc487287564b855.png)

![](/images/yuque/26ef35cd2baf1f040a0fcf42a983120e.png)

![](/images/yuque/b69b92ece4c7777672c499ed0e8c06e6.png)



# 单链表的应用-反转链表
![](/images/yuque/e23ecdb6c30740f5c0f752bf130046a8.png)

![](/images/yuque/1781dba5c64180d28f0deb8b244f48cc.png)

![](/images/yuque/a98bb990c5a689aaf1aa31b8379c68ab.png)

![](/images/yuque/4ac2570bf22ca77fe9487745ae28b447.png)

![](/images/yuque/6956c0054ca3520082cb54fa5c59a3a4.png)

![](/images/yuque/3e70780b2d37e5cf33025b59b8886156.png)

![](/images/yuque/4d3cc6a4d6ca2bb04716e41e4ccfa8c1.png)

![](/images/yuque/edf9a58ad07ecd375e62eb69f3f7e0c0.png)

![](/images/yuque/f9ddae9c35a3bf7215e84066b25420bb.png)

![](/images/yuque/935d708d96ca38fefeae61f9ee885ee9.png)

![](/images/yuque/db387032893efdaf05ebbc7d87ca2ba1.png)

![](/images/yuque/32dc91874bfd4ea1d65d6b4ee7debc38.png)

![](/images/yuque/49ca9975181c3328e1be84f6cdf67197.png)

![](/images/yuque/bbe5c0122c31f3cff36f0414c0dd29d3.png)

![](/images/yuque/9a150c978b8aedf49764c10557168662.png)

```c
//反转链表
Node* reverseList(Node* head)
{
	Node *first = NULL;
	Node *second = head->next;
	Node *third;

	while(second != NULL)
	{
		third = second->next;
		second->next = first;
		first = second;
		second = third;
	}
	Node *hd = initList();
	hd->next = first;

	return hd;
}
```



# 单链表的应用-删除链表中间节点
![](/images/yuque/892eca72d496e82bebf04efb3c046212.png)

![](/images/yuque/4c0372487481be42ca9c20c8786b7e7b.png)

![](/images/yuque/604e58be42871554c022c157229a47a0.png)

![](/images/yuque/696d05aca542a79d313e8d0f01a761d9.png)

![](/images/yuque/ba81cc6136e7b7cfda493fad8c3e2834.png)

![](/images/yuque/66319832b3fb6844952e9fbaee499a2d.png)

![](/images/yuque/84f95966c33e9fccea3cfc3bf38a6cd2.png)

```c
//找到链表的中间节点（链表长度未知），然后把它删掉
//如果链表长度是偶数，会找到「中间偏右」的那个节点
int delMiddleNode(Node *head) 
{ 
    Node *fast = head->next; // 快指针：从头结点下一个（第一个数据）开始
    Node *slow = head; // 慢指针：从头结点开始
    while(fast != NULL && fast->next != NULL) 
    { 
        fast = fast->next->next; // 快指针一次走 2 步
        slow = slow->next; // 慢指针一次走 1 步
    } 
    Node *q = slow->next; 
    slow->next = q->next; 
    free(q); 
    return 1; 
}
```



# 单链表的应用-链表交叉排序
![](/images/yuque/cb7ab3b05a6f13d57c700db0635475a2.png)

![](/images/yuque/8b903cb20ec8015a71400f40f3aa6894.png)

![](/images/yuque/9cdfc3ee77c0a2a9097d65b8e81fffa9.png)

![](/images/yuque/38cbceef7021d3d40e86f3309f53c590.png)

![](/images/yuque/440d17941aaeb24c3377f133db0703be.png)

![](/images/yuque/b49840f46329657ef7607b61eda0dd1b.png)

![](/images/yuque/92b2bbd9bd28b74871aea67e4b06e1dc.png)

```c
//链表重新排序
void reOrderList(Node *head)
{
	Node *fast = head->next;
	Node *slow = head;

    //快慢指针找中点，切链表
	while(fast != NULL && fast->next != NULL)
	{
		fast = fast->next->next;
		slow = slow->next;
	}

	Node *first = NULL;
	Node *second = slow->next; // 后半段开头
	slow->next = NULL; // 切断前后两半
	Node *third = NULL;

    // 经典链表反转
	while(second != NULL)
	{
		third = second->next;
		second->next = first;
		first = second;
		second = third;
	}

    //交叉合并两个链表
	Node *p1 = head->next;
	Node *q1 = first;
	Node *p2, *q2;
	while(p1 != NULL && q1 != NULL)
	{
		p2 = p1->next;
		q2 = q1->next;

		p1->next = q1;
		q1->next = p2;

		p1 = p2;
		q1 = q2;
	}
}
```





