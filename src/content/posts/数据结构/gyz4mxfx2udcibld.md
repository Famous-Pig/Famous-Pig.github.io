---
title: 图的存储结构与遍历
published: '2026-04-24 10:12:41'
updated: '2026-06-14 18:56:40'
description: '邻接矩阵/邻接表邻接矩阵-无向#include  typedef char VertexType; // 顶点类型 typedef int EdgeType; // 边的权值类型（0 或 1） #define MAXSIZE 100 // 最大顶点数 // 图的邻接矩阵结构体...'
category: 数据结构
tags: ["数据结构","算法"]
draft: false
cover: /images/yuque/d72514a7e4b76d0ce1e98c21b6c27157.png
---

邻接矩阵/邻接表

# 邻接矩阵-无向
![](/images/yuque/d72514a7e4b76d0ce1e98c21b6c27157.png)

```c
#include <stdio.h>

typedef char VertexType;   // 顶点类型
typedef int EdgeType;      // 边的权值类型（0 或 1）
#define MAXSIZE 100        // 最大顶点数

// 图的邻接矩阵结构体定义
typedef struct
{
    VertexType vertex[MAXSIZE];         // 顶点数组
    EdgeType arc[MAXSIZE][MAXSIZE];     // 邻接矩阵（二维数组）
    int vertex_num;                     // 顶点个数
    int edge_num;                       // 边的条数
} Mat_Grph;

// 创建图的邻接矩阵
void create_graph(Mat_Grph* G)
{
    G->vertex_num = 4;   // 顶点数：V0~V3
    G->edge_num = 5;     // 边数

    // 顶点命名
    G->vertex[0] = '0';
    G->vertex[1] = '1';
    G->vertex[2] = '2';
    G->vertex[3] = '3';

    // 初始化邻接矩阵
    for (int i = 0; i < G->vertex_num; i++)
    {
        for (int j = 0; j < G->vertex_num; j++)
        {
            G->arc[i][j] = 0;
        }
    }

    // 添加边（无向图，因此要对称赋值）
    G->arc[0][1] = 1;  G->arc[1][0] = 1;  // V0-V1
    G->arc[0][2] = 1;  G->arc[2][0] = 1;  // V0-V2
    G->arc[0][3] = 1;  G->arc[3][0] = 1;  // V0-V3
    G->arc[1][2] = 1;  G->arc[2][1] = 1;  // V1-V2
    G->arc[2][3] = 1;  G->arc[3][2] = 1;  // V2-V3
}

// 输出邻接矩阵
void print_matrix(Mat_Grph G)
{
    printf("邻接矩阵表示如下：\n");
    for (int i = 0; i < G.vertex_num; i++)
    {
        for (int j = 0; j < G.vertex_num; j++)
        {
            printf("%d ", G.arc[i][j]);
        }
        printf("\n");
    }
}

int main(int argc, char const *argv[])
{
    Mat_Grph G; //创建一个邻接矩阵的结构体变量
    create_graph(&G); //初始化邻接矩阵
    print_matrix(G); //输出邻接矩阵
    return 0;
}

```



# 邻接矩阵-有向
![](/images/yuque/2d21f4ebd163e2a3d3f967f7eba9862e.png)

