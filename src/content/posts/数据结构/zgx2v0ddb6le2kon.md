---
title: 外部排序
published: '2026-05-09 09:25:34'
updated: '2026-06-12 11:46:51'
description: 基本思想所需时间多路平衡归并转换-选择排序最佳归并树外部排序冒泡排序、插入排序、归并排序、快速排序等，这些算法有一个共同特点——它们都假设数据可以全部装入内存中进行处理。然而，在实际应用中经常会遇到这样的场景：数据量非常庞大，远远超过了主存所能容纳的范围，比如排序一个包含数十亿条记录的日志文件...
category: 数据结构
tags: []
draft: false
cover: /images/yuque/db1f6cb6f9fa5ead29d5e2712bf8f39a.png
---

基本思想

所需时间

多路平衡归并

转换-选择排序

最佳归并树



# 外部排序
冒泡排序、插入排序、归并排序、快速排序等，这些算法有一个共同特点——它们都假设数据可以全部装入内存中进行处理。

然而，在实际应用中经常会遇到这样的场景：数据量非常庞大，远远超过了主存所能容纳的范围，比如排序一个包含数十亿条记录的日志文件，这时候常规的排序算法就无能为力了。

为了解决这一问题，需要采用外部排序（External Sorting）技术



外部排序是一种借助外部存储设备（如磁盘）完成排序的策略。它的基本思想是：将大文件分成多个能装入内存的小块，每一块在内存中完成排序，然后再将这些有序小块归并为 一个整体有序文件



假设有 5400 条记录A1, A2, A3, …, A5400需要排序，而计算机可用内存最多可以容纳 900 条记录

把他切分为6块，每一块有900个数据，这样每一块就可以放进内存里进行内部排序，排序完成后整体进行一个归并

![](/images/yuque/db1f6cb6f9fa5ead29d5e2712bf8f39a.png)

![](/images/yuque/519f04109cc37ec5cd6453c1d4d721c0.png)



如果进行归并就会超过900个数据，那么如何进行归并，归并的细节是什么

假设内存中只能存900条记录，把内存拆分成三块分别可以存300条数据，假设对R1和R2进行归并处理，将R1和R2进行等分拆分，各自拿出一个最小的进入输入缓冲区，进行逐条关键字比较后，较小关键字的进入输出缓冲区直到输出缓冲区满了，将输出缓冲区的数据写入磁盘当中去

![](/images/yuque/2da0f149bef3631137c01e36298f1af0.png)

![](/images/yuque/8b3fe6ee675a876d7bc37406209b075d.png)

![](/images/yuque/c8c0e12b9ed3183a656ae55bdefb113b.png)

![](/images/yuque/fd2ef5e53450e810c4640fe494c624e8.png)

![](/images/yuque/d4dc4f0f31d1a6227925d2ae671784b1.png)

![](/images/yuque/1437b696927f043206afe307e33287dc.png)

![](/images/yuque/3c1269e17805ba5b2d92823b64052275.png)

![](/images/yuque/9dd85b9c0e99b49e756c483df66eb141.png)



# 外部排序所需时间计算
外部排序所需时间 = 内部排序时间 + 归并排序时间（这两个排序都会涉及包括磁盘与内存 读 / 写 时间）



# 外部排序所需时间计算-内部排序时间
![](/images/yuque/63fac78583b0fd47ca364aaa6a1e7b9f.png)

![](/images/yuque/8def573853ae8cde8edc61106246719a.png)

![](/images/yuque/723166326737506592eeb895b1198043.png)

![](/images/yuque/c3fe2e696049aa99ed7915f78c5c03f5.png)

![](/images/yuque/7ac479e0c6fde91343707a1e88acfae0.png)

![](/images/yuque/b3d02fa8b785dc70df53d1bfa7d56bfe.png)

![](/images/yuque/c3d12d7f146334e8b9bf28776a9562df.png)

![](/images/yuque/2471bc151398f8748f7c5b167e4b6091.png)

![](/images/yuque/efb5c52bb8deddc69c69c2160ae11ec5.png)

![](/images/yuque/2a3381c41a94451befc548ebf4a40901.png)

![](/images/yuque/16291c0fa8682e71c3b6f344c7ed50b5.png)



# K路归并
![](/images/yuque/356d12aa32d5f8c34884a7a035ea1476.png)

![](/images/yuque/ffa316b63835804435218b077cafc20a.png)

![](/images/yuque/1e3c65fb2cc84706b801e37fc2b24392.png)



# 多路平衡归并
如果是二路归并

![](/images/yuque/bf3a0ebcf3b9a01798e37a2c190c6b90.png)

![](/images/yuque/279c8f9a302e07021b911ac1ae7cd5d9.png)

![](/images/yuque/0649b66d4fe558e1d8343221db329c4a.png)

如果是四路归并

![](/images/yuque/d2838513d9e9883cd55a5159a0122310.png)

![](/images/yuque/4d08b895a4adf317dcf662cf2fd136d0.png)

![](/images/yuque/c0697a9ccb9691db71d54750c1306882.png)

![](/images/yuque/a5a8b797d3342981565b58e5f79023f5.png)

![](/images/yuque/bf91bf2cba40a307c6e723d231c8e162.png)

由此可见，二路仅需要比较1次，而四路则需要比较3次

K 路比较 k-1 次，一趟 O(n(k-1))

如此的比较效率较低，所以我们引进败者树



# 多路归并排序-败者树
实现过程如下：

