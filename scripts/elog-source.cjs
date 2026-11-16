const { createHash } = require('node:crypto');

function getCategory(value = '数据结构') {
  const category = value.trim();
  if (!category || category.length > 100 || /[<>:"/\\|?*\x00-\x1f]/.test(category)
    || /[. ]$/.test(category) || /^\.+$/.test(category)
    || /^(con|prn|aux|nul|com[1-9]|lpt[1-9])(?:\.|$)/i.test(category)) {
    throw new Error('分类名必须是有效的单个文件夹名称，例如“数据结构”或“操作系统”。');
  }
  return category;
}

function getSource(env) {
  const category = getCategory(env.YUQUE_CATEGORY);
  const host = (env.YUQUE_HOST || 'https://www.yuque.com').replace(/\/+$/, '');
  const login = env.YUQUE_LOGIN?.trim();
  const repo = env.YUQUE_REPO?.trim();
  if (!login || !repo) throw new Error('请填写 YUQUE_LOGIN 和 YUQUE_REPO，或使用 --login、--repo 指定知识库。');
  if ([login, repo].some(value => /[/\\?#]/.test(value))) {
    throw new Error('login、repo 请填写知识库地址中的路径名，不要填写完整网址。');
  }
  const key = createHash('sha256').update(JSON.stringify([host, login, repo, category])).digest('hex').slice(0, 24);
  return { category, host, login, repo, outputDir: `./src/content/posts/${category}`, cachePath: `.elog-cache/${key}.json` };
}

function assertCategoryOwner(sources, source) {
  const owner = sources.find(item => item.category.toLowerCase() === source.category.toLowerCase());
  if (owner && (owner.host !== source.host || owner.login !== source.login || owner.repo !== source.repo)) {
    throw new Error(`分类“${source.category}”已属于另一个知识库，请用 --category 指定新的分类名。`);
  }
}

module.exports = { getCategory, getSource, assertCategoryOwner };