```c
#include <stdio.h>

typedef char VertexType;   // 顶点的数据类型，这里用字符表示顶点
typedef int EdgeType;      // 边的权值类型（此处为简单图，仅用0和1表示是否有边）

#define MAXSIZE 100        // 最大顶点数，可根据需要修改

// 定义图的邻接矩阵结构体
typedef struct
{
    VertexType vertex[MAXSIZE];         // 顶点数组
    EdgeType arc[MAXSIZE][MAXSIZE];     // 邻接矩阵（二维数组）
    int vertex_num;                     // 顶点数
    int edge_num;                       // 边的数目
} Mat_Grph;

// 创建图的邻接矩阵（以图6-13为例，有向图）
void create_graph(Mat_Grph* G)
{
    G->vertex_num = 4;   // 顶点数：V0~V3
    G->edge_num = 4;     // 有向边数为4

    // 顶点命名
    G->vertex[0] = '0';
    G->vertex[1] = '1';
    G->vertex[2] = '2';
    G->vertex[3] = '3';

    // 初始化邻接矩阵，全部赋值为0
    for (int i = 0; i < G->vertex_num; i++)
    {
        for (int j = 0; j < G->vertex_num; j++)
        {
            G->arc[i][j] = 0;
        }
    }

     // 添加有向边
    G->arc[0][3] = 1;  // 0 → 3
    G->arc[1][0] = 1;  // 1 → 0
    G->arc[1][2] = 1;  // 1 → 2
    G->arc[2][0] = 1;  // 2 → 0
    G->arc[2][1] = 1;  // 2 → 1
}

// 输出邻接矩阵
void print_matrix(Mat_Grph G)
{
    printf("邻接矩阵表示如下：\n");
    for (int i = 0; i < G.vertex_num; i++)
    {
        for (int j = 0; j < G.vertex_num; j++)
        {
            printf("%d ", G.arc[i][j]);
        }
        printf("\n");
    }
}

int main(int argc, char const *argv[])
{
    Mat_Grph G;               // 定义一个图结构体变量
    create_graph(&G);        // 构建邻接矩阵
    print_matrix(G);         // 输出邻接矩阵
    return 0;
}
```



# 邻接矩阵-有向带权值
![](/images/yuque/d6fe14ca7011a727acc9849d2a72e959.png)

```c
#include <stdio.h>
#define MAXSIZE 100
#define Max 0x7fffffff   // 用一个极大值表示“无穷”，即无边
typedef char VertexType;   // 顶点类型
typedef int EdgeType;      // 边权类型

// 图的邻接矩阵结构定义
typedef struct {
    VertexType vertex[MAXSIZE];       // 顶点数组
    EdgeType arc[MAXSIZE][MAXSIZE];   // 邻接矩阵
    int vertex_num;                   // 顶点个数
    int edge_num;                     // 边的条数
} Mat_Grph;

// 创建图（带权有向图）
void create_graph(Mat_Grph* G) {
    G->vertex_num = 4;   // 顶点编号：0~3
    G->edge_num = 5;     // 5 条边

    // 初始化顶点标识（可选）
    for (int i = 0; i < G->vertex_num; i++) {
        G->vertex[i] = '0' + i;
    }

    // 初始化邻接矩阵，默认全部为 Max（表示无边）
    for (int i = 0; i < G->vertex_num; i++) {
        for (int j = 0; j < G->vertex_num; j++) {
            G->arc[i][j] = Max;
            if (i == j)
            {
                G->arc[i][j] = 0;
            }
        }
    }

    // 添加边及其权值（由图提供）
    G->arc[0][3] = 3;  // 0 → 3，权值为 3
    G->arc[1][0] = 5;  // 1 → 0，权值为 5
    G->arc[1][2] = 2;  // 1 → 2，权值为 2
    G->arc[2][0] = 6;  // 2 → 0，权值为 6
    G->arc[2][1] = 4;  // 2 → 1，权值为 4
}

// 打印邻接矩阵
void print_matrix(Mat_Grph G) {
    printf("图的邻接矩阵如下（Max 表示无边）：\n");
    for (int i = 0; i < G.vertex_num; i++) {
        for (int j = 0; j < G.vertex_num; j++) {
            if (G.arc[i][j] == Max)
                printf("Max ");
            else
                printf("%3d ", G.arc[i][j]);
        }
        printf("\n");
    }
}

int main() {
    Mat_Grph G; // 定义一个图结构体变量
    create_graph(&G); // 构建邻接矩阵
    print_matrix(G); //输出邻接矩阵
    return 0;
}

```



# 邻接表-无向
![](/images/yuque/1dc71e0ff11fe4ae5b05dbcdc9b9f0c0.png)

