// Imagine we have an image where every pixel is white or black. We’ll represent this image as a simple 2D array (0 = black, 1 = white).

// Now there are N solid black rectangles in the image. Write a function that takes in the image and outputs all the black rectangles.

// For example:
// //JavaScript
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
  //Bottom right can be at outer bounds (len-1) , or if area below and right === 1

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


//Felt like that was cheating
//This is the traditional implementation with DFS across the matrix
//Probably not necessary since we're making a lot of unnecessary fn calls for base cases
function findZeroes2(matrix){
  var rows = matrix.length, cols = matrix[0].length,
      resultLower = [], resultUpper = [];

  var visitMap = [], sub;
  for(var i = 0; i < rows; i++) {
    sub = [];
    for(var j = 0; j < cols; j++) {
      sub.push(false);
    }
    visitMap.push(sub);
  }

  for(var i = 0; i < rows; i++) {
    for(var j = 0; j < cols; j++) {
      if (matrix[i][j] === 0)
        DFS(i, j);
    }
  }

  //mark all nodes as visited
  //when you find the right corner, return that value
  function DFS(i, j) {
    //base cases
    if (
      ( i === null || j === null ) ||
      ( matrix[i][j] !== 0 ) ||
      ( visitMap[i][j] ) ) {
      return;
    }

    //if it's a top left corner
    if (
        ( i === 0 || matrix[i-1][j] === 1 ) &&
        ( j === 0 || matrix[i][j-1] === 1) ) {
      resultLower.push([i,j])
    }

    //if it's a bottom right corner
    if (
        ( i === (rows-1) || matrix[i+1][j] === 1 ) &&
        ( j === (cols-1) || matrix[i][j+1] === 1) ) {
      resultUpper.push([i,j])
    }

    //mark as true
    visitMap[i][j] = true;

    //Continue search in all directions
    DFS(i+1, j)
    DFS(i-1, j)
    DFS(i, j+1)
    DFS(i, j-1)
  }

  return {
    lower: resultLower,
    upper: resultUpper
  };
}


console.log(findZeroes2(image))






