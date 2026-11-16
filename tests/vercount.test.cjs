const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const ts = require('typescript');

const source = ts.transpileModule(
    fs.readFileSync('src/plugins/vercount.ts', 'utf8'),
    { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } },
).outputText;

function fixture() {
    const requests = [];
    const events = new Map();
    const hooks = new Map();
    const nodes = ['site_pv', 'site_uv', 'page_pv'].map(metric => ({
        dataset: { vercountMetric: metric }, textContent: '—',
    }));
    const container = { dataset: { i18nError: '统计不可用' }, removeAttribute() { delete this.title; } };
    let cookie = '';
    const context = {
        exports: {}, URL, AbortController, setTimeout, clearTimeout,
        console: { warn() {} },
        location: new URL('https://example.test/'),
        window: { swup: { hooks: { on: (name, fn) => hooks.set(name, fn) } } },
        document: {
            get cookie() { return cookie; },
            set cookie(value) { cookie = value.split(';')[0]; },
            getElementById: () => ({ dataset: { apiUrl: 'https://counter.test/log' } }),
            querySelectorAll: selector => selector === '[data-vercount-metric]' ? nodes : [container],
            addEventListener: (name, fn) => events.set(name, fn),
        },
        fetch: (url, options) => new Promise(resolve => requests.push({
            url, body: JSON.parse(options.body),
            reply: (data, status = 200) => resolve({ ok: status === 200, status, json: async () => data }),
        })),
    };
    vm.runInNewContext(source, context);
    const navigate = url => { context.location = new URL(url, context.location); return hooks.get('page:view')(); };
    return { context, requests, events, nodes, container, navigate };
}
const flush = () => new Promise(resolve => setImmediate(resolve));
const result = (page = 3) => ({ status: 'success', data: { site_pv: 100, site_uv: 20, page_pv: page } });

test('one count per navigation despite duplicate initialization and lifecycle events', async () => {
    const f = fixture();
    f.context.exports.initVercount();
    f.context.exports.initVercount();
    f.events.get('astro:page-load')();
    f.navigate('/#heading');
    assert.equal(f.requests.length, 1);
    assert.equal(f.requests[0].body.isNewUv, true);
    f.requests[0].reply(result());
    await flush();
    assert.deepEqual(f.nodes.map(node => node.textContent), ['100', '20', '3']);
    const next = f.navigate('/posts/article/');
    f.events.get('astro:page-load')();
    assert.equal(f.requests.length, 2);
    assert.equal(f.requests[1].body.isNewUv, false);
    f.requests[1].reply(result(9));
    await next;
    assert.equal(f.nodes[2].textContent, '9');
    const back = f.navigate('/');
    assert.equal(f.requests.length, 3);
    f.requests[2].reply(result());
    await back;
});

test('slow previous-page responses cannot overwrite the current article counter', async () => {
    const f = fixture();
    f.context.exports.initVercount();
    const next = f.navigate('/posts/new/');
    f.requests[1].reply(result(7));
    await next;
    f.requests[0].reply(result(999));
    await flush();
    assert.equal(f.nodes[2].textContent, '7');
});

test('service errors and malformed payloads leave unavailable counters instead of fabricated zeroes', async () => {
    const f = fixture();
    f.context.exports.initVercount();
    f.requests[0].reply({ error: 'offline' }, 503);
    await flush();
    assert.equal(f.container.title, '统计不可用');
    assert.ok(f.nodes.every(node => node.textContent === '—'));
    const next = f.navigate('/posts/new/');
    f.requests[1].reply({ status: 'success', data: { site_pv: 12 } });
    await next;
    assert.ok(f.nodes.every(node => node.textContent === '—'));
});
