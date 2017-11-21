function quickSelect(arr, k) {
  var pivot = Math.floor(arr.length/2)
  var pivotVal = arr[pivot]

  if ( arr.length === 1 ) {
    return;
  } else if ( (k-1) === pivot ) {
    return pivotVal
  }

  if (k <= less.length) {
    return quickSelect(less, k)
  } else if ( k > more.length ) {
    console.log("hi")

  } 
  // } else if ( k > (less.length - more.length) ) {
  //   return quickSelect(more, (k- less.length - more.length))
  // } else if ( k === pivot ){
  //   return pivotVal
  // }
  return pivotVal
}

function swap(array, idxA, idxB) {
    var temp = array[idxA] 
    array[idxA] = array[idxB]
    array[idxB] = temp
}
  
function partitionOut(arr, left, right) {
  var pivot = arr[Math.floor(arr.length/2)]
  var left = left || 0
  var right = right || (arr.length-1);

  while ( left <= right ) {
    while(arr[left] < pivot) {
      left++
    }

    while(arr[right] > pivot) {
      right--
    }

    if (left <= right) {
      swap(arr, left, right);
      left++
      right--
    }
  }
  return left
}

function partitionStart(arr, left, right, pivotIdx) {
  var storeIdx = left, pivotVal = arr[pivotIdx];  
  swap(arr, pivotIdx, right)
  for (var i = left; i <right; i++) {
    if (arr[i] < pivotVal) {
      swap(arr, storeIdx, i)
      storeIdx++
    }
  }
  swap(arr, pivotIdx, right);
  return storeIdx;
}

function quickSelectLoop(arr, k) {
  var pivotIndex, pivotNewIdx, pivotDist, 
  left = 0, right = arr.length-1 
  
  while(true) {
    pivotIndex = Math.floor(Math.random()*arr.length)
    pivotNewIdx = partitionStart(arr, left, right, pivotIndex)
    pivotDist = pivotNewIdx - left

    if (pivotDist === k) {
      return arr[pivotNewIdx-1]
    } else if (k < pivotDist) {
      right = pivotNewIdx -1
    } else {
      k -= pivotDist+1
      left = pivotNewIdx + 1
    }
  }  
}

var test2 = [1000,999,1,2,3,100,105]
console.log(quickSelectLoop(test2, 4))
