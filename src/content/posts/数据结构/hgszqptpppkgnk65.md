---
title: 二叉树
published: '2026-04-20 14:59:53'
updated: '2026-06-12 15:07:34'
description: 二叉树基本形态二叉树的性质性质一：二叉树的第i层最多有2i-1（i&gt;=1）个结点性质二：深度为k的二叉树最多有2
category: 数据结构
tags: ["数据结构"]
draft: false
cover: /images/yuque/c5e5857a2ffa7379e7491d3aa9fc47d8.png
---

![](/images/yuque/c5e5857a2ffa7379e7491d3aa9fc47d8.png)

# 二叉树基本形态
![](/images/yuque/0a8ac4a7f2d34a1d7779746606e89ee7.png)



# 二叉树的性质
性质一：二叉树的第i层最多有2<sup>i-1</sup>（i>=1）个结点

性质二：深度为k的二叉树最多有2<sup>k</sup>-1（k>=1）个结点

性质三：对于任何非空的二叉树T，如果叶子结点的个数为n<sub>0</sub>，而度为2的结点数为n<sub>2</sub>，则n<sub>0</sub>=n<sub>2</sub>+1



# 特殊二叉树
满二叉树

完全二叉树

斜树

二叉排序树

二叉搜索树



# 特殊二叉树-满二叉树
![](/images/yuque/8eb7c3b2705a1c6d9926cdfec6fe925d.png)



# 特殊二叉树-完全二叉树
![](/images/yuque/897400af1dcf2bb1e8a30880f3a6bfcb.png)

没有左子树，不能有右子树，上一层没铺满，不能有下一层

## 完全二叉树的性质
性质四：具有n个结点的完全二叉树的深度为log<sub>2</sub>n+1（向下取整）

性质五：如果对一棵有n个结点的完全二叉树（其深度为log<sub>2</sub>n+1（向下取整））的结点按层序编号（从第1层到第log<sub>2</sub>n+1（向下取整层），每层左到右），则对任一结点i（1<=i<=n），以下结论成立

（1）如果 i=1，则结点 i 是二叉树的根，无双亲；如果结点 i>1则其双亲是结点 i/2（向 下取整）

（2）如果 2i>n，则结点 i 无左孩子（结点 i 为叶子结点）；否则其左孩子是结点2i

（3）如果 2i+1>n，则结点 i 无右孩子；否则其右孩子的结点是 2i+1

 

# 二叉树的存储结构-顺序结构
![](/images/yuque/ff04792428e7124385dc2dd24c2ace82.png)

# 二叉树的存储结构-链式结构
```c
typedef char ElemType; 
typedef struct TreeNode 
{ 
    ElemType data; 
    TreeNode *lchild; 
    TreeNode *rchild; 
}TreeNode;

typedef TreeNode* BiTree;
//BiTree = 指向二叉树节点的指针 = 代表一棵二叉树
//TreeNode 是节点
//BiTree 是整棵树
```

![](/images/yuque/3f698f3297e5c2961b8569e6d26a6183.png)



# 二叉树的遍历-前序遍历
先访问根结点，然后访问左分支上遇到的每一个结点，持续这一过程，直到遇到空结点为止。这时，返回到最近的有右孩子的祖先结点，并从该结点的右孩子开始继续遍历  

```c
void preOrder(BiTree T) 
{ 
    if (T == NULL) 
    { 
        return; 
    } 
    printf("%c ", T->data); 
    preOrder(T->lchild); 
    preOrder(T->rchild); 
}

```

例如下图输出：A B D H K E C F I G J

![](/images/yuque/fbf21bee306725f6c9d90558611862ed.png)

![](/images/yuque/4c1fec33278cafbf748ea1abe308b9bc.png)

![](/images/yuque/a73ffe0861cf1783ba5509c1888231d9.png)

![](/images/yuque/99c576e5d42c9188c95147e6354bec55.png)

![](/images/yuque/3e03e0f06d6a99879a7947e26b66a494.png)

![](/images/yuque/93c52538cdd13aacef9024d5502b7eab.png)

![](/images/yuque/e721d7bbff61fecd5d16758efb0cad76.png)

![](/images/yuque/9c8f929e096eabce7a465165dce3b974.png)

![](/images/yuque/8b75033ccb4007e9140297cc13ba17f7.png)

![](/images/yuque/676de0136922e15faa0de7fad589614a.png)

![](/images/yuque/6b6f4941fbc695e9f113df8329c67614.png)

![](/images/yuque/b53d7c89bf482debf628535525f40a56.png)

![](/images/yuque/167905fae792840db3d36e50a0f2cb4f.png)

![](/images/yuque/b60c71b542802d974ac3b5e8f0520856.png)

![](/images/yuque/2d2c9da5c6f97815d2a8b9a8ebcfff13.png)

