//output should be nxn matrix with a * for a spiral

//traverse to the right until you reach n
function spiral(num) {
  var res = []
  for (var i = 0; i<num; i++) {
    res.push([])
    for (var j = 0; j<num; j++) {
      res[i].push("")
    }
  }  

  //[['', ''], ['', '']]

  //i = row
  //j = column
  var h = 0
  var v = 0
  var numStars = num
  var dir = "right"

  //7
  while(numStars > 0) {
    //switch: l/r/d/u, using a different while loop
    var starsDrawn = 0
    switch(dir) {
      case 'right':
        while(starsDrawn < numStars) {
          res[h][v] = "*"    
          v++
          starsDrawn++
        }
        dir = 'down'
        break;           
      case 'down':        
        while(starsDrawn < numStars) {
          res[h][v] = "*"    
          h++
          starsDrawn++
        } 
        dir = 'left'           
        break;
      case 'left':
        while(starsDrawn < numStars) {
          res[h][v] = "*"    
          v--
          starsDrawn++
        }
        dir = 'up'
        break;           
      case 'up':
        while(starsDrawn < numStars) {
          res[h][v] = "*"    
          h--
          starsDrawn++
        }  
        dir = 'right'                   
        break;
    }    
    numStars--
  }

  console.log(res)
  return res

}

//right/down/left/up/

  //decrementing the number of stars that you draw by one

