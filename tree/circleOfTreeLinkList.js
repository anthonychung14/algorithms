//I: BST
//O: Doubly linked list of in-order

var BST = function(value) {    
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

bst = BST(5)
bst.left = BST(3)
bst.right = BST(7)
bst.left.left = BST(1)
bst.left.right = BST(2)

function circleOfLife(BST) {

  function findTail(node) {
    if (node.right === null) {
      return node;              
    } else {
      return findTail(node.right)
    }
  }
  
  var tail = findTail(BST)

  var head;

  function assignNode(node, prevNode) {
    prevNode.next = node
    console.log(prevNode.next, "PREVNODE NEXT")
    node.prev = prevNode
    prevNode = node
    node =     
  }

  function searchNodesInOrder (node, prevNode) {
    if(node === null) {
      return;
    } else if (node.left != null) {
      node.left = searchNodesInOrder(node.left)
    }
  }

  searchNodesInOrder(BST, tail)

  return head  
}

console.log(circleOfLife(bst))
// console.assert(circleOfLife(bst).head.value === 1, "the head should be zero");