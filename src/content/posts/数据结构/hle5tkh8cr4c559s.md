---
title: 简单的排序算法
published: '2026-05-06 11:15:57'
updated: '2026-05-06 21:36:01'
description: 冒泡排序插入排序折半插入排序简单选择排序冒泡排序
category: 数据结构
tags: []
draft: false
cover: /images/yuque/a32ce5c8ccd12f538b2447426a0d4045.png
---

冒泡排序

插入排序

折半插入排序

简单选择排序



# 冒泡排序
![](/images/yuque/a32ce5c8ccd12f538b2447426a0d4045.png)

![](/images/yuque/8e07673dbe7a75666515c415b9c0704c.png)

![](/images/yuque/7d71683a09ed0e1045fb680d33e92d10.png)

![](/images/yuque/a9920ac285f873f776e41ce193fca89a.png)

![](/images/yuque/451bfb62817e683935ba4b7dbe79e02d.png)

![](/images/yuque/29be0537495f002ff7498d403624f0a6.png)

![](/images/yuque/bc340001a8ea043c8e5f8d9815fbc235.png)

![](/images/yuque/844648c05af363d656c4c3f0d4f8033b.png)

![](/images/yuque/9a0a3e785c1451bde33de678f7664254.png)

![](/images/yuque/799e878e7b90c76af73442db2fb05ab0.png)

![](/images/yuque/92a2059b3b6fcec0cced654746fc5a09.png)

![](/images/yuque/aafa9807f25209e8d3166c48f71455a1.png)

![](/images/yuque/9d274ec15af78149300a7a86ed3948d3.png)

![](/images/yuque/aec1f1fdd9e349f7a467a88f965e1e4b.png)

![](/images/yuque/5d1a00a2c331e96f5d59314bd3cc9f79.png)

![](/images/yuque/255f6cb079d4e90283bf03684ce598ae.png)

![](/images/yuque/2ed796d1281e6159be89081975b4b2ab.png)

![](/images/yuque/63e280c41cdc063886ff7bc0c321d012.png)

![](/images/yuque/89926a592b95ca4a25755c625f1b0a9d.png)

![](/images/yuque/f4c6e66da9c4b2c9a522c5c9fff437bc.png)

![](/images/yuque/af7814dc10b3136ebe0803ec76c30536.png)

![](/images/yuque/d196496bd1bb02810287b5eb0872351b.png)

![](/images/yuque/13557437e980ef5926e3cf515bb68ddf.png)

![](/images/yuque/1877cf0726dd0957716d4506370b36bd.png)

![](/images/yuque/b28f0e20c569203c316ecc98c0e19132.png)

![](/images/yuque/0e37a899f5d73e79bfb67d60766f902e.png)

![](/images/yuque/1748fd64d07f8fad1d9e0ce063f0b5a9.png)

![](/images/yuque/79ef57f317c61468925e788af371450a.png)

![](/images/yuque/17fdb932b6800402ca01df526818ce19.png)

![](/images/yuque/8a049b4cac684e6ceec83fd8615ce555.png)

![](/images/yuque/4414cab4383d4c733bc7eccb4bb9b7ca.png)

![](/images/yuque/dc40ba63e1157fdf1e752cb3a387ebc0.png)

![](/images/yuque/b44f15025a9d172c407b7d0114bba8eb.png)

![](/images/yuque/1717d24e6a06ad9d028246db8178b11a.png)

![](/images/yuque/400b81a77d56e5c9d1ac1ac405d72255.png)

![](/images/yuque/609f52b30b726486cc838fc57510b35c.png)

![](/images/yuque/08de6b3b102f880623abfaf94d53b0c0.png)

```c
#include <stdio.h>
// 交换数组中下标为 m 和 n 的两个元素的值
void swap(int* data, int m, int n)
{
	int temp = data[m];
	data[m] = data[n];
	data[n] = temp;
}
// 实现冒泡排序：将数组 data 中的元素按升序排列
void bubbleSort(int* data, int len)
{
	// 外层循环控制“趟数”，共需 len 次比较（严格来说是 len - 1 次）
	for (int i = 0; i < len; i++)
	{
		// 内层循环控制每趟中相邻元素的比较和交换
		// 每次比较到 len - i - 1，因为右侧已经排好序
		for(int j = 0; j < len - i - 1; j++)
		{
			// 如果前一个元素比后一个大，则交换它们
			if (data[j] > data[j + 1])
			{
				swap(data, j, j+1); // 调用 swap 函数进行交换
			}
		}
	}
}
int main(int argc, char const *argv[])
{
	// 定义待排序的整数数组
	int data[] = {47, 35, 60, 95, 77, 15, 28};

	// 计算数组中元素的个数
	int len = sizeof(data) / sizeof(data[0]);

	// 调用冒泡排序函数进行排序
	bubbleSort(data, len);

	// 输出排序后的数组
	for(int i = 0; i < len; i++)
	{
		printf("%d ", data[i]);
	}
    
	return 0;
}
```



