function searchRotatedArray(arr, target) {
  var pivot = findPivot(arr)
  
  function findPivot(array) {
    var start = 0, end = array.length-1, mid
    if(array[start] <= array[end]) {
      return 0;
    }

    while (start <= end) {
      mid = (Math.floor((start + end)/2))
      if (arr[mid] > array[mid+1]) {
        return mid+1
      }
      if(arr[start] <= arr[mid])  {
        start = mid +1
      } else {
        end = mid-1
      }
    }
  }
  
  start = 0, end = arr.length-1
  if(target <= arr[end] && target >= arr[pivot]) {
    start = pivot
  } else {
    end = pivot
  }

  function findElement(start, end) {
    while( start <= end ){
      mid = (Math.floor((start + end)/2))
      if (arr[mid] === target) { return mid }
      if (target < arr[mid]) { end = mid -1 }
      else { start = mid + 1 }
    }
    return -1
  }
  
  return findElement(start, end)  
}

var testArray = [4,5,6,7,0,1,2]

console.log(searchRotatedArray(testArray, 6))

