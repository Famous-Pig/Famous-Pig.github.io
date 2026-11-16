---
title: 最小生成树
published: '2026-04-24 11:06:11'
updated: '2026-06-14 18:27:15'
description: 最小生成树-普里姆算法（Prim）普里姆（Prim）算法是图论中求解最小生成树（MST）的经典贪心算法，适用于加权无向连通图。它从一个起点出发，每次选连接 “树内 - 树外” 的最小权边扩展，直到囊括所有顶点。
category: 数据结构
tags: []
draft: false
cover: /images/yuque/d70086eded53822cb6257ea54e22149e.png
---

# 最小生成树-普里姆算法（Prim）
<font style="color:rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);">普里姆（Prim）算法</font>是图论中求解<font style="color:rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);">最小生成树（MST）的经典贪心算法</font>，适用于<font style="color:rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);">加权无向连通图</font>。它从一个起点出发，每次选连接 “树内 - 树外” 的<font style="color:rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);">最小权边</font>扩展，直到囊括所有顶点。

![](/images/yuque/d70086eded53822cb6257ea54e22149e.png)

![](/images/yuque/3e7019d86946d6d59880ccb00a0d948f.png)

![](/images/yuque/49b037bf73870ee2beb54de9553f7efa.png)

![](/images/yuque/991fe09f70087c4c04e375620c8a67da.png)

![](/images/yuque/31d7cc539051545b57cec1be33f7275e.png)

![](/images/yuque/688b36bc2e526bc18710d51cd11f57bc.png)

![](/images/yuque/9a7cbed4aae1685c9458713497b91917.png)

![](/images/yuque/ceb9941ff6af0ea1a69c22e2d86372b6.png)

![](/images/yuque/103671e85e406df7d8c8f57ce85360b7.png)

![](/images/yuque/d384369825fddfd437abc3d6d6e9aec0.png)

![](/images/yuque/baade70e745ebb8aaaeff2bbe11be85c.png)

![](/images/yuque/976d8523f6cab7a732aa857884f839f9.png)

![](/images/yuque/94e1f46c0db12f458a41e222ed70620f.png)

![](/images/yuque/136e6140c369110dd15c6379f272c6ba.png)

![](/images/yuque/a9276e8acd66936b20864aff58d4f4b1.png)

![](/images/yuque/025109936e2b73965baf417a5031d38f.png)

![](/images/yuque/08d610c7879d60bbd2ea4d1b1d27f396.png)

![](/images/yuque/6582d5f44c192669b98d0e9da60dfba6.png)

```c
#include <stdio.h>
#include <stdlib.h>

typedef char VertexType;
typedef int EdgeType;

#define MAXSIZE 100
#define MAX 0x7fffffff

typedef struct
{
	VertexType vertex[MAXSIZE];
	EdgeType arc[MAXSIZE][MAXSIZE];
	int vertex_num;
	int edge_num;
}Mat_Grph;


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
			if (i == j)
			{
				G->arc[i][j] = 0;
			}
			else
			{
				G->arc[i][j] = MAX;
			}
			
		}
	}

	//A-B A-F
	G->arc[0][1] = 10;
	G->arc[0][5] = 11;

	//B-C B-G B-I
	G->arc[1][2] = 18;
	G->arc[1][6] = 16;
	G->arc[1][8] = 12;

	//C-D C-I
	G->arc[2][3] = 22;
	G->arc[2][8] = 8;

	//D-E D-G D-H D-I
	G->arc[3][4] = 20;
	G->arc[3][6] = 24;
	G->arc[3][7] = 16;
	G->arc[3][8] = 21;

	//E-F E-H
	G->arc[4][5] = 26;
	G->arc[4][7] = 7;

	//F-G
	G->arc[5][6] = 17;

	//G-H
	G->arc[6][7] = 19;

	for (int i = 0; i < G->vertex_num; i++)
	{
		for (int j = 0; j < G->vertex_num; j++)
		{
			G->arc[j][i] = G->arc[i][j];
		}
	}
}

void prim(Mat_Grph* G)
{
	int i, j, k;
	int min;
	int weight[MAXSIZE];//候选边
	int vex_index[MAXSIZE];//值表示出发点，下标表示到达点

	//先从顶点A开始
	weight[0] = 0; //vex_index某点与下标对应点的权重
	vex_index[0] = 0;

	for (i = 1; i < G->vertex_num; i++)
	{
		weight[i] = G->arc[0][i];
		vex_index[i] = 0;
	}

	for (int i = 1; i < G->vertex_num; i++)
	{
		min = MAX;
		j = 0;
		k = 0;
		//找到最小的，与之连接
		while(j < G->vertex_num)
		{
			if (weight[j] != 0 && weight[j] < min)
			{
				min = weight[j];
				k = j;
			}
			j++;
		}

		//printf("(%d, %d)\n", vex_index[k], k);
		printf("(%c, %c)\n", G->vertex[vex_index[k]], G->vertex[k]);
		weight[k] = 0;

		//找新连接结点的待选路径
		for (j = 0; j < G->vertex_num; j++)
		{
			//与新结点可连接的边进行比较，有比weight小的就替换
			if (weight[j] != 0 && G->arc[k][j] < weight[j])
			{
				weight[j] = G->arc[k][j];
				vex_index[j] = k;
			}
		}

	}
}

int main(int argc, char const *argv[])
{
	//Mat_Grph* G = (Mat_Grph*)malloc(sizeof(Mat_Grph));
	Mat_Grph G;
	create_graph(&G);
	prim(&G);
	return 0;
}
```



