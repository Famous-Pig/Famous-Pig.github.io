---
title: 拓扑排序_关键路径
published: '2026-04-29 10:39:51'
updated: '2026-06-10 19:31:17'
description: 在一个表示工程的有向图中，用顶点表示活动，用弧表示活动之间的优先级，这样的有向图为顶点表示活动的网，我们称为 AOV 网（Activity On Vertex Network）拓扑排序
category: 数据结构
tags: []
draft: false
cover: /images/yuque/def2c59a72e80e7561bced0b797de179.png
---

在一个表示工程的有向图中，用顶点表示活动，用弧表示活动之间的优先级，这样的有向图为顶点表示活动的网，我们称为 AOV 网（Activity On Vertex Network）



# 拓扑排序
![](/images/yuque/def2c59a72e80e7561bced0b797de179.png)

![](/images/yuque/059dd9bb829bc0ae6e96f8df62d70070.png)

![](/images/yuque/8004fb95992f26f82e9e4e84bdebc886.png)

![](/images/yuque/3dd910d938e3f91c55822df37c6fe362.png)

![](/images/yuque/6f22f4662b992c0398002f959d7fc0de.png)

![](/images/yuque/514ae67419831a3204550e4d1bfdb238.png)

![](/images/yuque/0831bde6f431098e8782ab84454631da.png)

![](/images/yuque/bd1426c167b0e3891bc342f3b471d2fd.png)

![](/images/yuque/caca0e706b5377e7bb5f80d0f31c177a.png)

![](/images/yuque/a4846cedd9c020ab7da5b1d231f954ce.png)

![](/images/yuque/2db8911ed8e4f2d59da38ecdd4646ee1.png)

![](/images/yuque/1e03c751ad79113703f7c5e01698d12e.png)

![](/images/yuque/cb5dffb12ff0ae8b3487257d9a9429ce.png)

![](/images/yuque/2fa6e4b40e0834506d4e831a61e40b03.png)

![](/images/yuque/2597087efa05bf394efba7f0c55cbbe8.png)

![](/images/yuque/50bb5a6f79235034ce084074d71260a4.png)

![](/images/yuque/273455b8f73dee7741dcbde338b871a4.png)

![](/images/yuque/372e2a700a673de44b67d8cdedc4299a.png)

![](/images/yuque/7b7eed07e457d0245b900b65cd253a9a.png)

![](/images/yuque/3561678c4599322555cd05b665df9486.png)

![](/images/yuque/c4284d07c15575fadfd6fded531a482b.png)

![](/images/yuque/a93f699018aaabca036cd506deb314e5.png)

![](/images/yuque/339131f640ce4b25ed7d6ff1d8d96d57.png)

![](/images/yuque/eb215144643aebb7ccf3d3a0cdd92ee1.png)

![](/images/yuque/042c8fad7bfec67f731e0c7d91057735.png)

