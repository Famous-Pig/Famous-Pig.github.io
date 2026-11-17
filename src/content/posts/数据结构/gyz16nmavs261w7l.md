---
title: 高效的排序算法
published: '2026-05-08 10:47:37'
updated: '2026-05-30 17:11:52'
description: 希尔排序归并排序快速排序基数排序希尔排序希尔排序的灵感就来自于，能不能先让数据“基本有序”，再进行排序。它的核心思想是：先按一定“步长”分组进行排序，逐步减小步长，最终步长为 1 时完成最终的排序实现步骤：1、确定步长，没有确定的方法（最常用：初始增量 = 数组长度 / 2，之后每次减半，直到...
category: 数据结构
tags: ["数据结构","算法"]
draft: false
cover: /images/yuque/bbc6a6cad3940c27124fdc979edaea8e.png
---

希尔排序

归并排序

快速排序

基数排序



# 希尔排序
希尔排序的灵感就来自于，能不能先让数据“基本有序”，再进行排序。它的核心思想是：先按一定“步长”分组进行排序，逐步减小步长，最终步长为 1 时完成最终的排序

实现步骤：

1、确定步长，没有确定的方法（最常用：初始增量 = 数组长度 / 2，之后每次减半，直到增量为 1）

步长的选取非常关键，目前还是一个数学难题，没有找到一种最好的步长序列

注意：最后一个步长必须为 1

2、根据步长进行排序，例：增量 4 → 分 4 组：(0,4)、(1,5)、(2,6)、(3,7) ，让一组独立排序

3、直到增量为1，完成全部排序



![](/images/yuque/bbc6a6cad3940c27124fdc979edaea8e.png)

![](/images/yuque/387f1c24b1cbb3d1503f74a9e26b0243.png)

![](/images/yuque/4c77d3d4b23260a04854e7bf8641fd28.png)

![](/images/yuque/8c50077dc50e72206554a22b79224a17.png)

![](/images/yuque/9f7e2aa9c7b68078808570a83eb89c89.png)

![](/images/yuque/0f549d0b1e0fd947d3ee3e4d52567f9d.png)

![](/images/yuque/97689317c92c1eb1de0a4e4c80044e52.png)

![](/images/yuque/369059c10ce129e00533b91f59b598d9.png)

![](/images/yuque/85565c433cdd57fc42ab92434c97f2ae.png)

![](/images/yuque/bc3af414bb4cd5366b3803be23cc2bb2.png)

![](/images/yuque/53fd9441f9958c1955260d88fa5ebc23.png)

![](/images/yuque/480d48c97055288c523e4398203470fe.png)

![](/images/yuque/0bc4e0a1b3c23bef65ed25c9d1fa518a.png)

![](/images/yuque/8e1232ebe8e7bb9eb391b97c351f3f8a.png)

![](/images/yuque/5475423f63fee4a1788b53e7dcf45f54.png)

![](/images/yuque/e2c7bbd4a7f706c69b28e64902304670.png)

![](/images/yuque/2b77da142ed004369393695569a409a8.png)

![](/images/yuque/36788a4297d4deec3cc4bd7e33529f88.png)

![](/images/yuque/b0284eaebb19c02c4cbc27584582631a.png)

![](/images/yuque/be9b4797e08c0e6adb4255be49d8086c.png)

![](/images/yuque/d1f149a6ecfaeb188ad849606d6575d1.png)

![](/images/yuque/1e6e04a4fb84e99ce10a35dafb551f54.png)

![](/images/yuque/14d388d9bc99b315100c5951d4525c9c.png)

![](/images/yuque/ceedbfef46ae6484956f559fffcce569.png)

![](/images/yuque/719a6ae73b45995bb9dacdcaf19c1b5d.png)

![](/images/yuque/720de79bd8c00ef50d792110a9d6df48.png)

![](/images/yuque/4533c562cfb7469f379e10795ae32383.png)

![](/images/yuque/d219ca6ed440a87980b9858e470ade2f.png)

![](/images/yuque/e252c03dcd915649a8e11fae30f903ba.png)