# 插入排序
![](/images/yuque/18c7c22d5793229ba2bf3d7035db438e.png)

![](/images/yuque/94943f77f03a06a4dee832d0468171d9.png)

![](/images/yuque/0f7f7c36fd2eedd76adeafbcf116e026.png)

![](/images/yuque/e3d690d48d6b97f284e139e30a4b8c60.png)

![](/images/yuque/e7af83019d5758ff985b7428957ab27b.png)

![](/images/yuque/39840e4c06269f896ad8bee572887bff.png)

![](/images/yuque/722109897f2af2dfc92ac28b1cb133aa.png)

![](/images/yuque/6fad27b145e34497e1622812aac3224a.png)

![](/images/yuque/59786b124135d464c3e28da5b5e2d899.png)

![](/images/yuque/803a766932e7f8b703a2d731123af013.png)

![](/images/yuque/c4f1af8bcd73cd8bd253f30032fc819a.png)

![](/images/yuque/d919458ab08019c5cbd96200f3989a5e.png)

![](/images/yuque/009b55baf08cbe9f94bb6b6780777d9e.png)

![](/images/yuque/89d11c681666d0207c0c18f1b48709c4.png)

![](/images/yuque/1220749d49af917358814de3ef644e90.png)

![](/images/yuque/e69fc11f1ff97d7927bf6a720dca50b1.png)

![](/images/yuque/949aa73047cbea34f52f4fef80097fce.png)

![](/images/yuque/918498f0b26379afb11159c7f357eb8a.png)

![](/images/yuque/b6d903c731d6245e3e288a084871d49b.png)

![](/images/yuque/f279ba3833cc845c8d0f8a9e21993736.png)

![](/images/yuque/d73d6d44384b94e0604dcea8ca3c3a5c.png)

![](/images/yuque/b0aa9cdac1a460e2f181e782ea29ede6.png)

![](/images/yuque/7e576773d5bb8bb3484af50a3b0300b9.png)

![](/images/yuque/37f79432d3152409b955a51e32905a17.png)

![](/images/yuque/d84b78703600876c4bfded90299f0645.png)

![](/images/yuque/3bf7626b6e36e403fb09d2a40aa4b8d9.png)

![](/images/yuque/ddddaddf81996a050bef232b97570b62.png)

![](/images/yuque/4b85ad92f0dd961dcf0cd47a4d2a997b.png)

![](/images/yuque/3e25b7d7c8324505196559c315ef750f.png)

![](/images/yuque/deb7ec6c44201fa45e9a6c3794879df5.png)

![](/images/yuque/465165f6b9bb7c252eb22dbe5c90e8cb.png)

![](/images/yuque/607c493bcf7bbf98835b1f1f26eed874.png)

![](/images/yuque/68948d56e57cac281731371b80505b71.png)

![](/images/yuque/6a8fb8653ddf921ff94729a1a5532e8d.png)

![](/images/yuque/1132a215ccffe2feda498a0a79806bcb.png)

![](/images/yuque/7de1c68d05512b69bb8818a5616b25f9.png)

![](/images/yuque/04f9fe83e0154d4cc899da3e44754c79.png)

![](/images/yuque/47b53cef3531bb13510e14ad4693f741.png)

![](/images/yuque/de0186fc7824f61c6299279322284651.png)

![](/images/yuque/0c25df5e455dcd8b897478edeb9725c9.png)

![](/images/yuque/3944bc479207cf62089a431c89ebf4b5.png)

![](/images/yuque/dbee630b8967a8c7315690c96cfc6321.png)

![](/images/yuque/6efd588e5d71528e7fd01345838fc2af.png)

![](/images/yuque/85ce315b50f49a8c560e118a97f4d570.png)

![](/images/yuque/849bb7cc157bcd5f4670ab97d5b9f3ea.png)

![](/images/yuque/c8c748607668b0ec55246e5c16b1e369.png)

![](/images/yuque/00329be73425c623f253db1000c164d2.png)

![](/images/yuque/8cf9aca396de7fbab6214ec77a024aca.png)

![](/images/yuque/5df2adfca71a197cb26b5312267ba666.png)