![](/images/yuque/3020a01855da370f03e1a53aa62b8e5e.png)

![](/images/yuque/b99731e5af44678749c8ac7e08c03127.png)

![](/images/yuque/cee01fa59c1d06149ce50a947125a079.png)

![](/images/yuque/a57153b064dff2d2a059884380e39767.png)

![](/images/yuque/d83a40c12b2e85ef742a2ecd6ca8cc98.png)

![](/images/yuque/bf02c3067182bf59fbab8de4bb47927d.png)

对于同一个文件，归并路数越大，归并趟数越小，所需磁盘读写次数也越少

![](/images/yuque/ecaf6b193f2308266a5825d632b39835.png)

提升外部排序效率：增加归并路数 k，减少初始归并段个数 m

k 越大，所需要的内存空间也越大，缓冲区的个数变多，生成归产段也会变长，归并段的个数就会下降



# 置换-选择排序
![](/images/yuque/0e98b54d54f6e12bc434341519d8af0e.png)

![](/images/yuque/b575d41d9b563847c90540e4327cb76f.png)

![](/images/yuque/a616b29cd9f83ec4a48d6a5dc1c97c19.png)

![](/images/yuque/41bc99bfddd92baf7d58816ef409b5f6.png)

![](/images/yuque/784b2db804422248844f4d8098cdbd42.png)

![](/images/yuque/ff144530f1788997f91d52eda0dd5832.png)

![](/images/yuque/7478c17a28cb6af80c90c309b6bb8d5a.png)

![](/images/yuque/a179c1d0ba1cd1b456730b57adc096c2.png)

![](/images/yuque/62c2b55ba348e66f660523a7de52eab6.png)

![](/images/yuque/0ac54cc3ec0143e56206b2868f679499.png)

![](/images/yuque/31f20123a5752baa22c52b32f1169436.png)

![](/images/yuque/cfb4730e6d73124ddd2e7fd0bfc7c30d.png)

![](/images/yuque/285e52377b9e0ae8e7449123bec487ca.png)

![](/images/yuque/2cf9b6fdccc04cf51c72cf939010043c.png)

![](/images/yuque/f1f9394ca0a91939c0b124d677834cbd.png)

![](/images/yuque/fb4150cd84651fb0713651450b5603da.png)

![](/images/yuque/2b9e83daaa3349ee06560d90d2891953.png)

![](/images/yuque/1c7bcf2d382bebb6101f86568e5775b7.png)

![](/images/yuque/e7eaf389e0cda6b5dff5511a3ca9204f.png)

![](/images/yuque/64e7144abb490545074c3227218e9755.png)

![](/images/yuque/ec8935a70a802474f9f825b5a6aee90c.png)

![](/images/yuque/b9674577fd3352aeea671e7e8b437c33.png)

![](/images/yuque/c1ff5b4e2ac39d37b0bc4f1aad257958.png)

![](/images/yuque/45b4e13f0f270594c30da0537355bc46.png)

![](/images/yuque/fa753dc26d7e75e604fc3678612db6bd.png)

![](/images/yuque/035bebb891f1cbdef8a359743c4ce7f1.png)

![](/images/yuque/3197cedc48be6a06bc4a1324964e4171.png)

![](/images/yuque/5e9ecedc2ccc5652e812657fd6d3f1db.png)

![](/images/yuque/f19b4eb087e4623ec7806785ecce2988.png)



# 最佳归并树
![](/images/yuque/a5bf679cc5c8480e8d26c277aad87013.png)

![](/images/yuque/b3adc63036c6b758fa1896f00639a7e4.png)![](/images/yuque/4ae2eee7c8279766fd0181e6c2ccc153.png)



实现最佳归并树（哈夫曼树）的过程

![](/images/yuque/392a3d5563b21079a1f2d070b75b2f6e.png)

![](/images/yuque/8158425d40da4e7a5b9a0bab3a8593ba.png)

![](/images/yuque/51e61bfca659b8326accea147a3d2e48.png)

![](/images/yuque/f5f7b051782dae766cf315c31c21833b.png)

![](/images/yuque/912dfa64e229485edc798c33901ca65d.png)

![](/images/yuque/18b7be3c92e9791e0767c7060bb9943e.png)



 做<font style="color:rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);">k 路平衡归并</font>构建最佳归并树时：若<font style="color:rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);">初始归并段个数 n 不满足(n−1)mod(k−1)=0，需要通过虚段辅助实现</font>![](/images/yuque/b638c715381942dbd5023f7bb6dfd4be.png)

![](/images/yuque/0b4e2dc1f22b9f65bf2f2e2dcad52479.png)

![](/images/yuque/ba47d6fe925ca92f84c61e64eb9eb857.png)

![](/images/yuque/59b961aa6d020c47cfce959049ce0dee.png)

![](/images/yuque/6c395305daa743cb25046ae5260a870c.png)

![](/images/yuque/b898b4b9df62c70751a170082ebb17f6.png)



# 最佳归并树-虚段
如何求虚段：

k 叉最佳归并树，度为 k 的结点个数为 nk，度为 0 的个数为 n0

结点总数：n = n0 + nk

结点总度数：knk = n - 1



knk + 1 = n

knk + 1 = n0 +

knk - nk = n0 - 1

nk(k-1) = n0 - 1

nk = (n0 - 1) / (k - 1)



n0：初始归并段的个数 + 虚段的个数



# 真题解析
暂略