![](/images/yuque/297862b43dce022e4c313abc938192a1.png)

![](/images/yuque/db154db9981df0e79381e2435f374321.png)

![](/images/yuque/8e23f840672a95a9e4eab519f9189a3a.png)

![](/images/yuque/444b1abec1ed8869fb01b5d68a176e37.png)

![](/images/yuque/ab53c81fd39ee7ccc389c594552bc882.png)

![](/images/yuque/6b22997ed3046b5be111773888c7df13.png)

![](/images/yuque/1d7da8c7cc44427609bd0ead82cc40ea.png)

![](/images/yuque/0d08aea3eb2ee49abd751b56c5b123b7.png)

![](/images/yuque/1ab562371ba91e5d6b58f9aa8615ba45.png)

![](/images/yuque/2f58d2b03782ebd87aec9a2769e53700.png)

![](/images/yuque/2f43c2b69b51d4f208a1615e4a67abc6.png)

![](/images/yuque/3498758e219cbdf77aa54e59435a9fd3.png)

![](/images/yuque/211d3fa8224b2f95c2dc4404ef342358.png)

![](/images/yuque/5595a57b8df10db5b9950fd3edfd6689.png)

![](/images/yuque/0e231940c3bb875ae26e8dcadb6b087f.png)

![](/images/yuque/510bd9014d3f8ea1f336c02c72ed1250.png)

![](/images/yuque/3681451f2b862a724d9a5276d4ab4aef.png)

![](/images/yuque/8308b601b343c7517ed5a128d01341a3.png)

![](/images/yuque/44457bc51e6716fc9c08f2e2fc73907c.png)

![](/images/yuque/8fb3a017e57428e22729c387782039f2.png)

![](/images/yuque/2cf2b0a9d1f8a982581f6623d072a8dc.png)

![](/images/yuque/db4e39b2cc1718e3316f66e8c8a2f75f.png)

![](/images/yuque/150926b9810bb0e4fff4051e63764faf.png)

![](/images/yuque/0ef6ba2c82edf1a3a08e47b8721c4d27.png)

![](/images/yuque/0f6ca9fd0bc1655e4e87287239aa38ce.png)

```c
#include <stdio.h>

// 希尔排序函数
void shellSort(int* data, int len)
{
	int temp;
	// 初始化步长为数组长度的一半
	int step = len / 2;
	while(step >= 1)  // 当步长不小于1时继续排序
	{
		// 对每个分组执行插入排序
		for (int i = step; i < len; i++)
		{
			// 当前元素小于其步长距离前的元素 → 需要插入排序
			if (data[i] < data[i-step])
			{
				temp = data[i];  // 暂存当前值
				int j = i - step;

				// 向前寻找合适插入位置，并逐步移动大于 temp 的元素
				while(j >= 0 && temp < data[j])
				{
					data[j + step] = data[j];  // 将较大值后移
					j = j - step;
				}
				// 插入 temp 到正确位置
				data[j + step] = temp;
			}
		}
		// 缩小步长，通常除以2
		step = step / 2;
	}
}

int main(int argc, char const *argv[])
{
	// 待排序数组
	int data[] = {47, 35, 60, 95, 77, 15, 28, 52};
	int len = sizeof(data) / sizeof(data[0]);  // 计算数组长度

	shellSort(data, len);  // 调用希尔排序

	// 输出排序结果
	for(int i = 0; i < len; i++)
	{
		printf("%d ", data[i]);
	}
	return 0;
}
```



# 归并排序
归并排序是一种典型的“分治合”思想的应用。简单来说，它的做法是：把一个大问题， 拆成小问题分别解决，再把解决后的结果合并起来

分：就是把数组分成两半，一直分，直到每个子数组只剩一个元素

治：就是递归地对每个子数组排序

合：把两个有序的子数组合并成一个有序数组

![](/images/yuque/8cf2dc07d638bdd45d2d646a6a082a2d.png)

![](/images/yuque/683071cf27c1accc8cc9bfc547bdfc11.png)

![](/images/yuque/70a1888f9eca8606e60e01850ef93d17.png)