![](/images/yuque/59899c6acdd65cf5e65fe487a401f302.png)

![](/images/yuque/9a45527dad2c71829e985726a4b18b01.png)

![](/images/yuque/22cc1a7e4fdf481f6b1dc8b76ced968e.png)

![](/images/yuque/84f6a73b571da37d503f264130c71916.png)

```c
#include <stdio.h>

// 插入排序函数
void insertSort(int* data, int len)
{
	int key; // 用于暂存当前待插入的元素
	for (int i = 1; i < len; i++) // 从第二个元素开始逐个插入
	{
		key = data[i];        // 将当前元素保存为 key
		int j = i - 1;         // 从已排序序列的最后一个元素开始向前比较

		// 向前查找插入位置，移动比 key 大的元素
		while(j >= 0 && data[j] > key)
		{
			data[j+1] = data[j]; // 将比 key 大的元素后移
			j--;                 // 向前继续比较
		}

		// 找到插入位置后，将 key 插入
		data[j+1] = key;
	}
}

int main(int argc, char const *argv[])
{
	//47，35，60， 95， 77
	int data[] = {47, 35, 60, 95, 77, 15, 28}; // 初始化数组
	int len = sizeof(data) / sizeof(data[0]); // 计算数组长度

	insertSort(data, len); // 对数组进行插入排序

	// 输出排序后的结果
	for(int i = 0; i < len; i++)
	{
		printf("%d ", data[i]);
	}
	return 0;
}
```



# 折半插入排序
![](/images/yuque/7c4a17faa03c200b6d214f615226e924.png)

![](/images/yuque/f936ad99f840c7271378c3a9a7f3570b.png)

![](/images/yuque/2ec447aab14d97b05d4282cbea5f6e2c.png)

![](/images/yuque/443d8859e88c139a7aac14d14892e20b.png)

![](/images/yuque/0442948030e44a5d3b8723c076003fd6.png)

![](/images/yuque/a56ba4254674f999dbd625a274256d0c.png)

![](/images/yuque/a44623c82af50da4e96531a72ae25311.png)

![](/images/yuque/af75c33189ff39bc7a5b13e25027afac.png)

![](/images/yuque/21e7cc4fa7451b01c02d526c768f0389.png)

![](/images/yuque/6a5630e2e1f0bb5e29e9e0662a1594c0.png)

![](/images/yuque/aa2f9540ae5533f054cc5fd49345c7da.png)

![](/images/yuque/8ddecc7c6002b6909a33fd8936cfac7d.png)

![](/images/yuque/75543467937ded1b2fd81ea591547a85.png)

![](/images/yuque/a7cbf38c2c622a9225730e3686e7b383.png)

![](/images/yuque/e39d5e16aa2a461a0272589b27dc2083.png)

![](/images/yuque/0aacd1fd5c629ffc15c116a7f2385931.png)

![](/images/yuque/57b802d364ef20edf662a7878ab282f2.png)

![](/images/yuque/828325a8e22c013752077a43bebfab1d.png)

![](/images/yuque/6b0fe8a86669ee7fb80206455e68716a.png)

![](/images/yuque/bac0d4a16411c1ddf44e913d1bb2c3e3.png)

![](/images/yuque/921e53a5b08d0573a2db9311917efcb7.png)

![](/images/yuque/c841a3c52437398165cb49bfd0edfef2.png)

![](/images/yuque/9fc68dca5ba94dc3aab4147eb904c6f6.png)

![](/images/yuque/80f43a371df2c268c049a7ed400946a8.png)

![](/images/yuque/11edc517691c8cc731a872bd159ef25c.png)

![](/images/yuque/b67bc08cddfe8164fe6253f55c9fad7d.png)

![](/images/yuque/924e5c535f34865cb3b5001650625704.png)

![](/images/yuque/75dc4ae7e0c870a181a352bdea4fd32e.png)

![](/images/yuque/574323dc4223f3f7fd4e1ab9150e38b2.png)

![](/images/yuque/94585c37f1455698c36b3e368f77bd66.png)

![](/images/yuque/f31e1d9c6dd141674bb22ca60ee1ec87.png)

![](/images/yuque/c8f70e2c733bbf27caca2fb0886a8b30.png)

![](/images/yuque/8afc5d330ab14feebbfc7bf1e87ab615.png)

![](/images/yuque/eb3ad3cd39c0c4109310cd8fbb72e24c.png)

![](/images/yuque/d31a5976a70af3b8c28d2d3457c1be2a.png)

![](/images/yuque/069e6f8f48c74ebc2cc4831905daf009.png)

