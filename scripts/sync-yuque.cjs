const fs = require('node:fs');
const path = require('node:path');
const { createRequire } = require('node:module');
const { parseArgs } = require('node:util');
const { spawnSync } = require('node:child_process');
const { getSource, assertCategoryOwner } = require('./elog-source.cjs');

function main() {
  const args = process.argv.slice(2).filter(arg => arg !== '--');
  const { values } = parseArgs({ args, options: {
    category: { type: 'string' }, repo: { type: 'string' }, login: { type: 'string' },
    env: { type: 'string', default: '.elog.env' }, full: { type: 'boolean' },
    'dry-run': { type: 'boolean' }, help: { type: 'boolean' },
  } });
  if (values.help) {
    console.log('用法：pnpm run sync:local --category "操作系统" --repo 知识库路径\n'
      + '可选：--login 个人/团队路径、--env .elog-other.env、--dry-run（只检查）、--full（全量同步）\n'
      + '不传参数时使用 .elog.env 中的知识库，分类默认“数据结构”。');
    return;
  }
  const root = path.resolve(__dirname, '..');
  process.chdir(root);
  const cliMain = require.resolve('@elog/cli');
  const cliRequire = createRequire(cliMain);
  if (!fs.existsSync(values.env)) throw new Error(`找不到 ${values.env}，请先复制 .elog.env.example 并填写。`);
  // Parse without printing credentials. CLI overrides take precedence over this file.
  const env = { ...process.env, ...cliRequire('dotenv').parse(fs.readFileSync(values.env)) };
  if (((values.repo !== undefined && values.repo !== env.YUQUE_REPO)
    || (values.login !== undefined && values.login !== env.YUQUE_LOGIN)) && values.category === undefined) {
    throw new Error('切换知识库时，请同时使用 --category 指定它的独立分类。');
  }
  for (const [option, variable] of [['category', 'YUQUE_CATEGORY'], ['repo', 'YUQUE_REPO'], ['login', 'YUQUE_LOGIN']]) {
    if (values[option] !== undefined) env[variable] = values[option];
  }
  const source = getSource(env);
  env.YUQUE_CATEGORY = source.category;
  env.YUQUE_LOGIN = source.login;
  env.YUQUE_REPO = source.repo;
  env.YUQUE_HOST = source.host;
  // Validate Elog config in this process so incomplete credentials return a failure code.
  Object.assign(process.env, env);
  require('../elog.config.cjs');
  const registryPath = '.elog-cache/sources.json';
  const sources = fs.existsSync(registryPath) ? JSON.parse(fs.readFileSync(registryPath, 'utf8')) : [];
  assertCategoryOwner(sources, source);
  console.log(`分类：${source.category}\n文章目录：${source.outputDir}\n独立缓存：${source.cachePath}`);
  if (values['dry-run']) {
    console.log('配置检查通过，未连接语雀或修改文章。');
    return;
  }
  fs.mkdirSync(path.dirname(source.cachePath), { recursive: true });
  const cli = path.resolve(path.dirname(cliMain), '../bin/elog.js');
  const result = spawnSync(process.execPath, [cli, 'sync', '-c', 'elog.config.cjs', '-a', source.cachePath,
    ...(values.full ? ['--disable-cache'] : [])], { cwd: root, env, stdio: 'inherit' });
  if (result.error) throw result.error;
  process.exitCode = result.status ?? 1;
  if (result.status === 0 && fs.existsSync(source.outputDir)
    && fs.readdirSync(source.outputDir).some(name => name.endsWith('.md'))
    && !sources.some(item => item.category.toLowerCase() === source.category.toLowerCase())) {
    const { category, host, login, repo } = source;
    sources.push({ category, host, login, repo });
    fs.writeFileSync(registryPath, JSON.stringify(sources, null, 2) + '\n');
  }
}

try { main(); } catch (error) {
  console.error(error.message);
  process.exitCode = 1;
}
