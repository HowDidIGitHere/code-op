const tagNamesByCategory = require('.');

module.exports = function findTagNameCategory(tagName) {
  for (const tagCategory in tagNamesByCategory)
    if (tagNamesByCategory[tagCategory].includes(tagName))
      return tagCategory;
}