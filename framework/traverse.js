module.exports = function traverse(node, depth, visitor) {
  visitor(node.value, depth);
  node.children.forEach((child) => {
    traverse(child, depth + 1, visitor);
  });
}