```c
#include <stdio.h>
#include <stdlib.h>
#define MAXVEX 100  // 最大顶点数

// 定义边表结点结构体
typedef struct EdgeNode {
    int adjvex;                    // 邻接点在顶点数组中的下标
    struct EdgeNode *next;        // 指向下一个邻接点
} EdgeNode;

// 定义顶点表结点结构体
typedef struct VertexNode {
    char data;                    // 顶点信息（这里用字符代替）
    EdgeNode *firstedge;         // 指向边表的头指针
} VertexNode, AdjList[MAXVEX];

// 图的结构体
typedef struct {
    AdjList adjList;              // 邻接表
    int numVertexes;              // 顶点数
    int numEdges;                 // 边数
} GraphAdjList;

// 创建图 邻接表（无向图）
void createGraph(GraphAdjList *G) {
    G->numVertexes = 4;
    G->numEdges = 5;

    // 顶点命名（V0 ~ V3）
    for (int i = 0; i < G->numVertexes; i++) {
        G->adjList[i].data = '0' + i;
        G->adjList[i].firstedge = NULL;
    }

    // 边集合（无向边，需添加两次）
    int edges[5][2] = {
        {0, 1}, {0, 2}, {0, 3},
        {1, 2}, {2, 3}
    };

    for (int i = 0; i < G->numEdges; i++) {
        int from = edges[i][0];
        int to = edges[i][1];

        // from → to
        EdgeNode *e1 = (EdgeNode *)malloc(sizeof(EdgeNode));
        e1->adjvex = to;
        e1->next = G->adjList[from].firstedge;
        G->adjList[from].firstedge = e1;

        // to → from（因为是无向图）
        EdgeNode *e2 = (EdgeNode *)malloc(sizeof(EdgeNode));
        e2->adjvex = from;
        e2->next = G->adjList[to].firstedge;
        G->adjList[to].firstedge = e2;
    }
}

// 打印邻接表
void printGraph(GraphAdjList G) {
    printf("图的邻接表如下：\n");
    for (int i = 0; i < G.numVertexes; i++) {
        printf("V%c -> ", G.adjList[i].data);
        EdgeNode *p = G.adjList[i].firstedge;
        while (p) {
            printf("%d -> ", p->adjvex);
            p = p->next;
        }
        printf("^\n");
    }
}

int main() {
    GraphAdjList G;
    createGraph(&G);
    printGraph(G);
    return 0;
}
```



# 邻接表-有向
![](/images/yuque/747d86d2c4d529950c58313fd997b81c.png)

```c
#include <stdio.h>
#include <stdlib.h>
#define MAXVEX 100  // 最大顶点数

// 边表结点
typedef struct EdgeNode {
    int adjvex;                    // 邻接点下标
    struct EdgeNode *next;        // 指向下一条边
} EdgeNode;

// 顶点表结点
typedef struct VertexNode {
    char data;                    // 顶点信息
    EdgeNode *firstedge;         // 指向边表的头指针
} VertexNode, AdjList[MAXVEX];

// 图结构体（邻接表）
typedef struct {
    AdjList adjList;              // 邻接表
    int numVertexes;              // 顶点个数
    int numEdges;                 // 边的条数
} GraphAdjList;

// 创建图 6-16 的邻接表（有向图）
void createGraph(GraphAdjList *G) {
    G->numVertexes = 4;
    G->numEdges = 5;

    // 初始化顶点名称（V0 ~ V3）
    for (int i = 0; i < G->numVertexes; i++) {
        G->adjList[i].data = '0' + i;
        G->adjList[i].firstedge = NULL;
    }

    // 有向边集合（只添加一个方向）
    int edges[5][2] = {
        {0, 3}, {1, 0}, {1, 2},
        {2, 0}, {2, 1}
    };

    // 添加每条边
    for (int i = 0; i < G->numEdges; i++) {
        int from = edges[i][0];
        int to = edges[i][1];

        EdgeNode *e = (EdgeNode *)malloc(sizeof(EdgeNode));
        e->adjvex = to;
        e->next = G->adjList[from].firstedge;
        G->adjList[from].firstedge = e;
    }
}

// 打印邻接表
void printGraph(GraphAdjList G) {
    printf("图的邻接表如下：\n");
    for (int i = 0; i < G.numVertexes; i++) {
        printf("V%c -> ", G.adjList[i].data);
        EdgeNode *p = G.adjList[i].firstedge;
        while (p) {
            printf("%d -> ", p->adjvex);
            p = p->next;
        }
        printf("^\n");
    }
}

int main() {
    GraphAdjList G;
    createGraph(&G);
    printGraph(G);
    return 0;
}

```