![](/images/yuque/640ab4c053208b42d6a67d03197d51df.png)

![](/images/yuque/ea6303f830ec5a553fd0cffb6ddfb140.png)

![](/images/yuque/31a18e546f491854f6b671a74154fa95.png)

![](/images/yuque/021c191c7b14f8c7c10f6fa86ac64fba.png)

![](/images/yuque/b771305e061112f5942af147eb832241.png)

![](/images/yuque/a17bdb0a3037b566009092fa32864400.png)

![](/images/yuque/efcfe50cf408d113697232b808fe3650.png)

![](/images/yuque/f4ab60bae4d61db9822c66ad8f8cf0ac.png)

![](/images/yuque/453f86747d044358ba122c022ddfbb72.png)

![](/images/yuque/2dc112742b9b78390023162fb471374e.png)

![](/images/yuque/67ab4fa1fbc901d9cee4385890e8ecda.png)

![](/images/yuque/426b120422db9239bc7704dc75628c36.png)

![](/images/yuque/aef54cb1bb323aa32f707dae7f4ac8f5.png)

![](/images/yuque/5877bd88b53e92c1a7aec85f335f352d.png)

![](/images/yuque/5ab4c0005a53bf3bf22f73a62c70ad1b.png)

![](/images/yuque/3406523cb68824194745adacd4e5ce2c.png)

![](/images/yuque/879f6009e4353e1d0a04ddd53fa3988b.png)

![](/images/yuque/6e2c463f352402bea8bcf89b3a989529.png)

![](/images/yuque/5fc7907048b37b19981a5963229ebe92.png)

![](/images/yuque/81dd8361d6d3270a75c3e825709dd43a.png)

![](/images/yuque/39bd01fec102ed51d96bb3e3c87ad380.png)

![](/images/yuque/eb5c086ce295d254e6aca514ee8fc745.png)

```c
#include <stdio.h>

// 折半插入排序
void binaryInsertSort(int* data, int len)
{
	int low, high, mid;
	int key;

	// 从第二个元素开始遍历，将其插入到前面已经排好序的子序列中
	for (int i = 1; i < len; i++)
	{
		key = data[i];         // 记录当前待插入的值
		low = 0;               // 设置当前有序序列的最小下标
		high = i - 1;          // 设置当前有序序列的最大下标

		// 使用折半查找法找出 key 应该插入的位置（即 low 最终的位置）
		while(low <= high)
		{
			mid = (low + high) / 2;
			if (data[mid] > key)
			{
				high = mid - 1; // 插入点在左半边
			}
			else
			{
				low = mid + 1;  // 插入点在右半边
			}
		}

		// 从后往前依次将大于 key 的元素后移，为 key 腾出位置
		int j = i - 1;
		while(j >= low)
		{
			data[j+1] = data[j];
			j--;
		}

		// 插入 key 到正确的位置
		data[low] = key;
	}
}

int main(int argc, char const *argv[])
{
	int data[] = {47, 35, 60, 95, 77, 15, 28};
	int len = sizeof(data) / sizeof(data[0]);

	// 调用折半插入排序
	binaryInsertSort(data, len);

	// 输出排好序的结果
	for(int i = 0; i < len; i++)
	{
		printf("%d ", data[i]);
	}
	return 0;
}
```



# 简单选择排序
![](/images/yuque/5aef26221ff58dd91bb2d929124b4559.png)

![](/images/yuque/54221fdcc5b390ee30a9b50ddc5afa8a.png)

![](/images/yuque/85da637013b2548332f8364f6824e8c5.png)

![](/images/yuque/80880705b14276486d3484c4fa96b1a8.png)

![](/images/yuque/066487caae67c88f5020ccb821d7b821.png)

![](/images/yuque/2bc7dbba879fe0617e29637eb5026d15.png)

![](/images/yuque/cf9a99caf829b9d86b5d7fe666ecec72.png)

![](/images/yuque/0f99d75f3b89ef96505ca1c11a3bbf30.png)

![](/images/yuque/f34d742e97ce50990bceb45c1057d7c3.png)

![](/images/yuque/ebc05481da35ad793b285f9220379217.png)

![](/images/yuque/6535caecf416b1aee955a06d6aa414a1.png)

![](/images/yuque/cb58c3cbdee6dcd8b9196e577ccbf4e5.png)

![](/images/yuque/b2cb8b31184696470d5a935a2183f986.png)

![](/images/yuque/7d8f32faafdbe7fc2e9e5f4b661fe8df.png)

![](/images/yuque/3a660713bd052451fbefd2f2bde69afe.png)

