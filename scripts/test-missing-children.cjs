// Run from the repository root: node scripts/test-missing-children.cjs
const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const ts = require('typescript');

const testModule = { exports: {} };
const source = fs.readFileSync('src/utils/missing-children.ts', 'utf8');
const compiled = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS },
}).outputText;
vm.runInNewContext(compiled, { exports: testModule.exports, URL });
const { visibleCards, reviewTimestamp, isCurrentBatch, isOfficialUrl } = testModule.exports;
const batch = JSON.parse(fs.readFileSync('src/data/missing-children.json', 'utf8'));
const start = reviewTimestamp(batch.reviewedAt);
const end = reviewTimestamp(batch.nextReviewAt);

assert(isCurrentBatch(batch, start), 'Review dates must define a valid period of at most 32 days');
assert.equal(new Set(batch.cards.map(card => card.id)).size, batch.cards.length, 'Duplicate IDs');
const allowedFields = ['id', 'name', 'category', 'type', 'lostDate', 'region', 'sourceUrl', 'photoUrl', 'enabled'];
for (const card of batch.cards) {
    assert.deepEqual(Object.keys(card).sort(), [...allowedFields].sort(), 'Keep the minimal public fields');
    assert.equal(card.category, '家寻宝贝');
    assert.equal(typeof card.enabled, 'boolean');
    for (const field of allowedFields.filter(field => field !== 'enabled')) assert.equal(typeof card[field], 'string');
    assert(/^\d+$/.test(card.id));
    assert(Number.isFinite(reviewTimestamp(card.lostDate)));
    assert(isOfficialUrl(card.sourceUrl));
    assert(!card.photoUrl || isOfficialUrl(card.photoUrl));
}
const count = batch.cards.filter(card => card.enabled).length;
assert.equal(visibleCards(batch, start).length, count);
assert.equal(visibleCards(batch, end - 1).length, count);
for (const now of [start - 1, end, end + 1, NaN]) assert.equal(visibleCards(batch, now).length, 0);
for (const date of ['2026-02-30', '2026-13-01', 'invalid']) assert(Number.isNaN(reviewTimestamp(date)));
for (const nextReviewAt of [batch.reviewedAt, 'invalid']) assert(!isCurrentBatch({ ...batch, nextReviewAt }, start));
assert(!isCurrentBatch({ ...batch, nextReviewAt: '2099-01-01' }, start));
if (batch.cards.length) {
    const card = batch.cards[0];
    assert.equal(visibleCards({ ...batch, cards: [{ ...card, enabled: false }] }, start).length, 0);
    assert.equal(visibleCards({ ...batch, cards: [{ ...card, sourceUrl: 'https://example.com/' }] }, start).length, 0);
}
for (const url of ['javascript:alert(1)', 'https://baobeihuijia.com.evil.example/', 'https://user:pass@baobeihuijia.com/', 'http://baobeihuijia.com/']) {
    assert(!isOfficialUrl(url));
}
console.log(`PASS: ${batch.cards.length} records; official links, minimal fields, review boundaries, expiry and disabled records.`);
