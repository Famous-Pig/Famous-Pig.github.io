---
title: 顺序表
published: '2026-04-17 09:59:05'
updated: '2026-06-07 02:09:54'
description: 用一组连续的内存单元依次存储线性表的各个元素，也就是说，逻辑上相邻的元素，实际的物理存储空间也是连续的顺序表存储结构#define MAXSIZE 100 typedef int ElemType; //给int起个别名ElemType（元素类型），以后可以改为其他类型 typedef str...
category: 数据结构
tags: ["数据结构"]
draft: false
cover: /images/yuque/1a9b8973be6e3fe3df8f704520ba600e.png
---

用一组连续的内存单元依次存储线性表的各个元素，也就是说，逻辑上相邻的元素，实际的物理存储空间也是连续的



# 顺序表存储结构
```c
#define MAXSIZE 100
typedef int ElemType; //给int起个别名ElemType（元素类型），以后可以改为其他类型

typedef struct{
    ElemType data[MAXSIZE]; //一个数组，用来存数据
    int length; //实际有多少元素
}SeqList; //顺序表
```

![](/images/yuque/1a9b8973be6e3fe3df8f704520ba600e.png)



# 顺序表-初始化
```c
#define MAXSIZE 100 
typedef int ElemType;

typedef struct{ 
    ElemType data[MAXSIZE]; 
    int length; 
}SeqList;

//把顺序表清空，标记为 “空表”，里面一个元素都没有
//SeqList *L 指向一个 SeqList 结构体变量
//目的：直接修改外面的结构体，而不是副本
void initList(SeqList *L) 
{ 
    L->length = 0; 
}
```



# 顺序表-在尾部添加元素
```c
int appendElem(SeqList *L, ElemType e) 
{ 
    if (L->length>=MAXSIZE) 
    { 
        printf("顺序表已满\n"); 
        return 0; 
    }
    L->data[L->length] = e; 
    L->length++; 
    return 1; 
}

```



# 顺序表-遍历
```c
void listElem(SeqList *L) 
{ 
    for (int i = 0; i < L->length; i++) 
    { 
        printf("%d ", L->data[i]); 
    } 
    printf("\n"); 
}
```



# 顺序表-插入元素
![](/images/yuque/c8f5f608552cdf1ea90bb1d7b4d7d470.png)

![](/images/yuque/7603292654e04f7f871ad2602a55a2b9.png)

![](/images/yuque/7d0acecf8a7096da39a3883aab226a9c.png)

![](/images/yuque/be9d031c7a1b8791e47ef12d1f107b49.png)

```c
//功能：在顺序表 L 的第 pos 个位置，插入一个元素 e，插入成功后长度 + 1
int insertElem(SeqList *L, int pos, ElemType e) 
{ 
    //判断位置是否合法
    if (pos <= L->length) 
    {
        //从后往前，把元素往后挪一位，腾出位置
        for (int i = L->length-1; i >= pos-1; i--) 
        {
            L->data[i+1] = L->data[i]; 
        }
        //把新元素放进空出来的位置
        L->data[pos-1] = e;
        //表长度+1
        L->length++;
    } 
    return 1; 
}
```

顺序表插入数据的最好时间复杂度是O(1)

顺序表插入数据的最坏时间复杂度是O(n)



# 顺序表-删除元素
![](/images/yuque/f735b386574e628f6823e0e543e29fbd.png)

![](/images/yuque/dee05aff530162858f3748074d0662db.png)

![](/images/yuque/63f408d4ba0547c65f6969fe6d408c2b.png)

![](/images/yuque/be90fb6d46adf4cf4679de8213fcd12b.png)

```c
/*
删除顺序表 L 中第 pos 个位置的元素，
把删掉的值通过 e 带回来，
然后后面的元素往前挪，长度减 1。
*/
int deleteElem(SeqList *L, int pos, ElemType *e) 
{
    //把要删除的元素先保存到 e 指向的变量里
    *e = L->data[pos-1];
    //如果删的不是最后一个元素，才需要往前挪
    if (pos < L->length)
    {
        for (int i = pos; i < L->length; i++)
        {
            //后面的元素依次往前挪一位，把删掉的位置填上
            L->data[i-1] = L->data[i];
        }
    }
    //删除完成，元素个数减 1
    L->length--;
    //返回1 表示删除成功
    return 1;
}
```



# 顺序表-查找
```c
//功能：在顺序表 L 里查找值等于 e 的元素，找到了返回它的位置（第几个），找不到就返回 0
int findElem(SeqList *L, ElemType e) 
{
    for (int i = 0; i < L->length; i++) 
    { 
        if(L->data[i] == e) 
        { 
            return i + 1; 
        }
    } 
    return 0; 
}
```



# 顺序表-动态分配内存地址初始化
```c
typedef struct{ 
    ElemType *data; //一个指针，将来指向堆上的动态数组，不再是固定大小 data[MAXSIZE] 了
    int length; 
}SeqList;

//一个返回指针的函数
SeqList* initList() 
{ 
    SeqList *L = (SeqList*)malloc(sizeof(SeqList)); 
    L->data = (ElemType*)malloc(sizeof(ElemType) * MAXSIZE); 
    L->length = 0; 
    return L; 
}
```