# 逆邻接表
![](/images/yuque/95dee38b1a4cd9e6a7fe42f5fcc40549.png)

```c
#include <stdio.h>
#include <stdlib.h>
#define MAXVEX 100

// 边表结点（用于逆邻接表）
typedef struct EdgeNode {
    int from;                   // 谁指向我（前驱）
    struct EdgeNode *next;
} EdgeNode;

// 顶点表结构体
typedef struct VertexNode {
    char data;                 // 顶点信息
    EdgeNode *firstin;        // 指向前驱链表头
} VertexNode, InAdjList[MAXVEX];

// 逆邻接表结构体
typedef struct {
    InAdjList inList;          // 逆邻接表数组
    int numVertexes;
    int numEdges;
} InverseGraph;

// 构建逆邻接表（基于图 6-16）
void createInverseGraph(InverseGraph *G) {
    G->numVertexes = 4;
    G->numEdges = 5;

    // 初始化顶点名
    for (int i = 0; i < G->numVertexes; i++) {
        G->inList[i].data = '0' + i;
        G->inList[i].firstin = NULL;
    }

    // 原图的边集：{起点, 终点}
    int edges[5][2] = {
        {0, 3}, {1, 0}, {1, 2},
        {2, 0}, {2, 1}
    };

    for (int i = 0; i < G->numEdges; i++) {
        int from = edges[i][0];
        int to = edges[i][1];

        // 插入逆邻接链表：to ← from
        EdgeNode *e = (EdgeNode *)malloc(sizeof(EdgeNode));
        e->from = from;
        e->next = G->inList[to].firstin;
        G->inList[to].firstin = e;
    }
}

// 打印逆邻接表
void printInverseGraph(InverseGraph G) {
    printf("图的逆邻接表如下：\n");
    for (int i = 0; i < G.numVertexes; i++) {
        printf("V%c <- ", G.inList[i].data);
        EdgeNode *p = G.inList[i].firstin;
        while (p) {
            printf("%d <- ", p->from);
            p = p->next;
        }
        printf("^\n");
    }
}

int main() {
    InverseGraph G;
    createInverseGraph(&G);
    printInverseGraph(G);
    return 0;
}

```



# 邻接表-有向带权值
![](/images/yuque/4722d207ab1bbff5887d8ae99f95e2a0.png)

