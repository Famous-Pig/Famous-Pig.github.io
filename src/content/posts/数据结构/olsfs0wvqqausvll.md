---
title: C语言小知识
published: '2026-04-16 20:00:42'
updated: '2026-06-04 22:59:27'
description: 头文件头文件就是：告诉编译器有哪些函数、常量、结构体可以用。没有头文件，编译器不认识 printf、scanf
category: 数据结构
tags: ["数据结构"]
draft: false
---

# 头文件
**<font style="color:rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);">头文件就是：告诉编译器有哪些函数、常量、结构体可以用</font>**<font style="color:rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);">。</font>

<font style="color:rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);">没有头文件，编译器不认识 </font>`<font style="color:rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);">printf</font>`<font style="color:rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);">、</font>`<font style="color:rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);">scanf</font>`<font style="color:rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);">，会直接报错</font>

| <font style="color:rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);">头文件</font> | <font style="color:rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);">作用</font> |
| --- | --- |
| `<font style="color:rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);">stdio.h</font>` | <font style="color:rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);">输入输出：printf、scanf、getchar</font> |
| `<font style="color:rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);">stdlib.h</font>` | <font style="color:rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);">内存：malloc、free、rand</font> |
| `<font style="color:rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);">string.h</font>` | <font style="color:rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);">字符串：strlen、strcmp、strcpy</font> |
| `<font style="color:rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);">math.h</font>` | <font style="color:rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);">数学：sqrt、sin、cos</font> |




# C语言的输入输出
<font style="color:rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);"> 语言的输入输出，核心就靠 </font>**<font style="color:rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);">stdio.h</font>**<font style="color:rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);"> 里的两组函数：</font>

+ **<font style="color:rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);">输出</font>**<font style="color:rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);">：把内容打印到屏幕上（</font>`<font style="color:rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);">printf</font>`<font style="color:rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);">、</font>`<font style="color:rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);">putchar</font>`<font style="color:rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);">）</font>
+ **<font style="color:rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);">输入</font>**<font style="color:rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);">：从键盘读取内容（</font>`<font style="color:rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);">scanf</font>`<font style="color:rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);">、</font>`<font style="color:rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);">getchar</font>`<font style="color:rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);">）</font>

## <font style="color:rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);">最常用：printf 输出</font>
**<font style="color:rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);">1. 基本用法</font>**

```c
printf("要输出的内容");
```

**<font style="color:rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);">2. 输出变量（占位符）</font>**

<font style="color:rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);">常用占位符：</font>

+ `<font style="color:rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);">%d</font>`<font style="color:rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);">：整数（int）</font>
+ `<font style="color:rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);">%f</font>`<font style="color:rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);">：小数（float /double）</font>
+ `<font style="color:rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);">%c</font>`<font style="color:rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);">：单个字符</font>
+ `<font style="color:rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);">%s</font>`<font style="color:rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);">：字符串</font>

```c
int a = 10;
printf("a = %d\n", a);
```

`<font style="color:rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);">\n</font>`<font style="color:rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);"> 是换行。</font>

<font style="color:rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);"></font>

## <font style="color:rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);">最常用：scanf 输入</font>
<font style="color:rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);">从键盘读入数据，存到变量里。</font>

```c
scanf("占位符", &变量名);
```

<font style="color:rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);">注意：</font>**<font style="color:rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);">变量前面一定要加 & 符号</font>**<font style="color:rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);">（除了字符串）。</font>

**<font style="color:rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);">例子：输入一个整数</font>**

```c
int age;
scanf("%d", &age);
printf("你输入的年龄是：%d", age);
```

**<font style="color:rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);">输入多个数</font>**

```c
int a, b;
scanf("%d %d", &a, &b);
```

<font style="color:rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);">输入时用空格或回车分开。</font>

## <font style="color:rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);">单个字符输入输出</font>
**<font style="color:rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);">输出一个字符</font>**

```c
putchar('A');
```

**<font style="color:rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);">输入一个字符</font>**

```c
char ch;
ch = getchar();
```

