---
title: 字符串匹配
published: '2026-04-20 13:45:24'
updated: '2026-06-09 14:22:20'
description: 字符串匹配-朴素匹配朴素匹配的时间复杂度： O((n-m+1) * m)
category: 数据结构
tags: []
draft: false
cover: /images/yuque/92390f1883e884bf245ef3a1e5f63ec2.png
---

# 字符串匹配-朴素匹配
朴素匹配的时间复杂度： O((n-m+1) * m) 

![](/images/yuque/92390f1883e884bf245ef3a1e5f63ec2.png)

![](/images/yuque/6bbf2286bcdf39dffaabf51af953d72b.png)

![](/images/yuque/28424b52e76bc4a5d52de29f9e20820c.png)![](/images/yuque/a6765767e88645fb3a72cd9452d81498.png)

![](/images/yuque/d118891144c5aa0007943c84bf6d3908.png)

![](/images/yuque/59488f431a2e57d098b58e3be168b5ea.png)

![](/images/yuque/444389430f3d4d829800936082f9ac68.png)

![](/images/yuque/55362b895fe951668e232f24af29481b.png)

![](/images/yuque/23c5a6d3d106991d49f683cd8ad10a74.png)

![](/images/yuque/bc9525ba8293a7efb5e52a6a698efdc6.png)

![](/images/yuque/dd9613c1e1b6dc9b04d3338dfc7439c7.png)![](/images/yuque/2cd353b7a049ff94ce01fe956fea6717.png)

![](/images/yuque/2cb845a6ce7704064943379153ce2745.png)

```c
#include <stdio.h>
#include <string.h>
int strMatch(char* str, char* pattern)
{
	int n = strlen(str);
	int m = strlen(pattern);

	for (int i = 0; i <= (n - m); i++)
	{
		
		int j = 0;
		while(j < m)
		{
			if (str[i] == pattern[j])
			{
				i++;
				j++;
			}
			else
			{
				i = i - j;
				break;
			}
		}
		if (j == m)
		{
			return i - j;
		}
	}
	return -1;
}
int main(int argc, char const *argv[])
{
	char* str = "abcabaabcabc";
	char* pattern = "abaa";
	int pos = strMatch(str, pattern);
	printf("%d\n", pos);
	return 0;
}
```



# 字符串匹配-KMP匹配
（Donald Ervin Knuth——James Hiram Morris——Vaughan Pratt）

## 基于模式串确定 next 数组
![](/images/yuque/6edde3de69d19325696398b0cb0bf925.png)

![](/images/yuque/6dccb8de2b3e371d5ac0a3102b8ea740.png)

![](/images/yuque/68e8f02ec2b66f816307bd64c483d70a.png)

![](/images/yuque/450df798ae154596b2055f8f479cc83e.png)

![](/images/yuque/5e8e561ea351457a5e753ae0c2b51cb6.png)

![](/images/yuque/922c892dfa88f4d4e09753f1de885050.png)

![](/images/yuque/52216f92eb87ec91f715a3abd966f542.png)

![](/images/yuque/2e55cd5a9f006d1eada3910e432853b8.png)

## 利用 next 数组完成字符串匹配，在匹配过程中，发生字符不匹配情况时，next 数组用来帮助确定下一次的匹配位置
比如：在图中模式串下标为5的位置与字符串不匹配，在next数组中找到下标为5存储的值，为2，将模式串下标为2的位置移动到与字符串不匹配的位置，继续进行匹配



![](/images/yuque/f0225af3daacc0c494c91ef30b4a9d36.png)

![](/images/yuque/c345c68c53e718289bd689320cbbd5e1.png)

![](/images/yuque/311bbd0b682b4e5d2036e38d73c23867.png)

![](/images/yuque/dd5336914529d2481d197f90c92afbb2.png)

```c
#include <stdio.h>
#include <string.h>

void getNext(char* pattern, int* next)
{
	int m = strlen(pattern);
	int i = 0;
	int j = -1;
	next[0] = -1;
	while(i < m)
	{
		if (j == -1 ||pattern[i] == pattern[j])
		{
			i++;
			j++;
			next[i] = j;
		}
		else
		{
			j = next[j];
		}
	}
}

int kmp(char* str, char* pattern)
{
	int i = 0;
	int j = 0;
	int next[100];
	getNext(pattern, next);
	int n = strlen(str);
	int m = strlen(pattern);

	while(i < n && j < m)
	{
		if (j == -1 || str[i] == pattern[j])
		{
			i++;
			j++;
		}
		else
		{
			j = next[j];
		}
	}

	if (j == m)
	{
		return i - j;
	}
	else
	{
		return -1;
	}
}

int main(int argc, char const *argv[])
{
	char* str = "abaabaabacacaabaabcc";
	char* pattern = "abaabc";
	printf("%d\n", kmp(str, pattern));
	return 0;
}
```



# 真题解析
![](/images/yuque/1e0daf9dd40c23b9380fc4775669bba2.png)

![](/images/yuque/7ab6f8320a11a984dd8ffde0358a9f95.png)