![](/images/yuque/cddad196d3aad1328e6bd0c4df002a0f.png)

![](/images/yuque/31b96ac273cd9075c5aa82b4c9e0046a.png)

![](/images/yuque/3e743a8b8f4f6d44168ceffd6029dc4e.png)

![](/images/yuque/debf264c129c24a52395b90562856862.png)

![](/images/yuque/b0dca452d64fb04481b25dc4ef3c0a2c.png)

![](/images/yuque/b6d1a0c35f0202c88a173617754817ed.png)

![](/images/yuque/b9f71c8896d9b4500bb143d05c982d36.png)

![](/images/yuque/b92e53e053100c5f14fef28fc3b727df.png)

![](/images/yuque/92dedf3880fef1b494e014270fb4e998.png)

![](/images/yuque/d2547f50d285da84f0c35bf31d851cb8.png)

![](/images/yuque/d1d74dd1fb481284451c85be57affb6c.png)

![](/images/yuque/508cf292e61d31c905f295495ee65ede.png)

![](/images/yuque/456f704e38670e09c5eea5a933edb5bb.png)

![](/images/yuque/a7bd0402605862de925136b6e624f61c.png)

![](/images/yuque/5d67a3e7c4682169cfe1270c3524e84b.png)

![](/images/yuque/daeef2ef8920680e8083383b66e8124b.png)

![](/images/yuque/8ce8e2810558fddc65e9d4b59a146024.png)

![](/images/yuque/85d71b267f73762b25201e37d687aafe.png)

![](/images/yuque/e393872c85619f1c0c9e25019a3eb980.png)

![](/images/yuque/7821fbb4687f0107ad643d6a2438f12c.png)

![](/images/yuque/9d9ab33c90eaed7bfc535120b3f68477.png)

![](/images/yuque/fd0417445b3fe923b2bba40a8700afa3.png)

![](/images/yuque/c48b8f09dfb6f8886e7c87cc24d348de.png)

![](/images/yuque/88b8e1bb01623383aa5b127ddab9707f.png)

![](/images/yuque/7aee11b454c81fd865ce08737e4874f1.png)

![](/images/yuque/39f4efadb24de45da6d081bcd59233e8.png)

![](/images/yuque/df2d7979207324def68f6dec2a0e86a8.png)

![](/images/yuque/34e2c2216a9d88571744cb65dc9ee6e7.png)

![](/images/yuque/917f9a0128ef41bffce004b72478236c.png)

![](/images/yuque/71c868ec66abba0919b4fd4c0680ad60.png)

![](/images/yuque/8afc86a0e6b47dd24d8f5b96110bb8cb.png)

![](/images/yuque/0b8230c4c4b3592b8c7a96bf8d64351e.png)

![](/images/yuque/83c6af76ba0de8d7de1a0ab21b05267e.png)

![](/images/yuque/05cab902939bf3e22ce8463034f242de.png)

![](/images/yuque/9031076414aece258f7eb2fa5366587a.png)

![](/images/yuque/cd2b3e650042edf9a6fa485dc772ffab.png)

![](/images/yuque/364aa8a259cd962a60c9b295a6494b4e.png)

![](/images/yuque/b9a69e43f2b10dc45dd2e1606f49ca19.png)

![](/images/yuque/524e6a1d236093974b3187fbdc78ad5e.png)

![](/images/yuque/6ff98b269f39185d1393c2ecb578ce4b.png)

![](/images/yuque/67b58dd72bbb90886871026810f310db.png)

![](/images/yuque/77a7e1caa58f59062a00c2a803bd5863.png)

![](/images/yuque/0b752bcdbc7a7a0b42c253474597016d.png)

![](/images/yuque/3eb375cf7e4e1f3c803f123af186b1d3.png)

![](/images/yuque/2c266f3ff9b5510914899af29e77dfc1.png)

![](/images/yuque/a417d9d4b2fc32953b90edf01e9b062c.png)

![](/images/yuque/693df5f31d1ffcda253c9756372d18bb.png)

![](/images/yuque/1a8ac57ebf35dae88b7dd4c99fe469c6.png)

![](/images/yuque/cbc22047a641b74278cbfbcc2405cc92.png)

![](/images/yuque/18d8dc370db59c3d7c0aebd8440f756c.png)

![](/images/yuque/ec04bab42da4cf50f4e77ebe19955a58.png)

![](/images/yuque/595983c5c8d487e1285c8c7191246842.png)

![](/images/yuque/9d72767db9c9dde73d0822353c6cd03e.png)

![](/images/yuque/2cd9f9f6f4cff506c87b7024a6bcf743.png)![](/images/yuque/a89b7836052571f39352eb8efa67ca4b.png)



# 二叉树的遍历-中序遍历
先访问根结点，向树的左下方移动，直到遇到空结点为止，然后访问空结点的父结点。 接着继续遍历该结点的右子树，如果右子树没有子树可以遍历，那么继续遍历上一层最后一 个未被访问的结点

