const BST = function(value) {    
    var bst = Object.create(searchMethods)
    bst.value = value;
    bst.left = null;
    bst.right = null;
    return bst
};

var searchMethods = {
  dfs: function() {    
    var searchNodes = function(node) {
      if (node === null) {
        return;
      }
      else {
        console.log(node.value)
        searchNodes(node.left)
        searchNodes(node.right)
      }
    }    
    searchNodes(this)
  },

  bfs: function() {
    var queue = []
    queue.push(this)
    while (queue.length > 0) {
      var shifted = queue.shift()
      console.log(shifted.value)      
      if (shifted.left) {
        queue.push(shifted.left)
      }
      if (shifted.right) {
        queue.push(shifted.right)  
      }      
      
    }
    return false
  }
}

var hasPathSum = function(node, sum) {
    var func = function(node, total) {
      if (node === null) { return false }      
      if (node.left != null || node.right != null) {
        return hasPathSum(node.left, sum-node.value) || hasPathSum(node.left, sum-node.value);
      }
      return sum - node.value === 0;
    }
};

bst = BST(-1)
bst.left = BST(-2)
bst.right = BST(-3)

// bst.left.left = BST(4)
// bst.left.right = BST(5)

console.log(hasPathSum(bst, -3))