![](/images/yuque/799943d1b6391425bb070b71e65a7630.png)![](/images/yuque/9d8ef66c4f79fffd6eb7a9027333a9bc.png)

![](/images/yuque/283850366f2ec59969b4269cee7c3992.png)

```c
#include <stdio.h>
// 合并两个有序子序列
// 第一个子序列是 data[left...mid]
// 第二个子序列是 data[mid+1...right]
void merge(int* data, int left, int mid, int right)
{
    int temp[100]; // 临时数组，用于存放合并结果
    int i = left;      // 左半部分起始索引
    int j = mid + 1;   // 右半部分起始索引
    int k = 0;         // temp 数组下标
    // 将两个有序部分按照大小关系依次放入 temp 中
    while (i <= mid && j <= right)
    {
        if (data[i] <= data[j])
        {
            temp[k++] = data[i++];
        }
        else
        {
            temp[k++] = data[j++];
        }
    }
    // 将剩余的左边部分拷贝到 temp 中（如果有）
    while (i <= mid)
    {
        temp[k++] = data[i++];
    }
    // 将剩余的右边部分拷贝到 temp 中（如果有）
    while (j <= right)
    {
        temp[k++] = data[j++];
    }
    // 将 temp 中的结果拷贝回原数组中，完成合并
    for (int t = 0; t < k; t++)
    {
        data[left + t] = temp[t];
    }
}
// 归并排序的递归函数
// 对 data[left...right] 这一段进行排序
void mergeSort(int* data, int left, int right)
{
    if (left < right) // 至少两个元素才需要排序
    {
        int mid = (left + right) / 2;

        // 对左半部分排序
        mergeSort(data, left, mid);

        // 对右半部分排序
        mergeSort(data, mid + 1, right);

        // 将排好序的左右两部分合并
        merge(data, left, mid, right);
    }
}

int main(int argc, char const *argv[])
{
    int data[] = {47, 35, 60, 95, 77, 15, 28, 52, 80};
    int len = sizeof(data) / sizeof(data[0]);
    mergeSort(data, 0, len - 1); // 对整个数组进行排序
    // 输出排序后的结果
    for (int i = 0; i < len; i++)
    {
        printf("%d ", data[i]);
    }
    return 0;
}
```

## 具体实现
![](/images/yuque/947263b23b5ba7077fb65b21eaa7ceeb.png)

![](/images/yuque/e29c4e4476a64647c5b73641fd1fd1d3.png)

![](/images/yuque/855ed0e9fcdefb43bf4fc7ddfd810375.png)

![](/images/yuque/e01adf3bf863f68b18a806fae0798da0.png)

![](/images/yuque/3b497b4c8b08549b8efb2fe585579672.png)

![](/images/yuque/58094f4cfd728dec757c3c4ff22b5026.png)

![](/images/yuque/ef46ddb6b52cc3dbf781eb0356cda99f.png)

![](/images/yuque/74c7e67f1acb5dad5f56e83c8826e594.png)

![](/images/yuque/a3bb5d726d4285cc3ff21989539db377.png)

![](/images/yuque/78eca035427120fad40489abeda0d56f.png)

![](/images/yuque/f63d2d12fa70d6e5c4bd830676dad389.png)

![](/images/yuque/323d6c66e96108a8d8ce2d5980014db3.png)

![](/images/yuque/d41e1c87779a327e92eb0c91e34d9993.png)

![](/images/yuque/b99fffe05489dabbe6ead0c2827e237c.png)

![](/images/yuque/cde416a7486ff6b0a8aa96bc667f856f.png)

![](/images/yuque/1c286871a3dd7b17ea428092df6f12f1.png)

![](/images/yuque/531ea2b5422075a7d2c8627141dff2e2.png)

![](/images/yuque/873148270c4086c5894accb69d7c621d.png)

![](/images/yuque/1cf2829d0334bd0b3336d20ee5290ccb.png)

![](/images/yuque/68ae78203043d2d2100ea7f2daeed77e.png)

![](/images/yuque/27bb91cb4702888f63f19c1ad09c4775.png)