# 最小生成树-克鲁斯卡尔算法（Kruskal）
Kruskal 是求解<font style="color:rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);">无向带权连通图最小生成树 (MST)</font> 的经典<font style="color:rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);">贪心算法</font>。核心思路：<font style="color:rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);">先选边、后看点</font>，每次选全局权值最小的边，只要这条边不会形成环，就加入生成树，直到选够 <font style="color:rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);">n−1</font> 条边（<font style="color:rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);">n</font> 为顶点数）。![](/images/yuque/3139c6956c64b5fafc723ed7934f0f05.png)![](/images/yuque/dc1e089211273d4d7b0aebe11ff70c61.png)![](/images/yuque/1e15c44782d19b10620e5e3fa14d9014.png)![](/images/yuque/347ec8a6850b45d053f2b0327fb50be1.png)![](/images/yuque/e97a3fa442a2bc26ab21de26dc05cb76.png)![](/images/yuque/a3f914734b844e37af2dc9138c2132b1.png)![](/images/yuque/0740e37e507445b9a9bf14dc2c181a5b.png)![](/images/yuque/1de21f08ba4f7cb24f5f52ca37aa1dcd.png)![](/images/yuque/64d08d1d2834f7512ff8de2f5e3cc136.png)![](/images/yuque/aa7d639480dd533dc87a3f912fa67e57.png)![](/images/yuque/6f4e0d8095072244fb85e4c8a85035ac.png)![](/images/yuque/3b4dc7bfda0b6bb6fdaca0118ec4301e.png)![](/images/yuque/c8131565e1ffe650b9d833f9414913bc.png)![](/images/yuque/6f93ac108a64b48cbbed599cc780fe59.png)

![](/images/yuque/53fd891f35a4f7ce6c9964353ae884a2.png)

![](/images/yuque/5b2a1882e949a6aba5e802c1defc12eb.png)

![](/images/yuque/1f52b9baed4685f6983334242c6230db.png)

