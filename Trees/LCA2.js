function getLCA(node1, node2, curr) {
  if (curr === null) {return null}

  if (curr === node1.value || curr === node2.value) {
    return curr;
  }

  var left = getLCA(node1, node2, curr.left)
  var right = getLCA(node1, node2, curr.right)

  if (left !== null && right !== null) {
    return curr;
  }

  if(left === null) { return right;}
  else { return left }
}


function otherLCA(node1, node2) {
  //build two paths or data structures as you perform a DFS to find each node


  //return the largest value betweeen the two





}