![](/images/yuque/084a2c64734bd691af50f64df9949568.png)

![](/images/yuque/0cf76f277f378cc5b46d676248d4a691.png)

![](/images/yuque/ec93f07708df17b17ae736bae52ebb46.png)

![](/images/yuque/32f5b99836714732a291459b9e7cee92.png)

![](/images/yuque/9db9e9555f3d8367c93cb1cd4bdc1ff1.png)

![](/images/yuque/65691c031fe6e47c586f65212513146e.png)

![](/images/yuque/a088bea3da3a7fe7a676fddc0ec766cd.png)

![](/images/yuque/cc6e78118f353eec8a7446d9d3eac34e.png)

![](/images/yuque/02f5b13cef7dfa2ec6fe43cb8f8c74a7.png)

![](/images/yuque/b70a4b2493dba29bb31fe93034baeb91.png)

![](/images/yuque/4324dba256c5eb61b134ebd8de264643.png)

![](/images/yuque/f68b628612f9a8c557bd9c820ad3c0ac.png)

![](/images/yuque/5a80c3748010a9d601122aff6e1e9488.png)

![](/images/yuque/fe2416df2008c5cd61704ac342c397f1.png)

![](/images/yuque/185136b5be37a590c4f033598aac37ea.png)

![](/images/yuque/9d5a41a67f4ec821697925b4be39546f.png)

![](/images/yuque/e6fc01481629aa0ec400bb678a6e5161.png)

![](/images/yuque/356dbb78d170e3b4f60f5b7b460c99a9.png)

![](/images/yuque/7f635b7652d5d031baf4d6a61d34aa5a.png)

![](/images/yuque/3421eebef84a97f00c6c811f9b4e3893.png)

![](/images/yuque/798a52373f2c5ee1df8d70ef91a2ef68.png)

![](/images/yuque/e4bdb9bfa0ccbd374ac3d6b01009cb4c.png)

![](/images/yuque/d79410ef5c3946f09fc8af4aecb405d2.png)

![](/images/yuque/55722e79ca9ddd2dd814d60676ba418c.png)

![](/images/yuque/ade6f8cf8dbbe264be51961433bf6645.png)

![](/images/yuque/5b81c5329d8f06e6522172eb901ec31b.png)

![](/images/yuque/4a8e4c1307419e6eeb341ebca06ba4d2.png)

![](/images/yuque/f0cd552bda410efe1503ef31f3dcd9b1.png)

![](/images/yuque/958aee81680601dace2b9f1a84f185cf.png)

![](/images/yuque/25cb058334b3255e6ddd56cbf994c0d8.png)

![](/images/yuque/892a3878f95754f6a44529fcaa908245.png)

![](/images/yuque/657560bd51e30e934d3af14d5810f0b7.png)

![](/images/yuque/f79adb435d597babe644b7b5bb939c6e.png)

![](/images/yuque/ce28ecd4924aff23c9bf1c879d22b2a6.png)

![](/images/yuque/59af862a4a0807b2533087aa09b6b6d9.png)

![](/images/yuque/9afd001fc95289a380f2d47b7f782604.png)

![](/images/yuque/4a2d8efd6600a5d4006e7c1d7ba46739.png)

![](/images/yuque/5bd5785c61990b42675b421512a702b1.png)

![](/images/yuque/5cd596cb89aa5c689b04b422fa03a77f.png)

![](/images/yuque/9a7df65f646e4328d1ccedc888799060.png)

![](/images/yuque/dbadeedb7504e4ac5187d1a13b7be73f.png)

![](/images/yuque/90dfb9bd85fd2cd737f8c6bbe3d5ab01.png)

![](/images/yuque/fc7d50153da19abeaf35ccb3d126ce9f.png)

![](/images/yuque/73f180fc799af06cccc8a3cc212b3ab7.png)

![](/images/yuque/ed019f7407e02f1c36e69c1647db64b6.png)

![](/images/yuque/7a1e0514139dd393ecec3a8d4915e77c.png)

![](/images/yuque/78773451f3907e8d61bb3178a3100713.png)

