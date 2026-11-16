---
title: 栈
published: '2026-04-18 23:59:31'
updated: '2026-06-09 11:10:32'
description: 栈的介绍栈（stack）是限定仅在表尾进行插入或删除操作的线性表。因此对栈来说，表尾端有其特殊含义，称为栈顶（top），相应地，表头端称为栈底（bottom）。不含元素的空表称为空栈假设 S=(a1, a2, …, an)，则称 a1 为栈底元素，an 为栈顶元素。栈中元素按 a1, a2, ...
category: 数据结构
tags: []
draft: false
cover: /images/yuque/32ce17a8aa848e3631651074ee59ca80.png
---

# 栈的介绍
**栈（stack）**是限定仅在表尾进行插入或删除操作的**线性表**。因此对栈来说，表尾端有其特殊含义，称为**栈顶（top）**，相应地，表头端称为**栈底（bottom）**。不含元素的空表称为**空栈**

假设 S=(a1, a2, …, an)，则称 a1 为栈底元素，an 为栈顶元素。栈中元素按 a1, a2, …, an 的次序进栈，退栈的第一个元素应为栈顶元素。换句话说，栈的修改是按照**后进先出**的原则进行的。因此，栈又称为后进先出 （Last In First Out, LIFO）的线性表

![](/images/yuque/32ce17a8aa848e3631651074ee59ca80.png)



栈是限制插入和删除操作只能在一个位置进行的表，该位置是表的末端，叫作栈顶（top）。对栈的基本操作有**进栈（push）**和**出栈（Pop）**，前者相当于插入， 后者则是删除最后插入的元素



# 栈的顺序结构实现
```c
#define MAXSIZE = 100 
typedef int ElemType; 

typedef struct{ 
    ElemType data[MAXSIZE]; 
    int top; 
}Stack;
```



# 栈的顺序结构-初始化
```c
#define MAXSIZE = 100 
typedef int ElemType;

typedef struct{ 
    ElemType data[MAXSIZE]; 
    int top; 
}Stack;

void initStack(Stack *s) 
{ 
    s->top = -1; 
}
```

![](/images/yuque/5408532a1a4d8e8ee1c97877b2665059.png)



# 栈的顺序结构-判断栈是否为空
```c
int isEmpty(Stack *s) 
{ 
    if (s->top == -1) 
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



# 栈的顺序结构-进栈/压栈
```c
int push(Stack *s, ElemType e) 
{ 
    if (s->top >= MAXSIZE - 1) 
    { 
        printf("满了\n"); 
        return 0; 
    }
     
    s->top++; 
    s->data[s->top] = e; 
    return 1;
}
```



# 栈的顺序结构-出栈
```c
//从栈 s 里弹出栈顶元素，把值通过 e 带回去，栈顶指针下移一位
ElemType pop(Stack *s, ElemType *e) 
{ 
    if (s->top == -1) 
    { 
        printf("空的\n"); 
        return 0; 
    }
    
    *e = s->data[s->top]; 
    s->top--; 
    return 1;
}
```



# 栈的顺序结构-获取栈顶元素
```c
int getTop(Stack *s, ElemType *e) 
{ 
    if (s->top == -1) 
    { 
        printf("空的\n"); 
        return 0; 
    } 
    *e = s->data[s->top]; 
    return 1;
}
```



# 栈的顺序结构-动态分配内存
```c
#define MAXSIZE 100 
typedef int ElemType; 
typedef struct  
{ 
    ElemType *data; //只是指针，一开始没有空间，运行时用 malloc 才真正拿到内存
    int top; 
}Stack; 

Stack* initStack() 
{ 
    Stack *s = (Stack*)malloc(sizeof(Stack)); 
    s->data = (ElemType*)malloc(sizeof(ElemType) * MAXSIZE); 
    s->top = -1; 
    return s; 
}
```



# 栈的链式结构实现
![](/images/yuque/c9b874310643e18b25d4e08e2697ab65.png)

```c
typedef int ElemType; 
typedef struct stack 
{ 
    ElemType data; 
    struct stack *next; 
}Stack;
```



# 栈的链式结构实现-初始化
```c
typedef int ElemType; 
typedef struct stack 
{ 
    ElemType data; 
    struct stack *next; 
}Stack; 

Stack* initStack() 
{ 
    //initStack = 创建链栈的头结点
    //栈顶 = 头结点的 next
    Stack *s = (Stack*)malloc(sizeof(Stack)); 
    s->data = 0; 
    s->next = NULL; 
    return s; 
}
```



# 栈的链式结构实现-判断栈是否为空
```c
int isEmpty(Stack *s) 
{ 
    if (s->next == NULL) 
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



# 栈的链式结构实现-进栈/压栈
```c
int push(Stack *s, ElemType e) 
{ 
    Stack *p = (Stack*)malloc(sizeof(Stack)); 
    p->data = e; 
    p->next = s->next; 
    s->next = p; 
    return 1; 
}
```

![](/images/yuque/34f54b63fc0b8f97e83e406d2087f8d0.png)



# 栈的链式结构实现-出栈
```c
int pop(Stack *s, ElemType *e) 
{ 
    if(s->next == NULL) 
    { 
        printf("空的\n"); 
        return 0; 
    } 
    *e = s->next->data; 
    Stack *q = s->next; 
    s->next = q->next; 
    free(q); 
    return 1; 
}

```

![](/images/yuque/034ce3e65a44d95c0e6d2d0d8954ec70.png)

![](/images/yuque/9b02e794c89c495c4249bc38f4cc41c3.png)

![](/images/yuque/23f1ae57ed5d0d33b58f688dce4a0a78.png)

![](/images/yuque/2f86162238386dbefdba5eb16eb0f45f.png)

![](/images/yuque/88966778d8b8e985cdbfe43b60392fc0.png)



# 栈的链式结构实现-获取栈顶元素
```c
int getTop(Stack *s, ElemType *e) 
{ 
    if (s->next == NULL) 
    { 
        printf("空的\n"); 
        return 0;
    } 
    *e = s->next->data; 
    return 1; 
}
```





