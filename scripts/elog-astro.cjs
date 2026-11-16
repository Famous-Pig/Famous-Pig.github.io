const yaml = require('js-yaml');

// Elog has already extracted Yuque Front Matter and replaced body image URLs.
async function format(doc, imageClient) {
  const p = doc.properties;
  const published = p.published || p.date;
  if (!published || Number.isNaN(new Date(published).getTime())) {
    throw new Error(`语雀文章「${p.title}」缺少有效发布日期，请在文首添加 published: YYYY-MM-DD。`);
  }
  const properties = {
    title: p.title,
    published,
    ...(p.updated ? { updated: p.updated } : {}),
    description: p.description || '',
    category: '数据结构',
    tags: p.tags || [],
    draft: p.draft ?? false,
  };
  for (const key of ['cover', 'coverInContent', 'lang', 'pinned', 'author',
    'sourceLink', 'licenseName', 'licenseUrl', 'comment', 'routeName']) {
    if (p[key] !== undefined) properties[key] = p[key];
  }
  if (imageClient && /^https?:\/\//i.test(properties.cover || '')) {
    properties.cover = await imageClient.uploadImageFromUrl(properties.cover, doc);
  }
  // Emit the schema fields only, so internal Elog fields stay out of articles.
  // Retain Elog's urlname and other bookkeeping properties for file naming/cache.
  doc.body = `---\n${yaml.dump(properties, { lineWidth: -1, noRefs: true })}---\n\n${doc.body}`;
  return doc;
}

module.exports = { format };