![](/images/yuque/df953c48115b24d9ac39af1de67912ad.png)

![](/images/yuque/62349d22af5ce9b1d8fb6ca4ee9bcc4b.png)

![](/images/yuque/f999fe5d986922485bb02bf4c6b66926.png)

![](/images/yuque/210444aeb4ee3e86d50840a9d35b46e0.png)

![](/images/yuque/0616910eff410f1e9115127bd4be738b.png)

![](/images/yuque/fa4f663f05a33ece22ea156a8a352dad.png)

![](/images/yuque/0308ed33c727a056926c340dd16f4965.png)

![](/images/yuque/14dc1293e8d9286868167aae2de0de52.png)

![](/images/yuque/b294ebce728a6a8a9c3be642b8d02c1f.png)

![](/images/yuque/c0192eff3d37a812632b672745a16b10.png)

![](/images/yuque/2094801fbb55f8c773482f325dc4e59e.png)

![](/images/yuque/0e022f1adb13d4bf9720aa641a7158cc.png)

![](/images/yuque/e9cae06b41fd98a783f9624c7f68868f.png)

![](/images/yuque/df4457ed229b1f840c9d4b2bc05df61c.png)

![](/images/yuque/10147b59cb756a5faffb18ca0174d5a3.png)

![](/images/yuque/9cc434302b054a5cff6e38fae9f9259c.png)

![](/images/yuque/0fa20f4f2540587946487cbd92bc4092.png)

![](/images/yuque/78d3a04ed397abd277ff7e107881d607.png)

![](/images/yuque/951e52d6a7cd3661786460a50ac7a266.png)

![](/images/yuque/b62b3a191014d145380b214d289b44fc.png)

![](/images/yuque/412773c7391d68a8627316ad51e698da.png)

![](/images/yuque/1477226d10fc9989144fee2ae0383051.png)

![](/images/yuque/30397a676b0cb4d8e04145f9642e8be1.png)

![](/images/yuque/e31993b474b20e6bc8fff1f31506fe78.png)

![](/images/yuque/5059393daf8bc6a57ea965aadf6755a4.png)

![](/images/yuque/faf786a052f93fabb60e53585213f965.png)

![](/images/yuque/3878727ce33868657c5546e839455207.png)

![](/images/yuque/5fd10b56a868967b1ce537c72a73e50f.png)

![](/images/yuque/5a1f02542c4dc18ebd7eabc81db71c8f.png)

![](/images/yuque/92c278b798c5d9a83ccef887140e5ba5.png)

![](/images/yuque/ac0e83e55c5817f39b26bdcbb3450ff2.png)

![](/images/yuque/cd773ce7d4836561558d30ccfafee2c9.png)

![](/images/yuque/24616c3f0c39ca8b437b1cd2bcdf0639.png)

![](/images/yuque/0556bd1d6498cef8f1a6c212574183fe.png)

![](/images/yuque/07d2ff6dee47c90b4b08054d2495ba5a.png)

![](/images/yuque/156bc9b93a0d02b677a3d9a797f5f0ee.png)

![](/images/yuque/d5549dc990feb19b11467a202bde9e29.png)

![](/images/yuque/50c34da64194d6c7c95fac50ee71a5cc.png)

![](/images/yuque/3a24841c5c2446401f43b72079b9a739.png)

![](/images/yuque/0a38adb6d0b1e28d0ecc02c91e9cc88e.png)

![](/images/yuque/5e013e03d7e9a01ae466c70821675835.png)

![](/images/yuque/6eebcafd6a65e5215aad7241ca396479.png)

![](/images/yuque/7229221faae5a094c4a0862227a3f6b8.png)

![](/images/yuque/1ba663c425ade3be55fa0ba0ec281da4.png)

![](/images/yuque/1382f090a727af30c096bf2247c66985.png)

![](/images/yuque/90bd8691262fd643df628a0a9293fdea.png)

![](/images/yuque/a59e5d1d8ec122fbfc45061af4d2ae78.png)

![](/images/yuque/089b67afb1a55f098db2a6d023ebaa38.png)