```c
#include <stdio.h>
#include <stdlib.h>

typedef char VertexType;
typedef int EdgeType;

#define MAXSIZE 100
#define MAXEDGE 200
#define MAX 0x7fffffff

typedef struct
{
	VertexType vertex[MAXSIZE];
	EdgeType arc[MAXSIZE][MAXSIZE];
	int vertex_num;
	int edge_num;
}Mat_Grph;

typedef struct
{
	int beigin;
	int end;
	int weight;
}Edge;


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
			if (i == j)
			{
				G->arc[i][j] = 0;
			}
			else
			{
				G->arc[i][j] = MAX;
			}
			
		}
	}

	//A-B A-F
	G->arc[0][1] = 10;
	G->arc[0][5] = 11;

	//B-C B-G B-I
	G->arc[1][2] = 18;
	G->arc[1][6] = 16;
	G->arc[1][8] = 12;

	//C-D C-I
	G->arc[2][3] = 22;
	G->arc[2][8] = 8;

	//D-E D-G D-H D-I
	G->arc[3][4] = 20;
	G->arc[3][6] = 24;
	G->arc[3][7] = 16;
	G->arc[3][8] = 21;

	//E-F E-H
	G->arc[4][5] = 26;
	G->arc[4][7] = 7;

	//F-G
	G->arc[5][6] = 17;

	//G-H
	G->arc[6][7] = 19;

	for (int i = 0; i < G->vertex_num; i++)
	{
		for (int j = 0; j < G->vertex_num; j++)
		{
			G->arc[j][i] = G->arc[i][j];
		}
	}
}

void swap(Edge* edges, int i, int j)
{
	int temp;
	temp = edges[i].beigin;
	edges[i].beigin = edges[j].beigin;
	edges[j].beigin = temp;

	temp = edges[i].end;
	edges[i].end = edges[j].end;
	edges[j].end = temp;

	temp = edges[i].weight;
	edges[i].weight = edges[j].weight;
	edges[j].weight = temp;
}

void sortEdges(Edge edges[], int edge_num)
{
	for (int i = 0; i < edge_num; i++)
	{
		for (int j = i + 1; j < edge_num; j++)
		{
			if (edges[i].weight > edges[j].weight)
			{
				swap(edges, i, j);
			}
		}
	}
}

int find(int* parent, int index)
{
	while(parent[index] > 0)
	{
		index = parent[index];
	}
	return index;
}

void Kruskal(Mat_Grph G)
{
	Edge edges[MAXEDGE];
	int k = 0;

	for (int i = 0; i < G.vertex_num; i++)
	{
		for (int j = i + 1; j < G.vertex_num; j++)
		{
			if (G.arc[i][j] < MAX)
			{
				edges[k].beigin = i;
				edges[k].end = j;
				edges[k].weight = G.arc[i][j];
				k++;
			}
		}
	}

	sortEdges(edges, G.edge_num);

	int parent[MAXSIZE];

	for (int i = 0; i < G.vertex_num; i++)
	{
		parent[i] = 0;
	}

	int n, m;
	for (int i = 0; i < G.edge_num; i++)
	{
		n = find(parent, edges[i].beigin);//6
		m = find(parent, edges[i].end);//6

		if (n != m)
		{
			parent[n] = m;
			//printf("(%d, %d) %d\n", edges[i].beigin, edges[i].end, edges[i].weight);
			printf("(%c, %c) %d\n", G.vertex[edges[i].beigin], G.vertex[edges[i].end], edges[i].weight);
		}
	}
}

int main(int argc, char const *argv[])
{
	Mat_Grph G;
	create_graph(&G);
	Kruskal(G);
	return 0;
}
```



# 最小生成树
最小生成树的顶点数 n 与边数 e 之间的关系：n = e + 1

克鲁斯卡尔算法针对边，边数少时效率比较高，对稀疏图有优势

普里姆算法对于边数多的情况，效率会好一些。

克鲁斯卡尔算法的时间复杂度为 O（eloge），e 是边数

普里姆算法的时间复杂度为 O（n2），n 是顶点



# 最短路径
单源最短路径：从某一个顶点出发，到图中所有其他顶点的最短路径

任意两点之间的最短路径：即图中任意两个顶点之间的最短路径



# 最短路径-迪杰斯特拉（Dijkstra）
迪杰斯特拉算法（Dijkstra）的核心思想，可以理解为一个“逐层扩展、步步为营”的过程：

（1）从起点出发，初始化到各个顶点的距离（起点为 0，其他为无穷大）

（2）每次从“未访问的顶点”中，找出“当前距离起点最近的那个”

（3）以这个顶点为中转，尝试“放松”它所有相邻顶点的距离

（4）重复第 2、3 步，直到所有顶点都被“确定”最短距离为止



需要注意的是，有些初学者总是会走入一个误区，以为算法是用来计算从起点到终点的最短路径的。算法不是以终点为导向的，而是以起点为核心、全图向外扩展的策略。也就是说通过算法可以获取从起点到全图任意一个点的最短路径，当指定一个终点时，算法会直接告诉你从起点到终点的最短路径。它的目标从来不是：“我从A出发怎么尽快到达B？”而是：“我怎么从A出发，把所有点的最短路径都确定清楚？”

![](/images/yuque/f58a3a1944a35392b93dafc424c53650.png)

![](/images/yuque/1a550ca166128da349c06938c4a32d6e.png)

![](/images/yuque/54ea24f80f414a6145d5a2afb6e1cf86.png)

![](/images/yuque/db6626d2d9d10a0ce64d8b51df773ea3.png)

![](/images/yuque/9c4b3eb8aa3772e7793dbd8a349f60bd.png)

![](/images/yuque/ce7c847fabc032e6ef77a8574634abec.png)

![](/images/yuque/33e4a59c1838d785c5d2ff3945cb0004.png)

![](/images/yuque/12b36d2169cdee95ee8a02b0440df679.png)

![](/images/yuque/039e2997fb9f60675fd075f1b961bed1.png)

![](/images/yuque/05ada39d6cf4ed43a4601497318a0619.png)

