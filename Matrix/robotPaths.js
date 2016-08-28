//Lessons from RobotPaths

/*
  1. input, pointers, subRes, fullRes

*/


function getPaths(arr, i, j, subRes, allRes) {
  var bounds = arr.length
  if (i >= bounds || j >= bounds ) {return}
  
  subRes.push(arr[i][j])

  if ( i === bounds-1 && j === bounds-1 ) {
    allRes.push(subRes)
    return
  }

  getPaths(arr, i+1, j, [].concat(subRes), allRes)
  getPaths(arr, i, j+1, subRes.slice(0), allRes)
}


function makeRobotPaths(arr) {
  var allResults = []
  getPaths(arr, 0, 0, [], allResults)
  return allResults;
}

var test1 = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
]

console.log(makeRobotPaths(test1))



