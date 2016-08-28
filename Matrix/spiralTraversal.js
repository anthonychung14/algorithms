var matrix = [
  [1,2,3,4],
  [5,6,7,8],
  [9,10,11,12],
  [13,14,15,16]
]

function spiralTraversal(matrix) {
  if (matrix.length === 0) {return}
  
  var top = 0
  var bottom = matrix.length-1
  
  var left = 0
  var right = matrix[0].length-1
  var result = []  

  while(true) {
    for (var j = left; j<=right; ++j) {
      result.push(matrix[top][j])
    }
    top++

    if (top > bottom || left > right) {break}
    
    for (var i = top; i<=bottom; ++i) {
     result.push(matrix[i][right])
    }
    right--
    if (top > bottom || left > right) {break}

    for (var j = right; j>=left; --j) {
     result.push(matrix[bottom][j])
    }
    bottom--
    if (top > bottom || left > right) {break}

    for (var i = bottom; i>=top; --i) {
     result.push(matrix[i][left])
    }
    left++
    if (top > bottom || left > right) {break}

  }

  return result
}

console.log(spiralTraversal(matrix))