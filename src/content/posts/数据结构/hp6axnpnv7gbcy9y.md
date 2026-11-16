---
title: 单向循环链表
published: '2026-04-17 21:02:08'
updated: '2026-06-08 16:26:01'
description: 循环链表（Circular Linked List）是另一种形式的链式存储结构。其特点是表中最后一个节点的指针域指向头节点，整个链表形成一个环当链表遍历时，判别当前指针 p 是否指向表尾结点的终止条件不同在单链表中，判别条件为 p!=NULL 或 p-&gt;next!=NULL，而循环单链表的判别...
category: 数据结构
tags: []
draft: false
cover: /images/yuque/4563d0d1de1d88d0cdcf54319ab5a1f2.png
---

循环链表（Circular Linked List）是另一种形式的链式存储结构。其特点是表中最后一个节点的指针域指向头节点，整个链表形成一个环

当链表遍历时，**判别当前指针 p 是否指向表尾结点的终止条件不同**

在单链表中，判别条件为 p!=NULL 或 p->next!=NULL，而循环单链表的判别条件为 p!=L 或 p->next!=L

![](/images/yuque/4563d0d1de1d88d0cdcf54319ab5a1f2.png)



# 判断链表是否有环
![](/images/yuque/87edfe69f660fa6b29ef3a126d18fa30.png)

![](/images/yuque/315ff60542c795d4eee7373a7c5244bb.png)

![](/images/yuque/c42889fc4c6439c691d53982b86ecbe5.png)

![](/images/yuque/25ae21b2a01e1e51d596591ad4a72370.png)

![](/images/yuque/03c2fbf37cb9e2cf75e05057f7ff75a0.png)

![](/images/yuque/985b63763696f5bf66cbc5cd20ed98d6.png)

![](/images/yuque/071acbf2590d082826e7739fb286c09a.png)

![](/images/yuque/2e06e47cdb9828f3a0a8ef2677ade2bd.png)

```c
int isCycle(Node *head) 
{ 
    Node *fast = head; // 快指针
    Node *slow = head; // 慢指针
    while(fast != NULL && fast->next != NULL) 
    { 
        fast = fast->next->next; // 快指针走 2 步
        slow = slow->next; // 慢指针走 1 步
        if (fast == slow) //如果相遇了，就证明有环
        { 
            return 1; 
        } 
    } 
    return 0; 
}
```



# 链表有环入口在哪？
![](/images/yuque/f30c01099a1b450fe98236a3889c5fe2.png)

![](/images/yuque/b0a94777550907e52f3d933b9ed04e70.png)

![](/images/yuque/a3eb05c793ba84cdad49d47c9829bde7.png)

![](/images/yuque/3b119fd946bc0c77917ff65737772664.png)

![](/images/yuque/5e89be92ca2605749535d854b0e5a0f0.png)

![](/images/yuque/548bdf0673c9d137871032f9f4498739.png)

![](/images/yuque/1621e08cc65696822797f952bed13812.png)

![](/images/yuque/a9193327aac54250f962c45e32b53d70.png)

![](/images/yuque/f2d26dc045b6f9479a424a2d0878ef20.png)

![](/images/yuque/7c1554151e99480efa930231946c0a7e.png)

![](/images/yuque/c8b0124601f6453748eed9b21e80c9ea.png)

![](/images/yuque/d7c9b40f2b8d7a23de56ce6b0dc19184.png)

![](/images/yuque/4408a455a77ad6806bd341deeae1e1e1.png)

![](/images/yuque/f169a482e7178ea6e6d7b5e1074c5b32.png)

![](/images/yuque/5afaa81715f9c9c7c60cd871743da0cf.png)

```c
//找到链表环的入口
Node* findBegin(Node *head)
{
	Node *fast = head;
	Node *slow = head;

	while(fast != NULL && fast->next != NULL)
	{
		fast = fast->next->next;
		slow = slow->next;
		if (fast == slow)
		{
			Node *p = fast;
			int count = 1;
			while(p->next != slow)
			{
				count++;
				p = p->next;
			}

			fast = head;
			slow = head;

			for (int i = 0; i < count; i++)
			{
				fast = fast->next;
			}

			while(fast != slow)
			{
				fast = fast->next;
				slow = slow->next;
			}
			return slow;
		}
	}
	return NULL;
}
```





