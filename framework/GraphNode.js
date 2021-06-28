module.exports = class GraphNode {
  constructor(value) {
    this.children = [];
    this.parents = [];
    this.value = value;
  }

  addChild(node) {
    node.parents.push(this);
    this.children.push(node);
  }
}
