const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const ts = require('typescript');

const source = ts.transpileModule(fs.readFileSync('src/plugins/comments.ts', 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
}).outputText;
const flush = () => new Promise(resolve => setImmediate(resolve));
function element(path) {
    return {
        isConnected: true, textContent: '',
        dataset: {
            twikooConfig: JSON.stringify({ envId: 'https://comments.test/api', path }),
            twikooScript: '/assets/js/twikoo-2.0.17.min.js',
        },
    };
}
function fixture() {
    const calls = [], scripts = [], events = new Map(), hooks = new Map();
    let current = element('/posts/first/');
    const context = {
        exports: {}, URL, location: new URL('https://blog.test/'),
        console: { error() {} },
        window: {
            twikoo: { init: async config => { calls.push(config); config.el.textContent = ''; } },
            swup: { hooks: { on: (name, fn) => hooks.set(name, fn) } },
        },
        document: {
            getElementById: () => current,
            createElement: () => ({ remove() {} }),
            head: { appendChild: script => scripts.push(script) },
            addEventListener: (name, fn) => events.set(name, fn),
        },
    };
    vm.runInNewContext(source, context);
    return {
        context, calls, scripts, events, hooks,
        get current() { return current; },
        replace(path) { current.isConnected = false; current = element(path); },
    };
}

test('repeated lifecycle events preserve the mounted comment form and draft', async () => {
    const f = fixture();
    f.context.exports.initComments();
    await flush();
    f.scripts[0].onload();
    await flush();
    f.current.textContent = 'unfinished draft';
    f.events.get('twilight:page:loaded')();
    f.events.get('astro:page-load')();
    f.hooks.get('page:view')();
    f.context.exports.initComments();
    await flush();
    assert.equal(f.calls.length, 1);
    assert.equal(f.current.textContent, 'unfinished draft');
    assert.equal(f.calls[0].path, '/posts/first');
});

test('a new article uses its own path and reuses the already-loaded client', async () => {
    const f = fixture();
    f.context.exports.initComments();
    await flush();
    f.scripts[0].onload();
    await flush();
    f.replace('/posts/第二篇/');
    f.hooks.get('page:view')();
    f.events.get('twilight:page:loaded')();
    await flush();
    assert.equal(f.scripts.length, 1);
    assert.equal(f.calls.length, 2);
    assert.equal(f.calls[1].el, f.current);
    assert.equal(f.calls[1].path, '/posts/%E7%AC%AC%E4%BA%8C%E7%AF%87');
});

test('navigation during script loading skips the detached article', async () => {
    const f = fixture();
    f.context.exports.initComments();
    await flush();
    f.replace('/posts/new/');
    f.hooks.get('page:view')();
    f.scripts[0].onload();
    await flush();
    assert.equal(f.calls.length, 1);
    assert.equal(f.calls[0].path, '/posts/new');
    assert.equal(f.calls[0].el, f.current);
});
