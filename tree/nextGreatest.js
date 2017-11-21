// Given BST and a value of a node, return the node that returns next greater value

/*

Example 1
   7
  / \
 3   120
 \   /
  5 100
   /  \
   80   111
   /\
  78 85

if 10, return 12

if 9, return 10
   - check right child
   - if left child, recurse to find greatest value in subtree
   - compare greatest value in subtree with the right child

Example 2

if given 8, return 10
if given 7, return 8

// OFFICIAL PSUEDO CODE

1. DFS to find value
2. Right child
3. Recurse till bottom of left children in right child subtree (to the left)
*/

// type Node = {
//   value: number,
//   left: ?Node,
//   right: ?Node,
// };

function nextGreatestValue(node: Node, val: number) {
  const { foundNode, parentNode }  = findNode(node, val, node);
  if (!foundNode) return null;

  const rightSubtree = foundNode.right;

  const nextGreatestOne = rightSubtree.val;
  const nextGreatestTwo = recurseLeft(rightSubtree);

  if (!nextGreatestOne.val && nextGreatestTwo.val) {
    return Math.min(nextGreatestTwo, parentNode.val);

  } else if (!nextGreatestTwo.val && nextGreatestOne.val) {
    return Math.min(nextGreatestOne.val, parentNode.val);
  }

  return parentNode.val;
}

/*
Given 7,
return 8,

  6
  /\
 2  8
    /\
   7  10

*/
function recurseLeft(node: Node) {
  if (node.left === null) return node.val;
  return recurseLeft(node.left);
}


function findNode(root: Node, val: number, parent: Node) {
  let foundNode;
  let parentNode;

  function dfs(node, val, parent) {
    if (node.val === val) {
      foundNode = node;
      parentNode = parent;

    } else if (!node) {
      return
    }

    const parentNode = node;

    if (node.val < val) {
      dfs(node.right, val, parentNode);
    } else {
      dfs(node.left, val, parentNode);
    }
  }

  dfs(root, val, root);

  return { foundNode, parentNode };
};