```c
#include <stdio.h>
#include <stdlib.h>
#define MAXVEX 100
// 边表结构：包含邻接点编号和边的权值
typedef struct EdgeNode {
    int adjvex;                 // 邻接点下标
    int weight;                 // 边的权值
    struct EdgeNode *next;     // 指向下一个边结点
} EdgeNode;

// 顶点结构
typedef struct VertexNode {
    char data;                 // 顶点信息
    EdgeNode *firstedge;      // 指向边表的头指针
} VertexNode, AdjList[MAXVEX];

// 图的结构体
typedef struct {
    AdjList adjList;           // 邻接表数组
    int numVertexes;           // 顶点数
    int numEdges;              // 边数
} GraphAdjList;

// 构建图 6-18 的邻接表（有向 + 带权）
void createGraph(GraphAdjList *G) {
    G->numVertexes = 4;
    G->numEdges = 5;

    // 初始化顶点
    for (int i = 0; i < G->numVertexes; i++) {
        G->adjList[i].data = '0' + i;       // 顶点命名 V0~V3
        G->adjList[i].firstedge = NULL;
    }

    // 边集合（起点，终点，权值）
    int edges[5][3] = {
        {0, 3, 30},
        {1, 0, 50},
        {1, 2, 20},
        {2, 0, 60},
        {2, 1, 40}
    };

    // 插入所有边（有向边，只插入一方向）
    for (int i = 0; i < G->numEdges; i++) {
        int from = edges[i][0];
        int to = edges[i][1];
        int weight = edges[i][2];

        EdgeNode *e = (EdgeNode *)malloc(sizeof(EdgeNode));
        e->adjvex = to;
        e->weight = weight;
        e->next = G->adjList[from].firstedge;
        G->adjList[from].firstedge = e;
    }
}

// 打印邻接表（包含权值）
void printGraph(GraphAdjList G) {
    printf("图的邻接表如下（格式：目标点[权值]）：\n");
    for (int i = 0; i < G.numVertexes; i++) {
        printf("V%c -> ", G.adjList[i].data);
        EdgeNode *p = G.adjList[i].firstedge;
        while (p) {
            printf("%d[%d] -> ", p->adjvex, p->weight);
            p = p->next;
        }
        printf("^\n");
    }
}

int main() {
    GraphAdjList G;
    createGraph(&G);
    printGraph(G);
    return 0;
}

```



# 十字链表
![](/images/yuque/dd6f67ce9c7f4c63a0f4d90515b9cdd8.png)

![](/images/yuque/0f0a437979335d921a66fa6912b9924c.png)

![](/images/yuque/2b6500bc0a677349982686b2676c0b47.png)

![](/images/yuque/a323778c10540bab353ff5fb730bf3c7.png)

![](/images/yuque/9570f3bc2fa9e496c729909e7c81c0a5.png)

![](/images/yuque/2c9b1e3b003b45b4672baaf8e0637095.png)

横着表达的是出边，纵着表达的是入边

单独看一下v0 -> v1 -> v2，与逆邻接表相同

![](/images/yuque/f49c7675839606734ed06b540564f94d.png)

![](/images/yuque/ae60b392e5d86e50bf8644265c6563cc.png)

![](/images/yuque/a6e9bb750a5f7e066e8a040d2c130532.png)

![](/images/yuque/0fb6d121b414a71c52bd92ecece3c6ae.png)

