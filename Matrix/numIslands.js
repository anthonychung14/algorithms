function countIslands(matrix) {
  var mRows = matrix.length;
  var mCols = matrix[0].length;
  var visitMap = makeMatrix(mRows, mCols)

  var startR, startC, count = 0, q = [], curr

  for (var r = 0; r < mRows; r++) {     
    for (var c = 0; c < mCols; c++) {             
      curr = matrix[r][c]      
      if (curr === 1 && !visitMap[r][c]) {                
        count++
        startR = r
        startC = c
        BFS(startR, startC)        
      }
    }   
  }
  
  function BFS(r, c) {        
    var q = [], start
    q.push([r,c])    
    while (q.length > 0) {
      start = q.shift()      
      visitMap[start[0]][start[1]] = true
      if(start[0]+1 < mRows) {
        if(!visitMap[start[0]+1][start[1]] && matrix[start[0]+1][start[1]] === 1) {        
          q.push([start[0]+1, start[1]])
        }          
      }    
      if(start[0]-1 >= 0) {
        if(!visitMap[start[0]-1][start[1]] && matrix[start[0]-1][start[1]] === 1) {
          q.push([start[0]-1, start[1]])
        }          
      }
      if (start[1]+1 < mCols) {
        if(!visitMap[start[0]][start[1]+1] && matrix[start[0]][start[1]+1] === 1) {
          q.push([start[0], start[1]+1])
        }      
      }
      if(start[1]-1 >= 0) {
        if(!visitMap[start[0]][start[1]-1] && matrix[start[0]][start[1]-1] === 1) {
          q.push([start[0], start[1]-1])
        } 
      }
    }    
  }  
  console.log(visitMap)
  return count
}


function makeMatrix(m, n) {
  var matrix = []
  for (var i = 0; i < m; i++) {
    var subRes = []
    for (var j = 0; j < n; j++) { 
      subRes.push(false)
    }
    matrix.push(subRes)
  }
  return matrix
}

var matrixTest = makeMatrix(4,4)
var matrixTest2 = [
[1,1,0,0,0], 
[1,1,0,0,0], 
[0,0,1,0,0], 
[0,0,0,1,1],
[1,1,0,0,0], 
[1,1,0,0,0],]

console.log(countIslands(matrixTest2))