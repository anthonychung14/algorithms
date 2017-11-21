/* GO BOARD

Given a go-board in the form of a matrix and a starting point
Count the number of liberties that are available

A liberty is a valid move given the color of the start space

*/

function countLiberties(board, start) {
  //NOTE THE COLOR THAT WE'RE ON.
  //IF ON AN EMPTY SPACE, RETURN NULL
  var playerColor;
  var enemyColor;

  var startZone = board[start[0]][start[1]]
  if(startZone.color === 'empty') {return null}
  else { playerColor = startZone.color }

  if ( playerColor === 'white'){ enemyColor = 'black'}
  else{ enemyColor = 'white'}

  //INSTANTIATE BIT TABLE
  var boardRows = board.length
  var boardCols = board[0]
  var bitTable = [];
  board.forEach((r, rI) => {
    bitTable.push([])
    boardCols.forEach((col, cI) => {
      bitTable[rI].push(false)
    })
  })

  //START BFS
  var currNode;
  var currRow;
  var currCol;
  var liberties = 0
  var queue = [];
  queue.push(start);

  //PREP CHANGES
  var newRow;
  var newCol;
  var rowChange = [0,0,1,-1];
  var colChange = [1,-1,0,0];

  while(queue.length > 0){
    //shift from queue and label relevant points
    currNode = queue.shift();
    currRow = currNode[0];
    currCol = currNode[1];

    //Manage state of result and mark as visited
    if(board[currRow][currCol].color === 'empty' && !bitTable[currRow][currCol]) {
      liberties++
    }
    bitTable[currRow][currCol] = true;

    //Conditional handling
    rowChange.forEach( (r, i) => {
      newRow = currRow + rowChange[i]
      newCol = currCol + colChange[i]
      if(
        (newRow > -1 && newRow < board.length) &&
        (newCol > -1 && newCol < board[0].length) &&
        bitTable[newRow][newCol] === false &&
        board[newRow][newCol].color !== enemyColor
        ) {
          queue.push([newRow, newCol])
        }
    })
  }
  return "There are " + liberties + " liberties on the Go Board"
}

var board = [
  [{ color: 'empty' }, { color: 'white' }, { color: 'empty' }, { color: 'empty' }],
  [{ color: 'white' }, { color: 'black' }, { color: 'black' }, { color: 'empty' }],
  [{ color: 'empty' }, { color: 'black' }, { color: 'black' }, { color: 'white' }],
  [{ color: 'empty' }, { color: 'black' }, { color: 'white' }, { color: 'empty' }]
  ]

console.log(countLiberties(board, [1,2]))

var boardValues =
  [
    [{ color: 'empty' }, { color: 'white' }, { color: 'empty' }, { color: 'empty' }],
    [{ color: 'white' }, { color: 'black' }, { color: 'black' }, { color: 'empty' }],
    [{ color: 'empty' }, { color: 'black' }, { color: 'black' }, { color: 'white' }],
    [{ color: 'empty' }, { color: 'black' }, { color: 'white' }, { color: 'empty' }]
  ]

// function copyInputMatrix(matrix){
//   console.log(matrix)
//   return matrix
// }

// console.log(copyInputMatrix(board))