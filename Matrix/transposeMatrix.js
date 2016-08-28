function getMatrixWidth(matrix) {
    return matrix.reduce(function (result, row) {
        return Math.max(result, row.length);
    }, 0);
}

function zeroFill(n) {
    return new Array(n+1).join('0').split('').map(Number);
}

function secondStep(matrix){
  return zeroFill(matrix.length).map(function(c, j) {
     return matrix[j][i];
  })
}

function transposeJS(matrix) {  
    return zeroFill(getMatrixWidth(matrix)).map(function(r, i) {
        return zeroFill(matrix.length).map(function(c, j) {
            return matrix[j][i];
        });
    });
}


//Assumptions: this is a square matrix
//TODO: outfit with rectangle capability
function transposeMatLeft(matrix) {
  var n = matrix[0].length

  //iterate from the outside of the matrix in.
  //assumption, layers of square = n/2
  for (var x = 0; x < Math.floor(n/2) ; x++) {
    
    //first row becomes the last column
    for (var y = x; y < n-x-1; y++) {
      //hold one and then move counter clockwise
      var temp = matrix[x][y];
      matrix[x][y] = matrix[y][n-1-x]
      matrix[y][n-x-1] = matrix[n-x-1][n-y-1];
      matrix[n-x-1][n-y-1] = matrix[n-y-1][x]
      matrix[n-y-1][x] = temp
    }
  }
  return matrix
}

function transposeMatRight(matrix) {
  var n = matrix[0].length

  //iterate from the outside of the matrix in
  for (var x = 0; x < Math.floor(n/2) ; x++) {
    for (var y = x; y < n-x-1; y++) {
      var temp = matrix[x][y];
      matrix[x][y] = matrix[n-1-x][y]
      matrix[y][n-x-1] = matrix[n-x-1][n-y-1];
      matrix[n-x-1][n-y-1] = matrix[n-y-1][x]
      matrix[n-y-1][x] = temp
    }
  }
  return matrix
}



var test1 = [
  [4,5,6,7,8],
  [4,5,6,7,8]  
]
var test2 = [
  [1,2,3,4,5],
  [6,7,8,9,10],
  [11,12,13,14,15],  
  [16,17,18,19,20],
  [21,22,23,24,25]  
]

var test3 = [
  [1]
]

var test4 = [
  [1,2]
]

console.log(transposeMatLeft(test2))