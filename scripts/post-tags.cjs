// Keep imported study notes discoverable through the blog's tag filters.
function getPostTags(category, title, tags = []) {
  const result = Array.isArray(tags)
    ? tags.map(String).map(tag => tag.trim()).filter(Boolean)
    : String(tags || '').split(',').map(tag => tag.trim()).filter(Boolean);
  if (category === '数据结构') {
    result.push('数据结构');
    if (/算法|排序|查找|匹配|递归|复杂度|遍历|最小生成树|关键路径|表达式求值/.test(title)) {
      result.push('算法');
    }
  }
  return [...new Set(result)];
}

module.exports = { getPostTags };