![](/images/yuque/4a7904d72c062fd02c852c39ec004cd8.png)

![](/images/yuque/d7826fb10bcb38040bd7be6cadee18c2.png)

![](/images/yuque/dcccbaa4d5c1c15c6d2f5e57c76ef00d.png)

![](/images/yuque/fd606528f0597d050d478899b6222c01.png)

![](/images/yuque/d46156e255535d55135b9cdacd8382f7.png)

![](/images/yuque/d1698169c31e9cd96af194db554279f6.png)

![](/images/yuque/11ac12b7c6d6c9bd701a2549bfd252a7.png)

![](/images/yuque/baf065f21495fa5fb6534d2e153c0a06.png)

![](/images/yuque/601e97c3812ae31725d2940c1a28d769.png)

![](/images/yuque/e248d72e2781972f559749a489c35489.png)

![](/images/yuque/d8e9f982504d1cd3bc69d06256fc9a0d.png)

```c
#include <stdio.h>

typedef int VertexType;
typedef int EdgeType;

#define MAXSIZE 100
#define MAXEDGE 200
#define MAX 0x10000

typedef struct
{
	VertexType vertex[MAXSIZE];
	EdgeType arc[MAXSIZE][MAXSIZE];
	int vertex_num;
	int edge_num;
}Mat_Graph;

void createGraph(Mat_Graph* G)
{
	G->vertex_num = 9;
	G->edge_num = 16;

	for (int i = 0; i < G->vertex_num; i++)
	{
		G->vertex[i] = i;
	}

	for (int i = 0; i < G->vertex_num; i++)
	{
		for (int j = 0; j < G->vertex_num; j++)
		{
			if (i == j)
			{
				G->arc[i][j] = 0;
			}
			else
			{
				G->arc[i][j] = MAX;
			}
		}
	}

	
	G->arc[0][1] = 1;
	G->arc[0][2] = 5;
	
	G->arc[1][2] = 3;
	G->arc[1][3] = 7;
	G->arc[1][4] = 5;
	
	G->arc[2][4] = 1;
	G->arc[2][5] = 7;
	
	G->arc[3][4] = 2;
	G->arc[3][6] = 3;
	
	G->arc[4][5] = 3;
	G->arc[4][6] = 6;
	G->arc[4][7] = 9;
	
	G->arc[5][7] = 5;
	
	G->arc[6][7] = 2;
	G->arc[6][8] = 7;
	
	G->arc[7][8] = 4;

	for (int i = 0; i < G->vertex_num; i++)
	{
		for (int j = i; j < G->vertex_num; j++)
		{
			G->arc[j][i] = G->arc[i][j];
		}
	}
}
//返回下一次要观察哪一个顶点
int choose(int distance[], int found[], int vertex_num)
{
	int min = MAX;
	int minPos = -1;
	for (int i = 0; i < vertex_num; i++)
	{
		if (distance[i] < min && found[i] == 0)
		{
			min = distance[i];
			minPos = i;
		}
	}
	return minPos;
}

void dijkstra(Mat_Graph G, int begin)
{
	int found[MAXSIZE];//顶点是否已走过
	int path[MAXSIZE];//路径
	int distance[MAXSIZE];//beigin到达每一个顶点最短距离
	for (int i = 0; i < G.vertex_num; i++)
	{
		found[i] = 0;
		path[i] = -1;
		distance[i] = G.arc[begin][i];
	}

	found[begin] = 1;
	distance[begin] = 0;

	int next;//下一个要观察的顶点　
	for (int i = 1; i < G.vertex_num; i++)
	{	//4
		next = choose(distance, found, G.vertex_num);
		//printf("%d", next);
		found[next] = 1;
		for (int j = 0; j < G.vertex_num; j++)
		{
			if (found[j] == 0)
			{
				if (distance[next] + G.arc[next][j] < distance[j])
				{
					distance[j] = distance[next] + G.arc[next][j];
					path[j] = next;
				}
			}
		}
	}
	
	

	for (int i = 1; i < G.vertex_num; i++)
	{
		printf("V0 -> v%d : %d\n", i, distance[i]);

		int j = i;
		printf("V%d <- ", i);
		while(path[j] != -1)
		{
			printf("V%d <- ", path[j]);
			j = path[j];
		}
		printf("V0\n");

	}
	
}

int main(int argc, char const *argv[])
{
	Mat_Graph G;
	createGraph(&G);
	int begin = 0;
	dijkstra(G, begin);
	return 0;
}
```



