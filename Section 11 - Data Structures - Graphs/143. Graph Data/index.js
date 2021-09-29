//     2 -----0
//    / \
//   1---3

// Edge List
const graph = [[0, 2], [2, 3], [2, 1], [1, 3]];

// Adjacent List
const graph = [[2], [2, 3], [0, 1, 3], [1, 2]];

// Adjacent Matrix

// Node x has a connection to Node y? 0 means NO and 1 means YES

const graph = [
  [0, 0, 1, 0],
  [0, 0, 1, 1],
  [1, 1, 0, 1],
  [0, 1, 1, 0]
];

// obj implementation
const graph = {
  0: [0, 0, 1, 0],
  1: [0, 0, 1, 1],
  2: [1, 1, 0, 1],
  3: [0, 1, 1, 0]
};