![](/images/yuque/5b8b22d681166bc49b6ae786d01f6c9b.png)

![](/images/yuque/ab7653496df51a9033d55983f32bf815.png)

![](/images/yuque/7f6a6c9f92b45e9fc2e94aafee9f4d91.png)

![](/images/yuque/f025057167d1fb02f476119ea4d80e5d.png)

![](/images/yuque/1a1653c21d7de8d4f72da7b2fd264f5b.png)

![](/images/yuque/fecfdfef450ec020d4811a829638491e.png)

![](/images/yuque/f60534ae67886a6b18725cf0f26544d8.png)

![](/images/yuque/73c3ba96c14191b983344d7b785890bd.png)

![](/images/yuque/17d30da1bb806a6507312d3a1c00a0ab.png)

![](/images/yuque/b2c533b78b87ec13fe892052ff76b790.png)

![](/images/yuque/0f1d09df24110633f872f9b796be2661.png)

![](/images/yuque/aa87f1fc0d5c109da0f54cb4a0646bfa.png)

![](/images/yuque/c9e85c5bc7066af83cf154211e11bb69.png)

![](/images/yuque/bdfdbfb9a227417db3bd7d2ee919e3dd.png)

![](/images/yuque/ca7105320bb3745c2a51e79444037805.png)

![](/images/yuque/201e8d06861859d31093bd6a251ddc04.png)

![](/images/yuque/d08851091bd2f29ea75900feb6cc7c31.png)

![](/images/yuque/a76eb1339df317e2ac5d0e6567e132af.png)

![](/images/yuque/74c056835423be529dce7bf262f42a90.png)

![](/images/yuque/172480227b0cfa6580b7fd40ecc1883d.png)

![](/images/yuque/1d55fedcb9fd705dffb19905a6b34937.png)

![](/images/yuque/15d5d4eed6f641aaaff976bf77f6acb4.png)

![](/images/yuque/ae2d11b232908b5e123ec7d52c5e2b19.png)

![](/images/yuque/497e67c63243a21ffab567a28d067803.png)

![](/images/yuque/04d92820d2969671bd96ac4dbf8df286.png)

![](/images/yuque/0938602d596746e7805a811e66c30200.png)

![](/images/yuque/db99cbd97d229123c930273834cb7898.png)

![](/images/yuque/f9f3298d318a2c6bfa28cccc205388f8.png)

![](/images/yuque/7e93ae6135ab497cef1338986846b374.png)

![](/images/yuque/d9bf2318b148ab6988e868e9e2a83903.png)

![](/images/yuque/36f5e777bcd6ca7c96f79f4f6d10f3a7.png)

![](/images/yuque/f198e114b7899f44faf692935d5e6fad.png)

![](/images/yuque/8af991da227cfdb2e551ce827e37ccfb.png)

![](/images/yuque/c97b09679ee8e45158dc79b7e9594b30.png)

![](/images/yuque/cc2c53580cb8c2ef2ab966e30ee8c749.png)

![](/images/yuque/8565e66c7594c57c731bd852869d4f13.png)

![](/images/yuque/0b2702bf8928062e478baa4f65f68414.png)

![](/images/yuque/97bc44188ebc4b6472ad995bcae96a94.png)

![](/images/yuque/901511af6d000d534ff6d07a0547b103.png)



# 快速排序
快速排序是一种非常高效的排序算法，采用了分治思想（Divide and Conquer）。其基本策略是：

1. 从序列中选择一个“基准元素”

2. 将序列划分为两个子序列，所有比基准元素小的放到左边，比基准元素大的放到右边

3. 对左右两个子序列递归进行快速排序

4. 直到子序列长度为 1 或 0，排序完成

![](/images/yuque/76398567401da4024dca278f11bb10cb.png)

![](/images/yuque/057ba6678d5babe1ad34cc46ff4de58b.png)

![](/images/yuque/a66d8f736bb3a29b28230b8d80b48e72.png)

![](/images/yuque/d9dd9f5306b53689d934ef85c938d3cd.png)

