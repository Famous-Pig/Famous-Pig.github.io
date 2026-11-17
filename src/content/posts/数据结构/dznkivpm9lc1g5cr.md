---
title: 队列
published: '2026-04-19 01:13:16'
updated: '2026-06-15 00:37:34'
description: 队列（queue）是一种先进先出（First In First Out, FIFO）的线性表。它只允许在表的一端进行插入，而在另一端删除元素。在队列中，允许插入的一端称为队尾（rear）,允许删除的一端则称为队头（front）。假设队列为 q = (a1, a2, …, an)，那么，a1 就...
category: 数据结构
tags: ["数据结构"]
draft: false
cover: /images/yuque/76227fd8e51b6f265a856300f1834c4c.png
---

**队列（queue）**是一种**先进先出**（First In First Out, FIFO）的线性表。它只允许在表的一端进行插入，而在另一端删除元素。

在队列中，允许插入的一端称为**队尾（rear）**,允许删除的一端则称为**队头（front）**。假设队列为 q = (a1, a2, …, an)，那么，a1 就是队头元素，an 就是队尾元素。队列中的元素是按照 a1, a2, …, an 的顺序进入的，退出队列也只能按照这个次序依次退出，也就是说，只有在 a1, a2, …, an-1 都离开队列之后，an 才能退出队列 

![](/images/yuque/76227fd8e51b6f265a856300f1834c4c.png)



# 队列的顺序结构实现
```c
#define MAXSIZE 100 
typedef int ElemType; 

typedef struct  
{ 
    ElemType data[MAXSIZE]; 
    int front; 
    int rear; 
}Queue;
```



# 队列的顺序结构实现-初始化
```c
#define MAXSIZE 100 
typedef int ElemType; 
typedef struct  
{ 
    ElemType data[MAXSIZE]; 
    int front; 
    int rear; 
}Queue; 

void initQueue(Queue *Q) 
{ 
    Q->front = 0; 
    Q->rear = 0; 
}
```

![](/images/yuque/7bbe9c8f860a10d085296aaeeaa33746.png)



# 队列的顺序结构-判断队列是否为空
```c
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
```



# 队列的顺序结构-出队
```c
ElemType dequeue(Queue *Q) 
{ 
    if (Q->front == Q->rear) 
    { 
        printf("空的\n"); 
        return 0; 
    } 
    ElemType e = Q->data[Q->front]; 
    Q->front++; 
    return e;
}
```



# 队列的顺序结构-入队
![](/images/yuque/117ea48a3675da94720002df2c599590.png)

![](/images/yuque/0adfa5c2bade1068c4b0a1008db92f03.png)



# 队列的顺序结构-入队
```c
int equeue(Queue *Q, ElemType e) 
{ 
    if (Q->rear >= MAXSIZE) 
    { 
        //队尾指针已经接近或超出数组最大长度，这里是在检查队列是否真的满了
        if(!queueFull(Q)) 
        { 
            return 0; 
        } 
    }
    Q->data[Q->rear] = e; 
    Q->rear++; 
    return 1; 
}
```

![](/images/yuque/fdbc64590e6eae937b47f503e91b02d0.png)

![](/images/yuque/baa8a1cb59742108952c7e8fe5fef5c4.png)

![](/images/yuque/7d12d5a789e21faf10cccf4aa82b362d.png)



# 队列的顺序结构-调整队列
![](/images/yuque/36188f4ddc2d95a88f5b460c2589a930.png)

![](/images/yuque/2b5ffbdc5719c8f45b73186255a31630.png)

```c
int queueFull(Queue *Q)
{
    if(Q->front > 0)
    {
        int step = Q->front;
        for(int i = Q->front; i <= Q->rear; ++i)
        {
            Q->data[i - step] = Q->data[i];
        }
        Q->front = 0;
        Q->rear = Q->rear - step;
        return;
    }
    else
    {
        printf("真的填满了\n");
        return 0;
    }
}
```



# 队列的顺序结构-获取队头数据
```c
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
```



# 队列的顺序结构-动态内存分配
```c
typedef struct  
{ 
    ElemType *data; 
    int front; 
    int rear;  
}Queue; 

Queue* initQueue() 
{ 
    Queue *q = (Queue*)malloc(sizeof(Queue)); 
    q->data = (ElemType*)malloc(sizeof(ElemType) * MAXSIZE); 
    q->front = 0; 
    q->rear = 0; 
    return q; 
}

```



# 队列的顺序结构-循环队列
仅在入队出队时有些区别

![](/images/yuque/5bc5fc7e774600153cca57ced2210f15.png)



# 队列的顺序结构-循环队列-入队
```c
int equeue(Queue *Q, ElemType e) 
{ 
    //循环队列判满公式：(队尾 + 1) 取模 == 队头 → 队列满
    if ((Q->rear + 1) % MAXSIZE == Q->front) 
    {
        printf("满了\n"); 
        return 0; 
    } 
    Q->data[Q->rear] = e; 
    Q->rear = (Q->rear + 1) % MAXSIZE; 
    return 1; 
}
```

![](/images/yuque/5c6a868060269d9367b8a3a4cf1b1753.png)

![](/images/yuque/15b7365a70600e08fc63df271a8a294a.png)

![](/images/yuque/979fc0960e83d8e00ba52c66b00b1e99.png)

![](/images/yuque/f08e311a96136de1d59466a19767ccf3.png)

![](/images/yuque/e41247d49c6917c4e9a1de0a4184fc70.png)

![](/images/yuque/2af362480c564c80694a380a60c7d125.png)

