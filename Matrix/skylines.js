function mergeSkylines(skyline1, skyline2) {
  var h1 = 0, h2 = 0
  var newIndex = 0
  var point1, point2, mergedPoints

  mergeResult = []

  while (true) {
    if(skyline1.length === 0 || skyline2 === 0) {
      break;
    }
    point1 = skyline1[0]
    point2 = skyline2[0]
    mergedPoints = []
    if (point1[0] < point2[0]) {
      mergedPoints.push(point1[0])
      mergedPoints.push(point2[1])

      if(point1[1] < h2) {
        mergedPoints[1] = h2
      }
      h1 = point1[1]
      skyLine1.pop()
    
    } else if (point2[0] < point1[0]) {
      mergedPoints.push(point2[0])
      mergedPoints.push(point1[1])

      if(point2[1] < h1) {
        mergedPoints[1] = h1
      }
      h1 = point1[1]
      skyLine1.pop()
    }
     else {

     } 




  }
}



var smallProblem1 = [ [15, 20, 10], [19, 24, 8] ]
var problemSet1 = [ [2, 9, 10], [3, 7, 15], [5, 12, 12], [15, 20, 10], [19, 24, 8] ]
const answer1 = [ [2, 10], [3, 15], [7, 12], [12, 0], [15, 10], [20, 8], [24, 0] ]

function skylineProblem(arrayBuildings) { 
  // compare key points of skylines starting from leftmost end
  var point1, point2
  
  
  
  
  
  //Choose the one having lesser of x value
  
  //if y is less than the last seen height of other, update key poin's y to last seen height
  
  //Proceed to next key point of the chosen skyline
  
  //Repeat about steps till both skylines done
  
  //remove redundant key points

}








var problemSet2 = [[2,9,10], [3,6,5], [5,12,12], [13,16,10], [15,17,5] ]
var answer2 = [ [2,10], [3,15], [6,12], [12,0], [13,10], [16,5], [17, 0] ]


console.log("hi")