```c
#include <stdio.h>
#include <stdlib.h>
#define MAXVEX 100  // 最大顶点数

// 边结点结构（十字链表专用）
typedef struct ArcBox {
    int tailvex;                // 边的起点
    int headvex;                // 边的终点
    struct ArcBox *nextout;    // 指向同一起点的下一条出边
    struct ArcBox *nextin;     // 指向同一终点的下一条入边
} ArcBox;

// 顶点结构
typedef struct VexNode {
    char data;                 // 顶点信息（此处为字符 '0'、'1' 等）
    ArcBox *firstin;           // 指向入边链表的头结点
    ArcBox *firstout;          // 指向出边链表的头结点
} VexNode, OLGraph[MAXVEX];

// 图结构体（十字链表）
typedef struct {
    OLGraph xlist;             // 顶点数组
    int numVertexes;           // 顶点数量
    int numEdges;              // 边数量
} OrthogonalGraph;

// 创建图（构造图 6-19 的结构）
void createGraph(OrthogonalGraph *G) {
    G->numVertexes = 4;  // 顶点数 V0 ~ V3
    G->numEdges = 5;     // 边数

    // 初始化所有顶点
    for (int i = 0; i < G->numVertexes; i++) {
        G->xlist[i].data = '0' + i;   // 顶点编号设为字符 '0', '1', ...
        G->xlist[i].firstin = NULL;   // 入边链表初始化为空
        G->xlist[i].firstout = NULL;  // 出边链表初始化为空
    }

    // 定义图中所有边（格式为 起点 → 终点）
    int edges[5][2] = {
        {0, 3},
        {1, 0},
        {1, 2},
        {2, 0},
        {2, 1}
    };

    // 插入每条边
    for (int i = 0; i < G->numEdges; i++) {
        int tail = edges[i][0];
        int head = edges[i][1];

        // 创建边结点
        ArcBox *p = (ArcBox *)malloc(sizeof(ArcBox));
        p->tailvex = tail;
        p->headvex = head;

        // 插入到起点的出边链表（头插法）
        p->nextout = G->xlist[tail].firstout;
        G->xlist[tail].firstout = p;

        // 插入到终点的入边链表（头插法）
        p->nextin = G->xlist[head].firstin;
        G->xlist[head].firstin = p;
    }
}

// 打印图结构（展示每个顶点的出边与入边）
void printGraph(OrthogonalGraph G) {
    printf("十字链表图结构如下：\n");

    for (int i = 0; i < G.numVertexes; i++) {
        printf("顶点 V%c 的出边: ", G.xlist[i].data);
        ArcBox *p = G.xlist[i].firstout;
        while (p) {
            printf("(%d→%d) ", p->tailvex, p->headvex);
            p = p->nextout;
        }
        printf("\n");

        printf("顶点 V%c 的入边: ", G.xlist[i].data);
        p = G.xlist[i].firstin;
        while (p) {
            printf("(%d→%d) ", p->tailvex, p->headvex);
            p = p->nextin;
        }
        printf("\n\n");
    }
}

// 主函数
int main() {
    OrthogonalGraph G;
    createGraph(&G);     // 构造图
    printGraph(G);       // 打印图结构
    return 0;
}

```



# 临界多重表
![](/images/yuque/513de7549e149c99648dab0f6abd7931.png)

![](/images/yuque/d3d7108c59002b54df06d65378406654.png)

![](/images/yuque/e2ee30cffdab79bda78e52ae391642c9.png)

![](/images/yuque/e075ac5c17709fe5619b480ad281d1be.png)

![](/images/yuque/a3c09c4870f037f78f12f4211dad1bfc.png)

![](/images/yuque/6a2bbff1afbb2499fd65629a78733909.png)

```c
#include <stdio.h>
#include <stdlib.h>
#define MAXVEX 100  // 最大顶点数

// 边结点结构（邻接多重表）
typedef struct EBox {
    int ivex, jvex;          // 该边所关联的两个顶点的编号
    struct EBox *ilink;      // 指向在 ivex 的边链表中的下一个边结点
    struct EBox *jlink;      // 指向在 jvex 的边链表中的下一个边结点
} EBox;

// 顶点结构
typedef struct VexBox {
    char data;               // 顶点信息，例如 '0', '1', ...
    EBox *firstedge;         // 指向第一个边结点的指针
} VexBox;

// 图结构体
typedef struct {
    VexBox adjmulist[MAXVEX];  // 顶点数组
    int numVertexes;           // 顶点数
    int numEdges;              // 边数
} AMLGraph;

// 构建邻接多重表图（图6-21）
void createGraph(AMLGraph *G) {
    G->numVertexes = 4;
    G->numEdges = 5;

    // 初始化所有顶点
    for (int i = 0; i < G->numVertexes; i++) {
        G->adjmulist[i].data = '0' + i;
        G->adjmulist[i].firstedge = NULL;
    }

    // 图中边的定义（无向边，格式为 顶点对）
    int edges[5][2] = {{0, 1},{1, 2},{2, 3},{3, 0},{0, 2}};

    // 插入每条边
    for (int k = 0; k < G->numEdges; k++) {
        int i = edges[k][0];
        int j = edges[k][1];

        EBox *p = (EBox *)malloc(sizeof(EBox));
        p->ivex = i;
        p->jvex = j;

        // 插入到 ivex 顶点的边链表
        p->ilink = G->adjmulist[i].firstedge;
        p->jlink = G->adjmulist[j].firstedge;

        // 更新 ivex 和 jvex 的边链表头指针
        G->adjmulist[i].firstedge = p;
        G->adjmulist[j].firstedge = p;
    }
}

// 打印邻接多重表结构
void printGraph(AMLGraph G) {
    printf("邻接多重表结构如下：\n");

    for (int i = 0; i < G.numVertexes; i++) {
        printf("顶点 V%c 的边: ", G.adjmulist[i].data);
        EBox *p = G.adjmulist[i].firstedge;

        while (p) {
            int neighbor = (p->ivex == i) ? p->jvex : p->ivex;
            printf("%d ", neighbor);
            p = (p->ivex == i) ? p->ilink : p->jlink;
        }
        printf("\n");
    }
}

// 主函数
int main() {
    AMLGraph G;
    createGraph(&G);   // 构建图
    printGraph(G);     // 输出图结构
    return 0;
}

```