![](/images/yuque/bc67582501397bd24db15ca852f83a5d.png)

![](/images/yuque/33ba11a88230c21c69fe4e410206a30b.png)

![](/images/yuque/2def00ad26abe7025a5b0db8b170f90b.png)

![](/images/yuque/99a5a4c78f5a81f18f4856a3446ed62a.png)

![](/images/yuque/3c030c59975a3939f8bf3ef9e3094117.png)

![](/images/yuque/ac36cfbac73ce65765165b4c1048fe18.png)

![](/images/yuque/ef5d3ba004e31dd78be4c5239a739814.png)

![](/images/yuque/2944956c55cc15c6bc9ff9c4afe8b76a.png)

![](/images/yuque/74d7f509957dea2db80cb0bd6c475b33.png)

![](/images/yuque/da28073d37beea96dc53b0f8aa703234.png)

![](/images/yuque/b08f25147c5a6ccabfedd75ee5008210.png)

![](/images/yuque/b706b625c1092d088da75fba0c96b868.png)

![](/images/yuque/9db349173499d712d8c1dab9944441cb.png)

![](/images/yuque/8d061da42daad4bb2218bbdcabac0bcb.png)

![](/images/yuque/9d64e40317705ac519ea09f2a7afe168.png)

![](/images/yuque/f924e2575923f6c03f5034ce54856699.png)

![](/images/yuque/362d01c1411ad1579792e6123ceb8e57.png)

![](/images/yuque/1feb0c99d5bde675a1ea032b33b2bfb1.png)

![](/images/yuque/bb971a4bf3e8de5ef7a96ed61a1d186b.png)

![](/images/yuque/a6eb127a92037df4265c291ba4c092f3.png)

![](/images/yuque/9b119ec45f1025a26562185732c72882.png)

![](/images/yuque/e5f846244a39bd875c08b21f7f71bfbe.png)

![](/images/yuque/4120e319b44185a6ddeec9e59f3b042d.png)

![](/images/yuque/002940eb8948813d27b2d9cb821bd8fa.png)

![](/images/yuque/36a5e6d0f35b05cf50f7ce0b834b22bf.png)

![](/images/yuque/9cbeb141e5885ba8a4f63b82d7d45c13.png)

![](/images/yuque/bd71a5f9b48ec38c4e79eb704c88d511.png)

![](/images/yuque/bdcf72a236ba300e2edb94192e596dca.png)

![](/images/yuque/0cdc7d71e000aa85ae6dbf67a3ab47d3.png)

![](/images/yuque/bbf4a7df1c23ea00d52eff4ffa5e27fd.png)

![](/images/yuque/f24ff741904fe883f247a9b92a65390c.png)

![](/images/yuque/95288f86fefcbb512db4bdc1234df00e.png)

![](/images/yuque/715cf30fa62505c5833129b1dd96f4ed.png)

![](/images/yuque/d3229e39dbe50c40a09c044666eab1af.png)

![](/images/yuque/ff9dda09728cafdb02321a758a15f462.png)

![](/images/yuque/7733d570a4f836a93cfaddf4a852b178.png)

![](/images/yuque/46d4699c287c8d59ede34226fe89f630.png)

![](/images/yuque/8a76e4d128d367800ca97786dad7583f.png)

![](/images/yuque/41d1ebeddab7e4a0c9c65f522e8c5ac3.png)

![](/images/yuque/bc1da414507d4c796fddcaf8b5edb4da.png)

