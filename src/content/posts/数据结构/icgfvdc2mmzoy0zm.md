---
title: 折半查找判定树_平衡二叉树
published: '2026-05-03 20:20:34'
updated: '2026-06-11 22:49:09'
description: 折半查找判定树折半查找判定树（二分查找判定树）是一棵二叉排序树，用来直观刻画有序表上二分查找的所有比较路径与次数结构上与二叉排序树类型，上面的数组可通过下面树的中序遍历得到折半查找判定树一定是平衡的；二叉排序树不一定平衡，绝大多数普通 BST 都不平衡
category: 数据结构
tags: ["数据结构","算法"]
draft: false
cover: /images/yuque/e1fcba650d72811316fa0a986e94b6e8.png
---

# <font style="color:rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);">折半查找判定树</font>
<font style="color:rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);">折半查找判定树</font>（二分查找判定树）是一棵<font style="color:rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);">二叉排序树</font>，用来<font style="color:rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);">直观刻画有序表上二分查找的所有比较路径与次数</font>

结构上与二叉排序树类型，上面的数组可通过下面树的中序遍历得到

折半查找判定树一定是平衡的；二叉排序树不一定平衡，绝大多数普通 BST 都不平衡

![](/images/yuque/e1fcba650d72811316fa0a986e94b6e8.png)



# 折半查找与二叉排序树的时间复杂度
折半查找判定树查找某一个数值，依次与根节点判断大小即可，而二叉排序树，如果一棵树全都偏向一侧只能一个一个查找，效率变低

![](/images/yuque/2cbd7a29931b899648b4b574f9c96816.png)

如果一棵树“偏得厉害”，查找的过程就像沿着一条细长的枝条不断往下爬，效率很低。如果这棵树是“匀称”的，查找路径就更短，每次都能接近目标，效率高。 为了解决这个问题，平衡二叉树（Balanced Binary Search Tree）应运而生



# 平衡二叉树（AVL 树）
平衡二叉树（Balanced Binary Tree）：又称 AVL 树，是一种二叉排序树，任意一个节点的左子树与右子树的高度之差的绝对值不超过 1

平衡因子（Balance Factor）：是衡量节点平衡程度的指标

平衡因子 = 左子树的高度 - 右子树的高度

例如下图是一个平衡二叉树：

![](/images/yuque/eecc2d19c5ac63756e285a4ae23b44a4.png)

下两图则不是平衡二叉树

![](/images/yuque/f36e76a77bb74de1d09d5f333335483b.png)

![](/images/yuque/619013a8021fd023adf3345fe3937ab8.png)



# 平衡二叉树的平衡调整
最小不平衡子树：从插入点向上回溯，第一个失衡的点，对失衡的平衡二叉树进行调整时，需要先找到最小不平衡子树

失衡类型：

LL型失衡

RR型失衡

LR型失衡

RL型失衡



## LL型失衡
![](/images/yuque/0b24a46738842218d4ce2fe52d2b4a25.png)![](/images/yuque/638e2ad6ce477ff01122fe2aba53cb8c.png)![](/images/yuque/3effcdcf86ab45fab8d8ad98714aae74.png)



## RR型失衡
![](/images/yuque/444a6d47e0aeae792c2792695737a6ca.png)

![](/images/yuque/48cd57fc8b77a4a2b865ce246ca7477f.png)![](/images/yuque/ba1d5ffb3b5f1a0c47e34e048e4b3139.png)



## LR型失衡
![](/images/yuque/b4113745d9e4791b01433a56f76895fd.png)

![](/images/yuque/9780edae39010fd8056ff5ca7a0f8f89.png)![](/images/yuque/72a033265aa63f0db940a1fa4fdb6ae0.png)![](/images/yuque/2614a31871f4f88585997cb575533c15.png)![](/images/yuque/ae588b6d0105ad16f635c616df3fb4ec.png)



## RL型失衡
![](/images/yuque/29653a1554fec113cc53e546911a1fc5.png)

![](/images/yuque/4a6c0c412cf2bac2dfbd4d0b6c0a9097.png)![](/images/yuque/9e43b10f141ee540bbd59ce6a33cd2c5.png)![](/images/yuque/0a1939e62bb68470633a2e7452367513.png)![](/images/yuque/ee491deffdb5e35473d1354d673e1a1d.png)



## 总结
![](/images/yuque/aa2a3d3e2e4fcab738d52b2f8ec42977.png)



## 例子
![](/images/yuque/2fe7a59465c64336889aac213e8a9890.png)

![](/images/yuque/7fbb6a173119ab9e90b9970c6a56b3b4.png)

![](/images/yuque/f07463bfa91602508c44ddabd8c4d11c.png)

![](/images/yuque/f2a086db3d1983c1620df2cc32eefe96.png)

![](/images/yuque/385eb9a05aa9bd9e4d5a2104b5cf2a11.png)

![](/images/yuque/2af280a73f3d78fd1e6e4c4c3310af89.png)

![](/images/yuque/0990acfc5a72f22a788cbba718277131.png)

![](/images/yuque/63383f78fb4312a5040e547e1023d8cb.png)

![](/images/yuque/623562e87c9f36ae4c1a0ebee855b7d5.png)

![](/images/yuque/c89f5c072bdd71cd4184a29b7bec1ac4.png)

![](/images/yuque/cce87c92863c43993611f70b225cf58e.png)

![](/images/yuque/243c0da4abd0ba5385375a0ef9bb6a9e.png)

![](/images/yuque/972953f28ab02f74869a05f6b5fd3877.png)

![](/images/yuque/70d69021c4d044fe766e5230d8550291.png)

![](/images/yuque/1240d8182590727fd330fdfdaf472e06.png)

![](/images/yuque/0e014759301686e970dea951d06ace8a.png)

![](/images/yuque/e47ffd75c561143515986f9f9463bf83.png)

![](/images/yuque/2451089694c825b0f3ce0f2b55fed4d9.png)

![](/images/yuque/ce07d18aad68ad9b29007a065ad2f785.png)

![](/images/yuque/c7ce8b24322e35fe3035d717719dad1a.png)

![](/images/yuque/1a8388f4715fd1c344aa3455890a25ad.png)

![](/images/yuque/5425621b521663dea569df28bbe7195e.png)

![](/images/yuque/16e598e6cc7e754aec6537a50de49f70.png)

![](/images/yuque/811a73a8a74afc5671083baf9daaeb34.png)

![](/images/yuque/346b608b38815a1eafb4ab0d748436a7.png)

![](/images/yuque/b083a37a431b906db98f22c72700cf95.png)

![](/images/yuque/a4ef64a556dd1905606e00100b295d3a.png)