# 深度优先遍历
![](/images/yuque/1bfdf317f40f9e7393757e7484098639.png)

![](/images/yuque/20ca14c3ad385bcad73debd5ced34091.png)

![](/images/yuque/d9693d926ae75dcad38c242d5a7eb5c8.png)

![](/images/yuque/435d854a6b0d6d8e65170c8f3a1b5a10.png)

![](/images/yuque/429c203d1100e5d4a91c750ea304b24d.png)

![](/images/yuque/33a9c1313d7ca7b93dd208a1f5d534fe.png)

![](/images/yuque/6786ce6edd8161e26833f5db72916858.png)

![](/images/yuque/08a3ba5ffd5a648023270f92bc86013b.png)

![](/images/yuque/29f3f7945a519377d27c7fdcb35546ac.png)

```c
#include <stdio.h>

typedef char VertexType;
typedef int EdgeType;

#define MAXSIZE 100


typedef struct
{
	VertexType vertex[MAXSIZE];
	EdgeType arc[MAXSIZE][MAXSIZE];
	int vertex_num;
	int edge_num;
}Mat_Grph;

int visited[MAXSIZE];

void create_graph(Mat_Grph* G)
{
	G->vertex_num = 9;
	G->edge_num = 15;
	G->vertex[0] = 'A';
	G->vertex[1] = 'B';
	G->vertex[2] = 'C';
	G->vertex[3] = 'D';
	G->vertex[4] = 'E';
	G->vertex[5] = 'F';
	G->vertex[6] = 'G';
	G->vertex[7] = 'H';
	G->vertex[8] = 'I';

	for (int i = 0; i < G->vertex_num; i++)
	{
		for (int j = 0; j < G->vertex_num; j++)
		{
			G->arc[i][j] = 0;
		}
	}

	//A-B A-F
	G->arc[0][1] = 1;
	G->arc[0][5] = 1;

	//B-C B-G B-I
	G->arc[1][2] = 1;
	G->arc[1][6] = 1;
	G->arc[1][8] = 1;

	//C-D C-I
	G->arc[2][3] = 1;
	G->arc[2][8] = 1;

	//D-E D-G D-H D-I
	G->arc[3][4] = 1;
	G->arc[3][6] = 1;
	G->arc[3][7] = 1;
	G->arc[3][8] = 1;

	//E-F E-H
	G->arc[4][5] = 1;
	G->arc[4][7] = 1;

	//F-G
	G->arc[5][6] = 1;

	//G-H
	G->arc[6][7] = 1;

	for (int i = 0; i < G->vertex_num; i++)
	{
		for (int j = 0; j < G->vertex_num; j++)
		{
			G->arc[j][i] = G->arc[i][j];
		}
	}
}

void dfs(Mat_Grph G, int i)
{
	visited[i] = 1;
	printf("%c\n", G.vertex[i]);

	for (int j = 0; j < G.vertex_num; j++)
	{
		if (G.arc[i][j] == 1 && visited[j] == 0)
		{
			dfs(G, j);
		}
	}
}

int main(int argc, char const *argv[])
{
	Mat_Grph G;
	create_graph(&G);

	for (int i = 0; i < G.vertex_num; i++)
	{
		visited[i] = 0;
	}
	dfs(G, 0);
	return 0;
}
```



