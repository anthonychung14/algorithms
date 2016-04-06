/**
 *  
 *  A robot located at the top left corner of a 5x5 grid is trying to reach the 
 *  bottom right corner. The robot can move either up, down, left, or right, 
 *  but cannot visit the same spot twice. How many possible unique paths are 
 *  there to the bottom right corner? 
 *  
 *  make your solution work for a grid of any size.
 *
 */

// A Board class will be useful

var makeBoard = function(n) {
  var board = [];
  for (var i = 0; i < n; i++) {
    board.push([]);
    for (var j = 0; j < n; j++) {
      board[i].push(false);
    }
  }
  board.togglePiece = function(i, j) {
    this[i][j] = !this[i][j];
  }
  board.hasBeenVisited = function(i, j) {
    return !!this[i][j];
  }
  return board;
};

var bob = makeBoard(n)
var count = 0

var robotPaths = function(n, board, i, j, steps) {
    bob.togglePiece(i,j)
     if (i===n && j ===n) {
        bob.togglePiece(i,j)
        count++;
        return;      
     } else if (steps === n-1) {
        bob.togglePiece(i, j) 
        return;                 
     } else if (bob.hasBeenVisited || bob[i][j] < 0 || bob[i][j] > n) {
      bob.togglePiece(i, j)
      return
    } else {
        robotPaths(n, board, i+1, j, steps)
        robotPaths(n, board, i-1, j, steps)
        robotPaths(n, board, i, j+1, steps)
        robotPaths(n, board, i, j-1, steps)
    }
}


