const createGraph = require('./framework/create-graph');
const traverse = require('./framework/traverse');
const GraphNode = require('./framework/GraphNode');

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
const root = new GraphNode({ type, definition, index: 0 });

createGraph(specification, root);

traverse(root, 0, (page, depth) => {
  let prefix = '';
  for (let i = 0; i < depth; i++) {
    prefix += '--'
  }
  console.log(`${prefix}${page.definition.unique_reference}`);
});