```c
#include <stdio.h>
#include <stdlib.h>

typedef int VertextType;
typedef int EdgeType;

#define MAXSIZE 100

typedef struct
{
	VertextType vertex[MAXSIZE];
	EdgeType arc[MAXSIZE][MAXSIZE];
	int vertex_num;
	int edge_num;
}Mat_Graph;

typedef struct EdgeNode
{
	int edge_vex;
	struct EdgeNode* next;
}EdgeNode;

typedef struct VertextNode
{
	int in;
	VertextType data;
	EdgeNode* head;
}VertextNode;

typedef VertextNode Adj_List[MAXSIZE];

typedef struct
{
	Adj_List adj_list;
	int vertex_num;
	int edge_num;
}Adj_Graph;

typedef Adj_Graph* Adj_List_Graph;

int top = -1;
int stack[MAXSIZE];

void push(int e)
{
	if (top > MAXSIZE)
	{
		printf("满了\n");
		return;
	}

	top++;
	stack[top] = e;
}

int pop()
{
	if (top == -1)
	{
		printf("空的\n");
		return 0;
	}

	int elem = stack[top];
	top--;
	return elem;
}

int is_empty()
{
	if (top == -1)
	{
		return 0;
	}
	else
	{
		return 1;
	}
}

void create_graph(Mat_Graph* G)
{
	G->vertex_num = 14;
	G->edge_num = 20;

	for (int i = 0; i < G->vertex_num; i++)
	{
		G->vertex[i] = i;
	}

	for (int i = 0; i < G->vertex_num; i++)
	{
		for (int j = 0; j < G->vertex_num; j++)
		{
			G->arc[i][j] = 0;
		}
	}

	G->arc[0][4] = 1;
	G->arc[0][5] = 1;
	G->arc[0][11] = 1;
	G->arc[1][2] = 1;
	G->arc[1][4] = 1;
	G->arc[1][8] = 1;
	G->arc[2][5] = 1;
	G->arc[2][6] = 1;
	G->arc[2][9] = 1;
	G->arc[3][2] = 1;
	G->arc[3][13] = 1;
	G->arc[4][7] = 1;
	G->arc[5][8] = 1;
	G->arc[5][12] = 1;
	G->arc[6][5] = 1;
	G->arc[8][7] = 1;
	G->arc[9][10] = 1;
	G->arc[9][11] = 1;
	G->arc[10][13] = 1;
	G->arc[12][9] = 1;
}

void create_adj_graph(Mat_Graph G, Adj_List_Graph* ALG)
{
	EdgeNode* e;

	*ALG = (Adj_List_Graph)malloc(sizeof(Adj_Graph));
	(*ALG)->vertex_num = G.vertex_num;
	(*ALG)->edge_num = G.edge_num;

	for (int i = 0; i < G.vertex_num; i++)
	{
		(*ALG)->adj_list[i].in = 0;
		(*ALG)->adj_list[i].data = G.vertex[i];
		(*ALG)->adj_list[i].head = NULL;
	}

	for (int i = 0; i < G.vertex_num; i++)
	{
		for (int j = 0; j < G.vertex_num; j++)
		{
			if (G.arc[i][j] == 1)
			{
				e = (EdgeNode*)malloc(sizeof(EdgeNode));
				e->edge_vex = j;
				e->next = (*ALG)->adj_list[i].head;
				(*ALG)->adj_list[i].head = e;
				(*ALG)->adj_list[j].in++;
			}
		}
	}
}

void topological_sort(Adj_List_Graph ALG)
{
	EdgeNode* e;
	int curr;
	int k;

	for (int i = 0; i < ALG->vertex_num; i++)
	{
		if (ALG->adj_list[i].in == 0)
		{
			push(i);
		}
	}

	while(is_empty() != 0)
	{
		curr = pop();
		printf("V%d -> ", ALG->adj_list[curr].data);
		e = ALG->adj_list[curr].head;

		while(e != NULL)
		{
			k = e->edge_vex;
			ALG->adj_list[k].in--;
			if (ALG->adj_list[k].in == 0)
			{
				push(k);
			}
			e = e->next;
		}
	}
}

int main(int argc, char const *argv[])
{
	Mat_Graph G;
	Adj_List_Graph ALG;
	create_graph(&G);
	create_adj_graph(G, &ALG);
	topological_sort(ALG);
	return 0;
}
```

不再用下图左侧的邻接矩阵实现，而是使用右侧的邻接表来实现，

![](/images/yuque/dcde6bdcda338ffa7ff0d6a5101f6c01.png)

每个顶点，有一个入度和出度，

EdgeNode是边节点，表示某顶点与其它多少节点有指向关系

![](/images/yuque/54323c27d0f8c72520702c3caf785236.png)

比如第一行v0，通过邻接表头插法实现

![](/images/yuque/1838a1c7ef34c385ca07e1b4cceb94de.png)



# 关键路径
关键路径 = 从源点到汇点，**<font style="color:rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);">所有活动的最早开始时间 = 最晚开始时间</font>** 的路径。

![](/images/yuque/f8c20a9fe313ca253cf5fdcc6c622547.png)

![](/images/yuque/91f272a57efa71b02b06ad2a2036a19a.png)

![](/images/yuque/53be03aee46a7d998f9b9ee654e3500f.png)

![](/images/yuque/8ff067a684014905d115b0a39bede5ed.png)

![](/images/yuque/a28c9b606087cd8fe41d4361d3ae4662.png)

![](/images/yuque/e5eb1533bf709f2f74a4011046579bae.png)

![](/images/yuque/f947c1877e3e0c6f34110d25bfa77543.png)