```c
void inOrder(BiTree T) 
{ 
    if (T == NULL) 
    { 
        return; 
    } 
    inOrder(T->lchild); 
    printf("%c ", T->data); 
    inOrder(T->rchild); 
}
```

例如下图输出：H K D B E A I F C G J

![](/images/yuque/259bbad08e69fff1cd7478c9856c4513.png)

![](/images/yuque/e1e5be89fe705ee139d7364edec6bcad.png)

![](/images/yuque/367cf8f47d8f13ddc0900d5bf0d1dfc5.png)

![](/images/yuque/7fedc401672724dc2b530d603f3842b0.png)

![](/images/yuque/d39d057773643787ff40ffa74f4c060c.png)

![](/images/yuque/cbf54177eb27956bfc731e7ddab90798.png)

![](/images/yuque/b65bbfa5388d617938ee193ca7c1a029.png)

![](/images/yuque/0cc44af982c182a22af82a9e686dcc7c.png)

![](/images/yuque/b5901b3319bbc5f580ef974910b9de3e.png)

![](/images/yuque/377e3faacd38046e176109086f4d1ff4.png)

![](/images/yuque/84c054e0cd95265f0ebf48f79038a83c.png)

![](/images/yuque/1fdaefac6f3c392549e8160b759bbc48.png)

![](/images/yuque/8461d1037adec8ea27c9fb5b20774bca.png)

![](/images/yuque/d197063dbffd60b1db2211f650cadb97.png)

![](/images/yuque/749396d2779607bb4386be1a9f1c5e7f.png)

![](/images/yuque/4a20afc2fab1682c3e5f40f6535f097a.png)

![](/images/yuque/42aa882f1c89fdd68f7669c85f91d958.png)

![](/images/yuque/1849c3f059554184a2feeb4e608a8f21.png)

![](/images/yuque/a0c10c21aa31c9eb49070c1b9cad6c59.png)

![](/images/yuque/e9c1a6c50378a1f944aa9776c655e6b8.png)

![](/images/yuque/cc22f571313282aad9eeaf0b4c41aa8c.png)

![](/images/yuque/a27d0bec0a1fdfab46a59d33cac9b26c.png)

![](/images/yuque/bc9c19604c6b5c6eeb56e85f996cfbc6.png)

![](/images/yuque/c3cb87f5ab0f7e17ec5a02860c585a8e.png)

![](/images/yuque/478f53fec684047be8e8c6efbc816338.png)

![](/images/yuque/fbe8b46aab6466ea0281b00188b0194b.png)

![](/images/yuque/857bfc9e103c14f53ea8425e7fbae3d2.png)![](/images/yuque/22f39e4da5876c30203a6bd753bc95bf.png)

![](/images/yuque/4be9846155aad928ea21cd97615a74c2.png)

![](/images/yuque/c7243ecbc8022a0e0dcc34a082a60c0d.png)

![](/images/yuque/150a77cb896c34464df11da90e667120.png)

![](/images/yuque/b64abc9470d86717f97b62b9fe7cca92.png)

![](/images/yuque/1e9a880e658903e36b74b01634721f58.png)

![](/images/yuque/752efdfb714d0178f3dfe7a1f2d70592.png)

![](/images/yuque/107d12d5781be908b609a6af98cdd6c5.png)

![](/images/yuque/13fa4ee3d0fe1117fe4429062fa125ba.png)

![](/images/yuque/9764cbddae7618542d2d32f1c959c4a8.png)

![](/images/yuque/349ba981459a19a214e7e953cfc17649.png)

![](/images/yuque/8832a5e1c0f8bab3a986a5e1fb013c2f.png)

![](/images/yuque/d6d7178c034d5cdf593407f5de56bffc.png)

![](/images/yuque/748667158684ecb7a63652ccec495217.png)

![](/images/yuque/7d5ee9d9bba98899495e0cb895405a68.png)

![](/images/yuque/67a7f7dff7f964ced6a5f31ec9ae3fd7.png)

![](/images/yuque/092f4065063a35eb7a49beb53fb646fd.png)

![](/images/yuque/d48a0b1a03a5f2b359ccad5ca028f783.png)

![](/images/yuque/90b5c4e3b8f18b723f9d50ffb501cbfd.png)

![](/images/yuque/f1f63b576642a61fab8b162b2ffa5f33.png)

![](/images/yuque/08902b074ff31e703ca8b5e52385a5bf.png)

![](/images/yuque/0b6671e2d428a59ad67c078d72541065.png)

![](/images/yuque/4cfc29980da64bbf8080e023807ab8f3.png)

![](/images/yuque/4969cd6e17c560581fa8f2f5f06f6464.png)

