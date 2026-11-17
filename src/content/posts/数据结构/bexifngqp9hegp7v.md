---
title: 线索二叉树
published: '2026-04-22 20:40:08'
updated: '2026-06-09 15:01:35'
description: '通过遍历可以得到二叉树的线性排列但这样线性序列只有在遍历时才能得到将二叉树线索化得到线索二叉树可以解决这个问题线索化：利用叶节点的空余空间记录前驱、后继二叉树的线索化按照中序遍历来线索化#include  #include  typedef char El'
category: 数据结构
tags: ["数据结构"]
draft: false
cover: /images/yuque/957276f5a75af886a9eb1f0cd022e0ff.png
---

通过遍历可以得到二叉树的线性排列

但这样线性序列只有在遍历时才能得到

将二叉树线索化得到线索二叉树可以解决这个问题

线索化：利用叶节点的空余空间记录前驱、后继

# 二叉树的线索化
按照中序遍历来线索化

![](/images/yuque/957276f5a75af886a9eb1f0cd022e0ff.png)

```c
#include <stdio.h>
#include <stdlib.h>
typedef char ElemType;
// 定义线索二叉树的节点结构
typedef struct ThreadNode {
    ElemType data; // 节点存储的数据
    struct ThreadNode *lchild; // 左指针：指向左孩子或前驱
    struct ThreadNode *rchild; // 右指针：指向右孩子或后继
    int ltag; // 左标志：0 表示左孩子，1 表示前驱线索
    int rtag; // 右标志：0 表示右孩子，1 表示后继线索
} ThreadNode;
  
typedef ThreadNode* ThreadTree;
  
char str[] = "ABDH##I##EJ###CF##G##";  // 根据前序遍历序列构造树，# 表示空
int idx = 0;                           // 当前扫描到的字符位置
ThreadTree prev;                      // 全局变量：用于记录前一个访问的节点
  
// 创建普通二叉树（根据字符串str）
void createTree(ThreadTree *T) {
    ElemType ch = str[idx++];
   if (ch == '#') {
        *T = NULL;  // 空节点
    } else {
        *T = (ThreadTree)malloc(sizeof(ThreadNode));
        (*T)->data = ch;
        createTree(&(*T)->lchild);  // 构建左子树
        (*T)->ltag = (*T)->lchild ? 0 : 1;  // 有左子树 → 0，没左子树 → 后续补线索
        createTree(&(*T)->rchild);  // 构建右子树
        (*T)->rtag = (*T)->rchild ? 0 : 1;  // 有右子树 → 0，没右子树 → 后续补线索
    }
}
  
// 中序线索化函数：建立前驱/后继关系
void threading(ThreadTree T) {
    if (T != NULL) {
        threading(T->lchild);  // 递归线索化左子树
 
        // 如果当前节点左指针是空，建立前驱线索
       if (T->ltag == 1)
            T->lchild = prev;
 
        // 如果前一个节点的右指针是空，建立其后继线索指向当前节点
        if (prev && prev->rtag == 1)
            prev->rchild = T;
 
        prev = T;  // 更新 prev 为当前节点
        threading(T->rchild);  // 递归线索化右子树
    }
}
 
// 创建头结点，调用线索化过程，建立线索二叉树
void inOrderThreading(ThreadTree *T, ThreadTree *head) {
    *head = (ThreadTree)malloc(sizeof(ThreadNode));  // 创建头结点
    (*head)->ltag = 0;
    (*head)->rtag = 1;
    (*head)->rchild = *head;  // 初始时回指自己
 
    if (*T == NULL) {
        (*head)->lchild = *head;  // 空树的情况
    } else {
        (*head)->lchild = *T;     // 头结点左指向根节点
        prev = *head;             // 初始化前驱指针
        threading(*T);            // 中序线索化整个树
 
        // 补全最后一个节点的后继线索
        prev->rchild = *head;
        prev->rtag = 1;
         (*head)->rchild = prev;   // 头结点的 rchild 指向最后一个节点
    }
}
 
// 中序遍历线索化后的二叉树（非递归）
void inOrder(ThreadTree T) {
    ThreadTree curr = T->lchild;  // 从头结点的左子树开始（即根节点）
    while (curr != T) {
        // 沿着左孩子一直走到底
        while (curr->ltag == 0)
            curr = curr->lchild;
 
        // 访问当前节点
        printf("%c ", curr->data);
 
        // 顺着线索一直向右访问所有后继
        while (curr->rtag == 1 && curr->rchild != T) {
            curr = curr->rchild;
            printf("%c ", curr->data);
        }
  
         // 进入当前节点的右子树
        curr = curr->rchild;
    }
}
 
int main() {
    ThreadTree T, head;
    createTree(&T);               // 创建原始二叉树
    inOrderThreading(&T, &head); // 执行线索化处理
    printf("中序遍历结果：");
    inOrder(head);                // 遍历线索二叉树
    return 0;
  }

```



从代码实现的角度，如何判断节点中存放的是孩子还是线索

例如：结点E

增加两个int变量ltag和rtag，如果是0表达的是一个孩子结点，如果为1表示的是一个线索结点，如图中ltag为0那么它指向的是孩子结点，rtag为1指向的就是线索

![](/images/yuque/1dd803183c015ca5d3d16e73e69ae5b8.png)

![](/images/yuque/6994bf01ab6a75e004478df275978c32.png)



# 线索二叉树-存储结构
```c
typedef char ElemType; 
typedef struct ThreadNode 
{ 
    ElemType data; 
    struct ThreadNode *lchild; 
    struct ThreadNode *rchild; 
    int ltag; 
    int rtag; 
}ThreadNode; 

typedef ThreadNode* ThreadTree;
```

ltag为0时，指向该结点左孩子，为1时，指向该结点的前驱线索

rtag为0时，指向该结点有孩子，为1时，指向该结点的后继线索



# 线索二叉树-中序遍历线索化
![](/images/yuque/1afc3ce0917610115cc47e60cf567b82.png)

代码与上面二叉树的线索化一致



# 二叉树-真题解析
![](/images/yuque/1c4c93fc93d7ffb31b434893d1f8739f.png)

![](/images/yuque/83d259a2d5be60d82cb62ed0166bfe1b.png)

![](/images/yuque/0c5ade8fbb03f19e1a6afeea9ec7c69c.png)



