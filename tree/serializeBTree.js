const serializeBTree = (root, result) => {

  if (!root || root.val === undefined) {
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
