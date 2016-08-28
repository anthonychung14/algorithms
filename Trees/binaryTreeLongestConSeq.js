function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

//Find the longest consecutive sequence in a binary tree
var longestConsecutive = function(root) {
  //Setup vars and take edge case into account
  var curr = root, max = 0;
  if (!root || root.length === 0) { return 0}

  
  //helper. takes in a currNode, a next, and an accumulator
  function traverseTree(currNode, next, LCS) {
    if (currNode === null) {
      return
    //if the current node equals the anticipated next value
    } else if (currNode.val === next) {
        LCS++
    //if not, reset the number
    } else {
        LCS = 1;
    }

    //set max to decide between either the current LCS and the old max
    max = Math.max(LCS, max);
    
    //traverse down both the right and left subtrees, increment the value of the curr node
    traverseTree(currNode.left, currNode.val + 1, LCS)
    traverseTree(currNode.right, currNode.val + 1, LCS)
  }


    traverseTree(curr, 0, curr.val);
    return max
};

var test1 = new TreeNode(1)
test1.left = new TreeNode(2)
test1.right = new TreeNode(4)

var next = test1.left
next.left = new TreeNode(3)
next.right = new TreeNode(5)
next.left.left = new TreeNode(4)

console.log(longestConsecutive(test1));
