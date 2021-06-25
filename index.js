const createTree = require('./framework/create-tree');
const traverse = require('./framework/traverse');
const TreeNode = require('./framework/TreeNode');

// const specification = require('./specifications/non-convergent-conditional.json');
// const specification = require('./specifications/convergent-conditional.json');
// const specification = require('./specifications/non-convergent-conditional-task-list.json');
// const specification = require('./specifications/non-convergent-conditional-circular-task-list.json');
// const specification = require('./specifications/non-convergent-conditional-nested.json');
const specification = require('./specifications/convergent-conditional-nested.json');
// const specification = require('./specifications/convergent-conditional-task-list.json');
// const specification = require('./specifications/linear.json');

const entry = specification.pages[0];
const [type, definition] = Object.entries(entry)[0];
const root = new TreeNode({ type, definition, index: 0 });

createTree(specification, root);

traverse(root, 0, (page, depth) => {
  let prefix = '';
  for (let i = 0; i < depth; i++) {
    prefix += '--'
  }
  console.log(`${prefix}${page.definition.unique_reference}`);
});
