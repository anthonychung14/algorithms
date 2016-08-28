//TODO: SETUP A QUICK FACTORY FUNCTION FOR NODES IN A TREE

const BTree = function(value) {    
    var bst = Object.create(searchMethods)
    bst.value = value;
    bst.left = null;
    bst.right = null;
    return bst
};

const generateRandomNums = (nums) => {
  let res = []
  for (var i = 0; i < nums; i++) {
    res.push(Math.round(Math.random*100))
  }
  if (res.length > 1) {
    return res
  }
  return res[0]
}

const flipCoin = () => {
  return Boolean(Math.round*Math.random(1))  
}

// const generateBTree = (percentNull, numNodes) => {  
//   //create root with random number  
//   let root = Btree(generateRandomNums(1))
  
//   const subRoutine = (node, count) => {
    
    
    
//     if (count === numNodes) {
//       return
//     } else if () {
    
//     }
//   }
  
//   subRoutine(root)
// }
 
const res = []
const serializeBTree = (root, result) => {

  if (!root) {         
    result.push("#")
    return          
  }
  
  if (root.val === undefined) {
    result.push("#")
    return
  }
  result.push(root.val)
  serializeBTree(root.left, result)
  serializeBTree(root.right, result)  
  
}

const b = {val: "2", left: "c", right: "d"}
const a = {val: "1", left: b, right: "d"}

const arr = serializeBTree({val: "a", right: a, left: null}, res)

console.log(res)