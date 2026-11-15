# 寻亲项目：每月维护清单

数据文件：`src/data/missing-children.json`。
项目说明：`src/content/projects/missing-children-home/details.md`。
页面：`/projects/missing-children-home/`。

1. 逐条打开 `sourceUrl`，核对原帖，不将网页可访问等同于仍在寻找。
2. 移除不宜继续展示的记录，或将其 `enabled` 改为 `false`。
3. 核对 `name`、`id`、`type`、`lostDate`、`region` 及 `photoUrl`，只使用官方 HTTPS 链接。地区保留到市县，不填详细住址。不加入家属电话、身份证或线索数据。
4. 全部保留条目核对完成后，将 `reviewedAt` 改为实际核对日期（如 `2026-12-15`），将 `nextReviewAt` 改为下月复核日期（如 `2027-01-15`），两者间隔不超过 32 天。
5. 当月没有时间核对时，不修改日期。浏览器将于北京时间截止日 00:00 隐藏卡片并提示访问官网；页面打开期间每分钟及恢复焦点时重新检查。禁用 JavaScript 时默认不展示。
6. 运行 `node scripts/test-missing-children.cjs` 检查资料格式与截止规则，再检查明暗主题、官方链接和图片回退提示；完成后提交推送。

本方案没有自动抓取、自动核实或月度提醒任务。卡片默认不在服务器输出和站内搜索中索引；到期隐藏是页面展示控制，并不代表数据已从 Git 历史、浏览器缓存或旧部署中彻底删除。

首批字段于 2026-11-15 从官方公开原帖整理，各条 `sourceUrl` 即资料出处。图片使用官方远程地址，不在仓库备份照片；可用性及继续展示的适当性应在每次复核时重新确认。