# 广度优先遍历
![](/images/yuque/e48f6ea7e13dcade25fc96077cdf15e2.png)

![](/images/yuque/f909581293bd3dbf0244d53f79f1c8e2.png)

![](/images/yuque/85227e518f440d860f26180da934f49e.png)

![](/images/yuque/1051e29d61a528aa7bd99647b139e60a.png)

![](/images/yuque/f90eb2accddabfad3807554ff1bcb130.png)

![](/images/yuque/86f91786f1ade70c1967838cb488233e.png)

![](/images/yuque/c5ddd117f908ebe81ffd4e07858ccfa8.png)

![](/images/yuque/cf485fbe5bfe258730d310547f4e0eb7.png)

![](/images/yuque/fc3532ed2eacba3913fbc822b4e9ad34.png)

```c
#include <stdio.h>

typedef char VertexType;
typedef int EdgeType;

#define MAXSIZE 100


typedef struct
{
	VertexType vertex[MAXSIZE];
	EdgeType arc[MAXSIZE][MAXSIZE];
	int vertex_num;
	int edge_num;
}Mat_Grph;

int visited[MAXSIZE];
int front = 0;
int rear = 0;
int queue[MAXSIZE];

void create_graph(Mat_Grph* G)
{
	G->vertex_num = 9;
	G->edge_num = 15;
	G->vertex[0] = 'A';
	G->vertex[1] = 'B';
	G->vertex[2] = 'C';
	G->vertex[3] = 'D';
	G->vertex[4] = 'E';
	G->vertex[5] = 'F';
	G->vertex[6] = 'G';
	G->vertex[7] = 'H';
	G->vertex[8] = 'I';

	for (int i = 0; i < G->vertex_num; i++)
	{
		for (int j = 0; j < G->vertex_num; j++)
		{
			G->arc[i][j] = 0;
		}
	}

	//A-B A-F
	G->arc[0][1] = 1;
	G->arc[0][5] = 1;

	//B-C B-G B-I
	G->arc[1][2] = 1;
	G->arc[1][6] = 1;
	G->arc[1][8] = 1;

	//C-D C-I
	G->arc[2][3] = 1;
	G->arc[2][8] = 1;

	//D-E D-G D-H D-I
	G->arc[3][4] = 1;
	G->arc[3][6] = 1;
	G->arc[3][7] = 1;
	G->arc[3][8] = 1;

	//E-F E-H
	G->arc[4][5] = 1;
	G->arc[4][7] = 1;

	//F-G
	G->arc[5][6] = 1;

	//G-H
	G->arc[6][7] = 1;

	for (int i = 0; i < G->vertex_num; i++)
	{
		for (int j = 0; j < G->vertex_num; j++)
		{
			G->arc[j][i] = G->arc[i][j];
		}
	}
}

void bfs(Mat_Grph G)
{
	int i = 0;
	visited[i] = 1;
	printf("%c\n", G.vertex[i]);
	queue[rear] = i;
	rear++;
	while(front != rear)
	{
		i = queue[front];
		front++;
		for (int j = 0; j < G.vertex_num; j++)
		{
			if (G.arc[i][j] == 1 && visited[j] == 0)
			{
				visited[j] = 1;
				printf("%c\n", G.vertex[j]);
				queue[rear] = j;
				rear++;
			}
		}
	}

}

int main(int argc, char const *argv[])
{
	Mat_Grph G;
	create_graph(&G);

	for (int i = 0; i < G.vertex_num; i++)
	{
		visited[i] = 0;
	}
	bfs(G);
	return 0;
}
```

