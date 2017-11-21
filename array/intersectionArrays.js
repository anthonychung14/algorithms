const arr1 = [2,5,7,9,10,11], arr2 = [1,10,12,13,15,17,22]

function IntersectionArray(a1, a2) {
  //if either are empty, return the other
  if(a1.length === 0 ) {return a2}
  if(a2.length === 0 ) {return a1}

  //always be error checking
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) { return null }

  //create the two pointers with endpoints
  let res = [], point1 = 0, point2 = 0, end1 = a1.length-1, end2 = a2.length-1

  //while both aren't complete
  while(point1 !== end1 || point2 !== end2) {
    //merge step of merge sort
    if ( a1[point1] > a2[point2] ) {
      res.push(a2[point2])
      point2++
    } else if ( a1[point1] < a2[point2] ) {
      res.push(a1[point1])
      point1++
    //if they're equal to each other, push one and increment both
    } else if ( a1[point1] === a2[point2] ) {
      res.push(a1[point1])
      point1++, point2++
    } else {
      //upon error if one completes before the rest, break and concat the rest
      if (!a1[point1]) {res = res.concat(a2.slice(point2))}
      else if(!a2[point2]) {res = res.concat(a1.slice(point1))}
      break;
    }
  }
  return res;
}

const expectedResult = [1,2,5,7,9,10,11,12,13,15,17,22]

console.log(IntersectionArray(arr1, arr2))
