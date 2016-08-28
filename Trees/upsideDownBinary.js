function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var upsideDownBinaryTree = function(root) {
    var stack = [], node = root
    if(root === null) {return root}
    
    //Let's leverage a stack to hold all leftmost nodes
    while(node != null) {
        stack.push(node)
        node = node.left
    }

    //Two variables to represent the newTop and newRoot
    var newRoot, newTop    
    newRoot = stack.pop()
    
    node = newRoot

    while(stack.length > 0) {
      //processing/assignment
      top = stack.pop();
      node.right = top
      if (top.right != null) {
        node.left = top.right
      } else {
        node.left = null
      }

      //move node to next state
      node = top
      top.left = null
      top.right = null
    }
  return newRoot
};

var rootTest = new TreeNode(1)
rootTest.left = new TreeNode(2)
rootTest.right = new TreeNode(3)

rootTest.left.left = new TreeNode(4)
rootTest.left.right = new TreeNode(5)

console.log(upsideDownBinaryTree(rootTest))