![](/images/yuque/d8f01fa34680e17fea2e297c88abd461.png)

![](/images/yuque/d3a815d099fbb36f9caeb63ee6175868.png)

![](/images/yuque/661ba199bd8bd9e5fb96627eefb91507.png)

![](/images/yuque/4c5fe4bf9e2ee6f6992bfce1b0a71aea.png)

![](/images/yuque/7561fab5d6386da8e4ba08fed912d2ca.png)

![](/images/yuque/7b5259d82c59b718f52d750087cc90d2.png)

![](/images/yuque/a5d9aa5f696401ed135f71d0d020b643.png)

![](/images/yuque/a509a9bf2eb778e2dcc26df8991df1ca.png)

![](/images/yuque/300ee48cfa291eaa87d81e73fa90a399.png)

![](/images/yuque/6ca7c4a672883a54f9fed29de1d4d74f.png)

![](/images/yuque/eb7b0b527d6e6f6b81c8d8760d069ff9.png)

![](/images/yuque/1cf011cc774a30fc76debf341c26d987.png)

![](/images/yuque/dd672e4d9b783ddde48beae7df8dd324.png)

![](/images/yuque/84ca977f8bc90c47fdf98aa4be573d7c.png)

![](/images/yuque/286a6ac5ea4031dada02ef91e3e06670.png)

![](/images/yuque/dcd04df3df7198afc9a885181535405c.png)

![](/images/yuque/a2d2c735d3f070df88291280312e9dfe.png)

![](/images/yuque/52c78b0433ee3624af5734fc1dff26d8.png)

![](/images/yuque/a45365c71a0f64ad2ff97aa6cefd48a1.png)

![](/images/yuque/85ac4faba82f5684e3da4b272883f41e.png)

![](/images/yuque/96e0a94dc81215624e63234e461d5bd7.png)

![](/images/yuque/7e6d00c8aa941fdb6953a1e8a319486d.png)

![](/images/yuque/fe74ce344299532901b4f43ddd3bcbb4.png)

![](/images/yuque/93002fc90b46a2fea2684c6cc73bd5c2.png)

![](/images/yuque/3f77dda989b5398a023e9648c45bf3e7.png)

![](/images/yuque/32b5a289125b597de45a43b074e3d57e.png)

![](/images/yuque/48e63330fb113170e088fb02d3e0c3f1.png)

![](/images/yuque/98ecc345c5708cef6026035ed7aeffa3.png)

![](/images/yuque/4d4e999d234160289a20a8ad2fdae16e.png)

![](/images/yuque/b2821f7e4aeced324e4a49478557880d.png)

![](/images/yuque/dbf0aca6f604070dcdd41a6d908e5b32.png)

![](/images/yuque/08c5f695d8eb555f2e776d1f7d0cf2a8.png)

![](/images/yuque/b7830d809ae5fe07a0ff4fc38694da9e.png)

![](/images/yuque/60dc6889e2deb761a4634f2ed0e0b804.png)

![](/images/yuque/9041d7e58397ca99f50f38352312ba3a.png)

![](/images/yuque/d6882406ba1ec5387e7bdb08f4cfefbe.png)

![](/images/yuque/7e62df790d5b1c4c0e7113172bda2203.png)

![](/images/yuque/5fd54b67e2d46784d60edf60bf8b71f2.png)

```c
#include <stdio.h>

// 交换数组中下标为 m 和 n 的两个元素
void swap(int* data, int m, int n)
{
	int temp = data[m];
	data[m] = data[n];
	data[n] = temp;
}

// 简单选择排序函数
void selectSort(int* data, int len)
{
	int min;
	// 外层循环：控制每一轮的起始位置
	for (int i = 0; i < len; i++)
	{
		// 假设当前位置 i 是最小值
		min = i;
		// 内层循环：从当前位置 i 向后寻找最小值的位置
		for (int j = i; j < len; j++)
		{
			// 如果发现比当前最小值还小的元素，更新最小值的位置
			if (data[min] > data[j])
			{
				min = j;
			}
		}
		// 如果找到的最小值不是当前位置，则进行交换
		if (i != min)
		{
			swap(data, i, min);
		}
	}
}

int main(int argc, char const *argv[])
{
	// 初始化数组
	int data[] = {47, 35, 60, 95, 77, 15, 28};
	// 计算数组长度
	int len = sizeof(data) / sizeof(data[0]);
	// 执行选择排序
	selectSort(data, len);
	// 输出排序后的结果
	for(int i = 0; i < len; i++)
	{
		printf("%d ", data[i]);
	}
	return 0;
}
```



