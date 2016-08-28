function latticePathsMemo(x, y) {
  var lib = {};
  var traversePath = function(xCoor, yCoor) {
    var key = xCoor.toString() + '_' + yCoor.toString();
    if (lib[key]) {return lib[key];}
    if (xCoor === 0 && yCoor === 0) {
      return 1;
    } else if (xCoor < 0 || yCoor < 0) { 
      return 0;
    } 
    lib[key] = traversePath(xCoor-1, yCoor) + traverse(xCoor, yCoor-1); 
    return lib[key];
  };

  return traversePath(x,y);
}

function latticePathsTab(x, y) {
  //create memo table from bottom up
  var work = Array(x).fill(1);
  
  //loop through the matrix
  for (var i = 0; i < y; i++) {
    //loop ahead with
    for (var j = 1; j <work.length;j++) { 
      //populate with the results of the previous
      work[j] = work[j-1] + work[j];
    }
  }

  //return the end of the work array
  return work[work.length-1];
}
