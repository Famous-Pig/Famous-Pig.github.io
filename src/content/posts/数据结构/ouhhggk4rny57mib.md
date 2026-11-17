---
title: 单链表
published: '2026-04-17 10:52:32'
updated: '2026-06-12 15:22:03'
description: 单链表-初始化//定义一个 “链表节点”，每个节点包含：数据 + 指向下一个节点的指针 typedef int ElemType; typedef struct node{ ElemType data; struct node *next; }Node;Node* initList() { /...
category: 数据结构
tags: ["数据结构"]
draft: false
cover: /images/yuque/ceba0974dde0523907cee525c99b711e.png
---

![](/images/yuque/ceba0974dde0523907cee525c99b711e.png)



# 单链表-初始化
```c
//定义一个 “链表节点”，每个节点包含：数据 + 指向下一个节点的指针
typedef int ElemType;

typedef struct node{ 
    ElemType data; 
    struct node *next; 
}Node;
```

```c
Node* initList() 
{ 
    //申请一个节点大小的内存，作为头结点
    Node *head = (Node*)malloc(sizeof(Node));
    //头结点的数据域一般不用，随便设个0
    head->data = 0; 
    //刚开始链表为空，next 指向 NULL
    head->next = NULL;
    //返回这个头结点指针
    return head; 
}

int main() 
{ 
    Node *list = initList(); 
    return 1; 
}
```

![](/images/yuque/d58f43aeaa5a99db87b0aeb0b5291754.png)



# 单链表-头插法
![](/images/yuque/c2a07f67d91e769ffa03dc625b04fb11.png)

```c
//在链表的第一个有效位置插入元素 e（插在头结点L后面）
int insertHead(Node* L, ElemType e) 
{ 
    //新建一个节点 p，用来存放新元素 e
    Node *p = (Node*)malloc(sizeof(Node)); 
    p->data = e; 
    p->next = L->next; // 新节点接到原来第一个节点前面
    L->next = p; //头节点指向新节点，新节点变第一个
} 
int main() 
{ 
    Node *list = initList(); 
    insertHead(list, 10); 
    insertHead(list, 20); 
}
```

![](/images/yuque/30bd95c00d729c20f50cd536b191b538.png)

![](/images/yuque/f89590954523481662c539870217fe4e.png)

![](/images/yuque/891b2299a162087b61ee211348335f04.png)

![](/images/yuque/00fda9e0ff9f7348e8a61ebda6905830.png)



# 单链表-遍历
```c
void listNode(Node* L) 
{ 
    Node *p = L->next; 
    while(p != NULL) 
    { 
        printf("%d\n", p->data); 
        p = p->next; 
    } 
    printf("\n"); 
}
```



# 单链表-尾插法
```c
//获取尾节点
Node* get_tail(Node  *L) 
{ 
    Node *p = L; 
    while(p->next != NULL) 
    { 
        p = p->next; 
    } 
    return p; 
}
```

```c
//在尾节点 tail 后插入大小为e的节点，实现尾插法
Node* insertTail(Node *tail, ElemType e) 
{ 
    Node *p = (Node*)malloc(sizeof(Node)); 
    p->data = e; 
    tail->next = p; 
    p->next = NULL; 
    return p; 
}

```

![](/images/yuque/8b43212a8d78dfcb0e7dae1ef965a4eb.png)

![](/images/yuque/e51c1d5437fb4737323317a7ae76edbe.png)

![](/images/yuque/c73918b6df1ac935c0b9f0ef03907d84.png)

![](/images/yuque/1b0cd0d2da6119c3ea6f2a85765f34b5.png)



# 单链表-在指定位置插入数据
![](/images/yuque/3ab19cea7e6de14386dfc16c9ec75f2a.png)

![](/images/yuque/f90a16ff95dfd83e6e36e739bcb2337c.png)

![](/images/yuque/caa58f779d407d022b0533235703220d.png)

![](/images/yuque/9375eb4b07f780b12c741fd539792c3a.png)

![](/images/yuque/7c7e863139224f9cef7a756fc10ac64f.png)

```c
//在带头结点的链表 L 中，第 pos 个位置插入元素 e
int insertNode(Node* L, int pos, ElemType e)
{
    Node* p = L; //p 是用来遍历找位置的指针，一开始 p = 头结点
    int i = 0;
    while (i < pos - 1)
    {

        //让 p 走到「第 pos-1 个节点」
        p = p->next;
        i++;
        if (p == NULL)
        {
            return 0; //位置越界，插入失败
        }
    }

    Node* q = (Node*)malloc(sizeof(Node));
    q->data = e;
    q->next = p->next;
    p->next = q;
    return 1;
}
```



# 单链表-删除节点
```c
//在带头结点的链表 L 中，删除第 pos 个节点，成功返回 1，失败返回 0
int deleteNode(Node* L, int pos)
{
    Node* p = L;
    int i = 0;
    //让 p 走到 第 pos-1 个节点（要删节点的前一个）
    while (i < pos - 1)
    {
        p = p->next;
        i++;
        if (p == NULL) 
        {
            return 0;
        }
    }

    //如果 p 已经是最后一个节点，后面没东西可删，直接失败
    if (p->next == NULL)
    {
        printf("要删除的位置错误\n");
        return 0;
    }

    Node* q = p->next;
    p->next = q->next;
    free(q);
    return 1;
}
```

![](/images/yuque/56f57aea70fe389ed130296fd3cc149e.png)

![](/images/yuque/688a1f13a4a67437600e08a06b361bf5.png)

![](/images/yuque/c8332e22f9a95e1623da1361eb4a563e.png)

![](/images/yuque/51f4e8ef2fc8cd7d7833e6bf890b5422.png)



# 单链表-获取链表长度
```c
int listLength(Node *L) 
{ 
    Node *p = L; 
    int len = 0; 
    while(p != NULL) 
    { 
        p = p->next; 
        len++; 
    } 
    return len; 
}
```



# 单链表-释放链表
![](/images/yuque/20479dc10a51c0d10613fe9af58374d1.png)

![](/images/yuque/b4ed79c832b8d344723f9e905b916662.png)

![](/images/yuque/31395a595458f2f492bb47b2cd9438de.png)

![](/images/yuque/108cf16fe3f985e8ccf889889c7b97ba.png)

![](/images/yuque/8fb62a6f9d79139e899ad999e31fc47d.png)

```c
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

