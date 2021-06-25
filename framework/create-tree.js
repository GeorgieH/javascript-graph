const findPage = require('./find-page');
const TreeNode = require('./TreeNode');

function getTaskList(page) {
  const { main_content } = page.definition;
  if (main_content) {
    for (let component of main_content) {
      const [type, definition] = Object.entries(component)[0];
      if (type === 'task_list') {
        return { type, definition };
      }
    }
  }
  return null;
}

module.exports = function createTree(specification, node) {
  function addNode(node, ref) {
    const p = findPage(specification, ref);
    const n = new TreeNode(p);
    node.addChild(n);
    createTree(specification, n);
  }
  const page = node.value;
  const taskList = getTaskList(page);
  if (taskList) {
    taskList.definition.task_linked_page_refs.forEach((ref) => {
      addNode(node, ref);
    });
  }
  const { next_page } = page.definition;
  if (next_page) {
    if (typeof next_page === 'string') {
      addNode(node, next_page);
    } else {
      Object.values(next_page).forEach((ref) => {
        addNode(node, ref);
      });
    }
  }
}
