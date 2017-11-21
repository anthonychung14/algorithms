function medianTwoSort(arr1, arr2) {

  //if m1 and m2 are equal, find their average
  function findMedian(arr, start, end) {
    var indexDiff = end - start
    var mid1, mid2
    if (indexDiff %2 === 0) {
      return arr[start+(indexDiff/2)]
    } else {
      mid1 = arr[Math.floor(indexDiff/2 + start)]
      mid2 = arr[Math.floor(indexDiff/2 + start +1)]
      return (mid1 + mid2)/2
    }
  }

  //error handling for when n < 2

  //if diff between indices is 0, just return median

  //if diff between them is 1, return median of both


  //if m1 < m2

  //if m2 > m1

}

var testArr1 = [1,2,3,4,5,6]
var testArr2 = [6,7,8,9,10]

console.log(medianTwoSort(testArr1))