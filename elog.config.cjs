const path = require('node:path');

const auth = process.env.YUQUE_AUTH || 'token';
if (!['token', 'password'].includes(auth)) {
  throw new Error('YUQUE_AUTH 必须是 token 或 password。请编辑 .elog.env。');
}
const required = ['YUQUE_LOGIN', 'YUQUE_REPO', ...(auth === 'token'
  ? ['YUQUE_TOKEN'] : ['YUQUE_USERNAME', 'YUQUE_PASSWORD'])];
const missing = required.filter((key) => !process.env[key]?.trim());
if (missing.length) {
  throw new Error(`请先在 .elog.env 填写：${missing.join(', ')}。详见 docs/yuque-sync.md。`);
}
const host = (process.env.YUQUE_HOST || 'https://www.yuque.com').replace(/\/+$/, '');
const common = {
  login: process.env.YUQUE_LOGIN,
  repo: process.env.YUQUE_REPO,
  onlyPublic: process.env.YUQUE_ONLY_PUBLIC !== 'false',
  onlyPublished: true,
  limit: 2,
};

module.exports = {
  write: {
    platform: auth === 'token' ? 'yuque' : 'yuque-pwd',
    yuque: { ...common, token: process.env.YUQUE_TOKEN, baseUrl: `${host}/api/v2` },
    'yuque-pwd': {
      ...common,
      username: process.env.YUQUE_USERNAME,
      password: process.env.YUQUE_PASSWORD,
      host,
      linebreak: false,
      latexCode: true,
    },
  },
  deploy: {
    platform: 'local',
    local: {
      outputDir: './src/content/posts/数据结构',
      filename: 'urlname',
      format: 'markdown',
      formatExt: path.join(__dirname, 'scripts/elog-astro.cjs'),
      catalog: false,
    },
  },
  image: {
    enable: true,
    platform: 'local',
    limit: 2,
    local: {
      outputDir: './public/images/yuque',
      prefixKey: '/images/yuque',
      pathFollowDoc: false,
    },
  },
};