![](/images/yuque/089dbc461ace15f34f529783b083e47b.png)

![](/images/yuque/005de353041cd6f89c138079129a8281.png)

![](/images/yuque/8a2da592591b473e98d8521efe59a7df.png)

![](/images/yuque/ed39d9e6310f6088f6612b5a4d7dbc66.png)

![](/images/yuque/e8ad2a80fe3def5451b451a089474991.png)

![](/images/yuque/edcb3553ef3f20518987c7b3d6828e7e.png)

![](/images/yuque/bf83daa0e55fe2e7a97ef6081480c7f6.png)

![](/images/yuque/04bf55efcadaadfba937a436e0132de2.png)

![](/images/yuque/562bf0982ebfa093d124181f0f029ae2.png)

![](/images/yuque/30cfbfcfe79fb5a38691813a120ba257.png)

![](/images/yuque/e7c2c3541ca04727d2e54e6b74f27dc9.png)

![](/images/yuque/873f02dcfb45f7db28a5ce9f89944d11.png)

![](/images/yuque/e274edb67273946ecf19c570f09a14e2.png)

![](/images/yuque/445a43c98245341f3b2b563b594b9797.png)

![](/images/yuque/d67fc211b27b5ed075639f4f3f04868b.png)

![](/images/yuque/3f1b4ce51728d13a9854559f139bc289.png)

![](/images/yuque/06802c7597821fd2d836233fa347b4e5.png)

![](/images/yuque/e186f6be554559f1907396692831aa0a.png)

![](/images/yuque/154fbe9efecd5c1428e3f7695fabf553.png)

![](/images/yuque/c956ae72d3376e01d69ab2a2df6d24a5.png)

![](/images/yuque/9ec9c17098b51d6f3c17851805083a6f.png)

![](/images/yuque/f4862ef0214558fb59a6e097fbec0076.png)

![](/images/yuque/e6e64e0bce261428379388984c55b6f2.png)

![](/images/yuque/eeba6c886431c1e2d9ea047c3fc5070e.png)

![](/images/yuque/d3a485b2847d260da4492a9443778de4.png)

![](/images/yuque/afd5ab8a1673e871bdf9e89fd8db6075.png)

![](/images/yuque/58de068666c59004f1ceaa781c313f72.png)

![](/images/yuque/1ad5315ba2bc8b3ad40d3aaef7d5d084.png)



# 二叉树的遍历-后序遍历
从根结点开始先访问结点的左右儿子，再对该结点进行访问。这就意味着结点的儿子 将在该结点之前输出

```c
void postOrder(BiTree T) 
{ 
    if (T == NULL) 
    { 
        return; 
    } 
    postOrder(T->lchild); 
    postOrder(T->rchild); 
    printf("%c ", T->data); 
}
```



## 习题
![](/images/yuque/2a745d32c8c1719c6896f63326395980.png)

![](/images/yuque/0a59c0fca69d959424ba05cfebd03a04.png)



# 二叉树的遍历-非递归前序遍历
既然递归可以用栈来完成，那么我们自己也可以显式地使用“栈”来模拟这个过程，手动完成遍历操作，这就是所谓的非递归遍历

换句话说：非递归的遍历，就是“自己手动维护一个栈”，来代替系统递归调用时自动压栈的行为

（目前了解即可）



# 根据遍历结果推导二叉树
![](/images/yuque/58a24ada789dda64da30a5cbc2e8258d.png)

![](/images/yuque/b654c1ec01c3743b16f8b7dfeb7af339.png)

![](/images/yuque/f93c56ad4a72775f3aa3e00f7dfa5b74.png)

![](/images/yuque/c0f5218172b1e442e6642db993cff7d5.png)

![](/images/yuque/5f321a3504c976c3a16fa67aef94f003.png)

![](/images/yuque/1deeb2cd4ba901da2cf40d3ad97f62cb.png)



# 二叉树遍历性质
已知前序遍历和中序遍历，可以唯一确定一棵二叉树

已知中序遍历和后序遍历，可以唯一确定一棵二叉树

已知前序遍历和后序遍历，不能确定一棵二叉树

![](/images/yuque/1b574ae9070c5a49e41caf96ed86a91a.png)



# 二叉树-真题解析
![](/images/yuque/6b04cfbbb403798799a7f5d9e004eb08.png)

![](/images/yuque/256d3377a9746b0c03ef3817fdf48734.png)

![](/images/yuque/f0169ddcbfa22935ad95a0ebc4538b87.png)

![](/images/yuque/b96f76b6598f4f7691e16e89636f3497.png)

![](/images/yuque/1dc1a56adebc965325bf22c8dc8f48f4.png)

顺序存储必须严格按完全二叉树的编号来放<font style="color:rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);">2</font><sup><font style="color:rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);">h</font></sup><font style="color:rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);">−1</font>





