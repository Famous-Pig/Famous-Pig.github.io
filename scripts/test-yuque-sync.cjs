const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { spawnSync } = require('node:child_process');
const yaml = require('js-yaml');
const { getSource, getCategory, assertCategoryOwner } = require('./elog-source.cjs');

test('知识库的缓存隔离，分类不能被其他知识库占用', () => {
  const env = { YUQUE_LOGIN: 'fixture', YUQUE_REPO: 'structures' };
  const original = getSource(env);
  assert.equal(original.outputDir, './src/content/posts/数据结构');
  assert.equal(original.cachePath, getSource({ ...env, YUQUE_TOKEN: 'changed-token' }).cachePath);
  for (const change of [{ YUQUE_REPO: 'os' }, { YUQUE_LOGIN: 'team' },
    { YUQUE_CATEGORY: '操作系统' }, { YUQUE_HOST: 'https://team.yuque.com' }]) {
    assert.notEqual(getSource({ ...env, ...change }).cachePath, original.cachePath);
  }
  assert.doesNotThrow(() => assertCategoryOwner([original], original));
  assert.throws(() => assertCategoryOwner([original], getSource({ ...env, YUQUE_REPO: 'other' })), /已属于另一个知识库/);
  for (const category of ['../覆盖', '..', 'a/b', 'a\\b', 'CON', '末尾.']) {
    assert.throws(() => getCategory(category), /分类名必须/);
  }
});

test('导入分类和 Front Matter 一致，保留正文和 Elog 文件标识', async () => {
  const previous = process.env.YUQUE_CATEGORY;
  try {
    process.env.YUQUE_CATEGORY = '操作系统';
    const body = '![图片](/images/yuque/example.png)\n\n```c\nint x;\n```';
    const doc = await require('./elog-astro.cjs').format({ properties: {
      urlname: 'stable-slug', title: '进程', date: '2026-11-16', category: '语雀文首的其他分类',
    }, body });
    assert.equal(yaml.load(doc.body.split('---\n')[1]).category, '操作系统');
    assert.ok(doc.body.endsWith(body));
    assert.equal(doc.properties.urlname, 'stable-slug');
    delete process.env.YUQUE_CATEGORY;
    const defaultDoc = await require('./elog-astro.cjs').format({ properties: { title: '链表', date: '2026-11-16' }, body });
    assert.equal(yaml.load(defaultDoc.body.split('---\n')[1]).category, '数据结构');
  } finally {
    if (previous === undefined) delete process.env.YUQUE_CATEGORY;
    else process.env.YUQUE_CATEGORY = previous;
  }
});

test('CLI 覆盖环境文件知识库，dry-run 不写文件或泄露凭据，切换时必须指定分类', () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'yuque-sync-test-'));
  const envFile = path.join(dir, '.elog-test.env');
  const secret = 'fixture-secret-must-not-be-printed';
  fs.writeFileSync(envFile, `YUQUE_AUTH=token\nYUQUE_LOGIN=fixture\nYUQUE_REPO=old-book\nYUQUE_CATEGORY=旧分类\nYUQUE_TOKEN=${secret}\n`);
  const source = getSource({ YUQUE_LOGIN: 'fixture', YUQUE_REPO: 'new-book', YUQUE_CATEGORY: '导入测试分类' });
  const before = [fs.existsSync(source.outputDir), fs.existsSync(source.cachePath)];
  try {
    const run = (...args) => spawnSync(process.execPath, [path.join(__dirname, 'sync-yuque.cjs'),
      '--env', envFile, '--dry-run', ...args], { encoding: 'utf8' });
    const result = run('--repo', 'new-book', '--category', '导入测试分类');
    assert.equal(result.status, 0, result.stderr);
    assert.match(result.stdout, /分类：导入测试分类/);
    assert.match(result.stdout, /未连接语雀或修改文章/);
    assert.ok(!result.stdout.includes(secret) && !result.stderr.includes(secret));
    assert.deepEqual([fs.existsSync(source.outputDir), fs.existsSync(source.cachePath)], before);
    const rejected = run('--repo', 'new-book');
    assert.equal(rejected.status, 1);
    assert.match(rejected.stderr, /同时使用 --category/);
  } finally {
    fs.unlinkSync(envFile);
    fs.rmdirSync(dir);
  }
});