走到这里，假如出队了一个变成下面：

![](/images/yuque/0485965794f0015660f97c2aa2caa03a.png)

观察到，当前队列没满，还可以再加到如下：

![](/images/yuque/fbe959180d1528b568d6dbe2cb8c9379.png)

此时此刻通过 (rear + 1) % MAXSIZE == front 判断队列满了

![](/images/yuque/64b29a91cfbe872daa38626b2e91f6ff.png)

但是队列中还是空了一个

思考如何解决：是否可以让rear初始在队尾而不是和front一起在队头

```c
typedef struct  
{ 
    ElemType *data; 
    int front; 
    int rear;  
}Queue; 

Queue* initQueue() 
{ 
    Queue *q = (Queue*)malloc(sizeof(Queue)); 
    q->data = (ElemType*)malloc(sizeof(ElemType) * MAXSIZE); 
    q->front = 0; 
    q->rear = MAXSIZE - 1; //初始化rear为队尾
    return q; 
}

```

```c
int equeue(Queue *Q, ElemType e) 
{ 
    //改变顺序：先执行挪队尾操作，再进行判满
    Q->rear = (Q->rear + 1) % MAXSIZE; 
    if ((Q->rear + 1) % MAXSIZE == Q->front) 
    { 
        printf("满了\n"); 
        return 0; 
    } 
    Q->data[Q->rear] = e; 
    return 1; 
}
```

![](/images/yuque/8cfd7b22e8b217ffe876cfbf7594c8b4.png)

![](/images/yuque/db04cfd94373cb20a64fedcd04c1dac8.png)

![](/images/yuque/7a905f89cfc2fabf71070850b540ad51.png)

![](/images/yuque/8de839b79cc4d9093aa97e3c4597bc40.png)

![](/images/yuque/71c34ce468f50101260eb49e1d54e860.png)

结果还是会出现空一个的情况

为什么不可以让他全满

因为如果全满rear与front指向同一个位置，而判断为空时的条件是rear==front，有冲突，为了区分所以要空一格

# 队列的顺序结构-循环队列-出队
```c
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

```



# 队列的链式结构
```c
// 队列节点（链表节点）
typedef struct QueueNode 
{ 
    ElemType data; 
    struct QueueNode *next; 
}QueueNode; 

// 队列本身（只存队头、队尾指针）
typedef struct  
{ 
    QueueNode *front; 
    QueueNode *rear; 
}Queue;
```



# 队列的链式结构-初始化
```c
Queue* initQueue() 
{ 
    // 1. 申请队列结构体（头节点）
    Queue *q = (Queue*)malloc(sizeof(Queue)); 
    
    // 2. 新建一个空节点作为**头结点**
    QueueNode *node = (QueueNode*)malloc(sizeof(QueueNode)); 
    node->data = 0; // 数据随便填，不用// 后面暂时没节点
    node->next = NULL; // 后面暂时没节点
    
    // 3. 队头、队尾都指向这个头结点
    q->front = node; 
    q->rear = node; 
    return q; 
}

```

<font style="color:rgba(0, 0, 0, 0.85);background-color:#FFFFFF;">front和rear同时指向同一个节点，他们都有data和next</font>

![](/images/yuque/0205ca0d835d219e5a291134d2f98a87.png)



# 队列的链式结构-判断队列是否为空
```c
int isEmpty(Queue *q) 
{ 
    if (q->front == q->rear) 
    { 
        return 1; 
    } 
    else 
    { 
        return 0; 
    } 
}
```



# 队列的链式结构-入队
![](/images/yuque/26e3b7f4b51a46ab09caaa97056935a5.png)

![](/images/yuque/6197bd3cef847e74bc135c1d42883943.png)

![](/images/yuque/771a46d7d1d0468c8fe2d667d6f2fd07.png)

![](/images/yuque/0edf2330ba31b8868356975e45882cef.png)

![](/images/yuque/196773643ec9b94a955a3fc88630b59e.png)

![](/images/yuque/657958e71782ce496e881e94209628d9.png)

![](/images/yuque/f93f3417fa4a0c27983025bcc2cbc191.png)

```c
void equeue(Queue *q, ElemType e) 
{ 
    QueueNode *node = (QueueNode*)malloc(sizeof(QueueNode)); 
    node->data = e; 
    node->next = NULL; 
    q->rear->next = node; 
    q->rear = node; 
}
```



# 队列的链式结构-出队
![](/images/yuque/e944ed20423e6fa4f3b8b534e5259a8c.png)

![](/images/yuque/b277641748281aff478cd19de863b83f.png)

![](/images/yuque/f0edb124950a2e45445c0b7a3eb89e24.png)

![](/images/yuque/36ed32672d2ccd5d86c9383d1cdff46a.png)

```c
int dequeue(Queue *q, ElemType *e) 
{ 
    QueueNode *node = q->front->next; 
    *e = node->data; 
    q->front->next = node->next; 
    if (q->rear == node) 
    { 
        q->rear = q->front; 
    } 
    free(node); 
    return 1; 
}
```



# 队列的链式结构-获取队头元素
```c
ElemType getFront(Queue *q) 
{ 
    if (isEmpty(q)) 
    { 
        printf("空的\n"); 
        return 0; 
    } 
    return q->front->next->data;
}
```



# 双端队列
左右两头都能插、也能删的队列  

![](/images/yuque/8f531988c50211b957c1e7acc926c7c5.png)

![](/images/yuque/3aa941df1d046985e9f8c2472a6b7b97.png)

