/*

Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.

*/

//    1
//   /\
//   2 3
//     /\
//    4  5

// expected output [1,2,3,null,null,4,5,null, null]



class Node {
  constructor(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const fourth = new Node(4, null, null);
const fifth = new Node(5, null, null);
const third = new Node(3, fourth, fifth);
const second = new Node(2, null, null);
const first = new Node(1, second, third);

// console.log(first, second, third, fourth, fifth)

const getValue = node => (node && node.val) ? node.val : null;

const serialize = (binaryTree) => {
  let trees = [];

  const search = (tree, depth) => {
    const val = getValue(tree);
    trees[depth] = trees[depth] ? [...trees[depth], val] : [val];
    if (!tree) return;
    search(tree.left, depth + 1);
    search(tree.right, depth + 1);
  }

  search(binaryTree, 0);

  return trees.reduce((all, next) => [...all, ...next], []);

}

console.log(serialize(first));
// trees = [[1], [2, 3], [null, null, 4, 5]]


