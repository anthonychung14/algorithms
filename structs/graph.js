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

const res = []