```c
#include <stdio.h>

// partition 函数用于将数组划分为左右两个部分，返回基准值的最终位置
int partition(int* data, int low, int high)
{
    // 选择最左侧元素作为基准值
    int pivot = data[low];

    // 当 low 与 high 没有相遇时，继续循环
    while(low < high)
    {
        // 从右向左寻找第一个比 pivot 小的数
        while(low < high && data[high] >= pivot)
        {
            high--;
        }
        // 将较小值填入左侧“坑”中
        data[low] = data[high];

        // 从左向右寻找第一个比 pivot 大的数
        while(low < high && data[low] <= pivot)
        {
            low++;
        }
        // 将较大值填入右侧“坑”中
        data[high] = data[low];
    }

    // 当 low == high 时，即找到 pivot 应该放置的位置
    data[low] = pivot;
    return low; // 返回 pivot 的最终位置
}

// 快速排序主函数，采用递归方式
void quickSort(int* data, int low, int high)
{
    int pivot;
    if (low < high)
    {
        // 对当前区间进行划分，并获取 pivot 的位置
        pivot = partition(data, low, high);

        // 对 pivot 左侧子数组递归进行快速排序
        quickSort(data, low, pivot - 1);

        // 对 pivot 右侧子数组递归进行快速排序
        quickSort(data, pivot + 1, high);
    }
}

int main(int argc, char const *argv[])
{
    int data[] = {47, 35, 60, 95, 77, 15, 28};
    int len = sizeof(data) / sizeof(data[0]);

    // 执行快速排序
    quickSort(data, 0, len-1);

    // 输出排序后的结果
    for(int i = 0; i < len; i++)
    {
        printf("%d ", data[i]);
    }

    return 0;
}
```



# 基数排序
基数排序是一种“分配式”的排序方法，适用于整数排序，尤其在处理大批量数据时表现亮眼。它的核心思想是：把整数按“位”分配到不同的桶中，再按位合并，通过多轮这样的分配和合并，最终完成排序

![](/images/yuque/48d94b0d71fca274c3243080c9ed8ffd.png)

![](/images/yuque/a5a1ae611d96a6c82b104f0ca10d3707.png)

![](/images/yuque/cbdace8b0d9fd1b6ceb207736078429f.png)

![](/images/yuque/5970507e99ad4e44dc8d49c2bae7d5e7.png)

![](/images/yuque/ef42e120de0a6ed6485a4d8cc54eb68a.png)

![](/images/yuque/9c8615de4c33007ba228678d8d4ba993.png)

![](/images/yuque/719fd76c2860e730aaaea23d74141f1e.png)

```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAX 100
#define RADIX 10 // 十进制：桶的数量为10（0~9）

// 获取某个数在某一位上的数字
int getDigit(int num, int pos)
{
    int radix = 1;
    for (int i = 1; i < pos; i++)
    {
        radix *= 10;
    }
    return (num / radix) % 10;
}

// 获取数组中最大数的位数
int getMaxDigit(int *data, int len)
{
    int max = data[0];
    for (int i = 1; i < len; i++)
    {
        if (data[i] > max)
        {
            max = data[i];
        }
    }

    int digit = 0;
    while (max != 0)
    {
        digit++;
        max /= 10;
    }

    return digit;
}

// 基数排序
void radixSort(int *data, int len)
{
    int maxDigit = getMaxDigit(data, len); // 获取最大位数，决定排序轮数
    int bucket[RADIX][MAX];                // 定义10个桶，每个桶最多装 MAX 个元素
    int count[RADIX];                      // 每个桶中的元素数量

    for (int pos = 1; pos <= maxDigit; pos++) // 从个位开始，依次对每一位进行排序
    {
        memset(count, 0, sizeof(count)); // 清空计数器，准备新一轮

        // 分配阶段：将每个元素放入对应的桶中
        for (int i = 0; i < len; i++)
        {
            int digit = getDigit(data[i], pos);           // 获取当前位置的数字
            bucket[digit][count[digit]++] = data[i];      // 放入对应桶中
        }

        // 收集阶段：按桶的顺序重新收集数据
        int index = 0;
        for (int i = 0; i < RADIX; i++) // 依次从0到9号桶取出数据
        {
            for (int j = 0; j < count[i]; j++)
            {
                data[index++] = bucket[i][j];
            }
        }
    }
}

// 主函数测试
int main(int argc, char const *argv[])
{
    int data[] = {170, 201, 321, 95, 843, 996, 57, 8, 241, 30};
    int len = sizeof(data) / sizeof(data[0]);

    radixSort(data, len);

    for (int i = 0; i < len; i++)
    {
        printf("%d ", data[i]);
    }

    return 0;
}
```



# 真题解析
暂略

