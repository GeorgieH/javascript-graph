module.exports = function readPages(pages, cb) {
  for (let i = 0; i < pages.length; i++) {
    const page = pages[i];
    const [type, definition] = Object.entries(page)[0];
    const current = { type, definition, index: i };
    if (cb(current)) {
      return true;
    }
  }
  return false;
}
