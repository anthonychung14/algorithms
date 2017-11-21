var image = [
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 0, 0, 0, 1],
  [1, 0, 1, 0, 0, 0, 1],
  [1, 0, 1, 1, 1, 1, 1],
  [1, 0, 1, 0, 0, 1, 1],
  [1, 1, 1, 0, 0, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
];

function findZeroes(matrix) {
  var rows = matrix.length, cols = matrix[0].length,
      start, resultLower = [], resultUpper = [];

  //KEY INSIGHT: You can find bounds of rectangle by focusing on corners
  //Upper left can either be at origin (0,0), or if area above AND left === 1
  // Bottom right can be at outer bounds (len-1) , or if area below and right === 1

  //Search matrix
  for(var i = 0; i < rows; i++) {
    for(var j = 0; j < cols; j++) {
      start = matrix[i][j]

      //test possible candidate
      if(start === 0) {

        //Find upper left corner
        if( ( i === 0 || matrix[i-1][j] === 1 ) &&
           ( j === 0 || matrix[i][j-1] === 1) ) {
          resultLower.push([i,j])
        }

        //Find bottom right corner
        if( ( i === (rows-1) || matrix[i+1][j] === 1 ) &&
           ( j === (cols-1) || matrix[i][j+1] === 1) ) {
          resultUpper.push([i,j])
        }
      }
    }
  }
  return {
    lower: resultLower,
    upper: resultUpper
  };
}

console.log(findZeroes(image))