module.exports = class TreeNode {
  constructor(value) {
    this.children = [];
    this.parent = null;
    this.value = value;
  }

  addChild(node) {
    node.parent = this;
    this.children.push(node);
  }
}
