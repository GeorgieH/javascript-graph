const readPages = require('./read-pages');

module.exports = function findPage(specification, ref) {
  let page;
  readPages(specification.pages, (p) => {
    if (p.definition.unique_reference === ref) {
      page = p;
      return true;
    }
    return false;
  });
  return page;
}
