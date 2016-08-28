function lcaRecurse(node, n1, n2) {
  if (node === null) { return null }
  if (node.val === n1.val || node.val === n2.val) { return node }
  var left = lcaRecurse(node.left, n1, n2)
  var right = lcaRecurse(node.right, n1, n2)

  if (left !== null && right !== null) {return node}
  else if (left === null && right === null) {return null}

  if (left) {
    return right
  } else {
    return left
  }
}