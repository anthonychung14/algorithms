//PREORDER TRAVERSAL. ROOT, LEFT, RIGHT

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null; 
}

function serialString(root) {
  var str = ""
  var currNode = root


  str += "T(" + root.val
  function helper(node){
    if(node === null) {
      return ""
    }    
    var left = helper(node.left)
    var right = helper(node.right)
    str += 'T(' + node.val + "," + left + right + ")"
   }
   helper(root)
   return str;
}


var test1 = new TreeNode(2)
test1.left = new TreeNode(3)
test1.right = new TreeNode(4)

'T(2, T(3, '' ,''), T(4, '', T(5, '', '')))'

'T(val, '', '')' 

console.log(serialString(test1))

// function serialize(root, array) {
//   if (root === null) {
//     array.push(-1)
//     return;
//   }
//   array.push(root.val)
//   serialize(root.left, array)
//   serialize(root.right, array)
// }

// function deSerialize(array) {
//   var index = 0
//   var root;

//   //move index if base case reached
//   function helper(arr) {
//     if (index === arr.size || arr[index] === -1) {
//       index += 1
//       return null;
//     }
//     //process new node and inc index
//     root = new Node(arr[index])
//     index += 1

//     //recurse down both branches
//     root.left = deSerialize(arr);
//     root.right = deSerialize(arr)

//     //return the root once complete
//     return root;
//   }
// }