var Node = function(val) {
  this.val = val
  this.left = null, this.right = null
}

function levelOrder2Q(root){
  if (!root) {return}
  var currQ = [];
  var nextQ = [];
  var currItem;
  var res = [];
  currQ.push(root)
  while(currQ.length > 0) {    
    currItem = currQ.shift()
    if(currItem !== null) {
      res.push(currItem.val)
      nextQ.push(currItem.left)
      nextQ.push(currItem.right)
    }
    if(currQ.length === 0) {
      res.push("NEW LEVEL")
      currQ = nextQ
      nextQ = []
    }
  }
  return res;
}

function levelOrderDFS(root) {
  var res = []
  var dl;

  function traverseTree(node, depth) {
    if (node === null) { return }
    else if (!res[depth-1]) {
      res[depth-1] = []
    }

    dl = res[depth-1];
    dl.push(node.val);

    traverseTree(node.right, depth+1);
    traverseTree(node.left, depth+1);
  }

  traverseTree(root, 1);
  return res;
}

var test = new Node(1)
test.left = new Node(2)
test.right = new Node(3)
test.left.left = new Node(4)
test.left.left.left = new Node(5)
test.left.left.right = new Node(6)

console.log(levelOrder2Q(test))