# 最短路径-弗洛伊德（Floyd）
在交通路径规划中，不仅关心从出发地到目的地的最短路线，还希望可以一口气获得所有城市两两之间的最短路径信息，以便快速查找和调度。这时候，弗洛伊德算法 （Floyd）就登场了。

Floyd 算法的核心思路是——尝试让每一个顶点去作为“中转点”，看看能不能让两个点之间的路径变得更短。假设图中有 n 个顶点，那么就依次尝试用顶点 0, 1, ..., n-1 作 为“中转站”去更新任意两个顶点之间的路径长度。

![](/images/yuque/06443d377b334251926fc3f8f1d2c943.png)

![](/images/yuque/21a1eac18e1e10a4fdc51941a8c705cc.png)

![](/images/yuque/720d34f80b07287ed215b82405893655.png)、![](/images/yuque/96e92cf31709c9bdf6597aba304aec9f.png)

![](/images/yuque/3a4cb3c97ec27cfe474d0e766b3aa367.png)

j是起始点，k是终止点，i是中转点

path数组（保存的是路径，上面的矩阵保存的是权值）如下：P<sup>-1</sup>中表示的是终点的位置，例如：（v1, v2）= 2，v1到v2的终点是v2，因为v1到v2直接连接，在P<sup>0</sup>中变成了（v1, v2）= 0，意味着二者之间有v0作中转点。   

![](/images/yuque/f327c812fe7a39d15ddf1b320557bc82.png)

```c
#include <stdio.h>

typedef int VertexType;
typedef int EdgeType;

#define MAXSIZE 100
#define MAXEDGE 200
#define MAX 0x10000

typedef struct
{
	VertexType vertex[MAXSIZE];
	EdgeType arc[MAXSIZE][MAXSIZE];
	int vertex_num;
	int edge_num;
}Mat_Graph;

void createGraph(Mat_Graph* G)
{
	G->vertex_num = 9;
	G->edge_num = 16;

	for (int i = 0; i < G->vertex_num; i++)
	{
		G->vertex[i] = i;
	}

	for (int i = 0; i < G->vertex_num; i++)
	{
		for (int j = 0; j < G->vertex_num; j++)
		{
			if (i == j)
			{
				G->arc[i][j] = 0;
			}
			else
			{
				G->arc[i][j] = MAX;
			}
		}
	}

	
	G->arc[0][1] = 1;
	G->arc[0][2] = 5;
	
	G->arc[1][2] = 3;
	G->arc[1][3] = 7;
	G->arc[1][4] = 5;
	
	G->arc[2][4] = 1;
	G->arc[2][5] = 7;
	
	G->arc[3][4] = 2;
	G->arc[3][6] = 3;
	
	G->arc[4][5] = 3;
	G->arc[4][6] = 6;
	G->arc[4][7] = 9;
	
	G->arc[5][7] = 5;
	
	G->arc[6][7] = 2;
	G->arc[6][8] = 7;
	
	G->arc[7][8] = 4;

	for (int i = 0; i < G->vertex_num; i++)
	{
		for (int j = i; j < G->vertex_num; j++)
		{
			G->arc[j][i] = G->arc[i][j];
		}
	}
}

void floyd(Mat_Graph G)
{
	int path[MAXSIZE][MAXSIZE];
	int distance[MAXSIZE][MAXSIZE];
	
	for (int i = 0; i < G.vertex_num; i++)
	{
		for (int j = 0; j < G.vertex_num; j++)
		{
			distance[i][j] = G.arc[i][j];
			path[i][j] = j;
		}
	}
	// j:起始顶点　i:中转顶点　k:终止顶点
	for (int i = 0; i < G.vertex_num; i++)
	{
		for (int j = 0; j < G.vertex_num; j++)
		{
			for (int k = 0; k < G.vertex_num; k++)
			{
				if (distance[j][k] > distance[j][i] + distance[i][k])
				{
					distance[j][k] = distance[j][i] + distance[i][k];
					path[j][k] = path[j][i];
				}
			}
		}
	}

	int k;
	for (int i = 0; i < G.vertex_num; i++)
	{
		for (int j = i + 1; j < G.vertex_num; j++)
		{
			printf("V%d->V%d weight:%d ", i, j, distance[i][j]);
			k = path[i][j];
			printf("path:V%d", i);
			while(k != j)
			{
				printf("->V%d", k);
				k = path[k][j];
			}
			printf("->V%d\n", j);
		}
		printf("\n");
	}

}



int main(int argc, char const *argv[])
{
	Mat_Graph G;
	createGraph(&G);
	floyd(G);
	
	return 0;
}
```





