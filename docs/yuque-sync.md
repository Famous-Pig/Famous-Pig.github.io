# 语雀同步到博客

本项目已安装 `@elog/cli@0.14.7`，支持将语雀文章转换成 Astro 文章，并自动下载正文图片和封面。

## 1. 填写本地账号信息

打开项目根目录 `.elog.env`（如果不存在，将 `.elog.env.example` 复制为 `.elog.env`）。此文件已被 Git 忽略，密码和 Token 只填写在电脑上的此文件中。

以个人知识库文章地址为例：

```text
https://www.yuque.com/zhangsan/blog/abc123
                      ↑        ↑
                 YUQUE_LOGIN  YUQUE_REPO
```

请使用知识库完整地址，不要使用 `yuque.com/g/...` 分享短链接。

**已有 Token 或可以创建 Token：**

在语雀「账户设置 → Token」创建具有知识库、文档读取权限的 Token，然后填写：

```dotenv
YUQUE_AUTH=token
YUQUE_LOGIN=zhangsan
YUQUE_REPO=blog
YUQUE_TOKEN=填写你自己的Token
```

**没有 Token：**

按 Elog 官方说明，账号密码方式可用于本地同步，无需语雀会员。在语雀设置中绑定登录密码，然后填写：

```dotenv
YUQUE_AUTH=password
YUQUE_LOGIN=zhangsan
YUQUE_REPO=blog
YUQUE_USERNAME=填写登录账号或手机号
YUQUE_PASSWORD="填写登录密码"
```

密码建议使用引号包裹，以保留 `#` 等字符；如果密码包含双引号，可改用单引号。登录如遇验证码或平台风控，需要按错误信息处理，不能保证账号密码方式始终可用。

团队/空间知识库请将 `YUQUE_HOST` 改为实际空间域名，并使用知识库 URL 中对应的 login 和 repo。

默认 `YUQUE_ONLY_PUBLIC=true`：只拉取公开且已发布的文档。建议专门建立博客知识库；如果需要从私有知识库发布文章，可明确将其设为 `false`，该知识库中已发布的文档将进入博客。

## 2. 先准备一篇测试文章

在选定知识库中发布一篇普通文档，包含文字、代码和图片即可。首次无需手写文章元数据：标题取语雀标题，发布日期取语雀创建日期，分类统一为「数据结构」。同步适配器固定此分类，语雀文首的 category 不会覆盖它。

如需自定义，请在文章最开头添加 YAML Front Matter（普通文本，不要放进代码块）：

```yaml
---
published: 2026-11-16
description: 这篇文章的简短介绍
tags: [C语言, 学习笔记]
draft: false
---
```

`draft: true` 可隐藏博客中的文章。日后编辑以语雀为准，本地生成文章的修改可能被下次同步覆盖。

## 3. 同步并预览

在 PowerShell 中运行：

```powershell
cd D:\paper\github_page\Famous-Pig.github.io
pnpm run sync:local
pnpm run dev
```

打开终端显示的本地网址，检查文章和图片。同步会读取整个指定知识库中符合筛选条件的文章。

- 文章：`src/content/posts/数据结构/<语雀文章路径名>.md`
- 图片：`public/images/yuque/`
- 正文图片地址：`/images/yuque/...`
- 缓存：`elog.cache.json`，保存在本地，用于增量同步。

修改过同步配置或需要重新生成全部文章时，执行 `pnpm run sync:full`。请勿随意运行 `elog clean`，该命令会清理生成内容。

文章撤回、转私有或在语雀删除后，请检查并手动移除博客中已生成的对应 Markdown，不能把“以后不再拉取”当成“自动从博客下架”。语雀画板、思维导图等特殊内容应先转换成图片再插入普通文档。

## 4. 发布

预览确认后，按现有 Git 流程提交并推送本次变更，包含生成的 Markdown 和图片。当前 GitHub Pages 工作流在推送到 `main` 后构建并部署。

本次配置采用本地手动同步；日后在语雀修改文章后，重新执行同步、预览和推送即可。不会因为只修改语雀内容就立即更新博客。

## 其他电脑安装

安装 Node.js 和 pnpm 后，在博客目录执行 `pnpm install --frozen-lockfile`，再复制环境变量示例并填写自己的账号信息。无需全局安装 Elog，也无需再次运行 `elog init`。

## 参考

- [Elog 写作平台配置](https://elog.1874.cool/notion/write-platform)
- [语雀 login、repo 和 Token 获取](https://elog.1874.cool/notion/gvnxobqogetukays)
- [本地输出和自定义适配器](https://elog.1874.cool/notion/deploy-platform)
