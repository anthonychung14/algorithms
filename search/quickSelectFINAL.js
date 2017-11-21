function partitionStart(arr, left, right) {  
  // You were passing pivotIdx here, I think that selecting pivotIdx 
  // should be this method's responsibility, so I moved the code here
  // Also you were taking pivotIdx ignoring left and right - fixed that
  var pivotIdx = Math.floor(Math.random() * (right - left + 1)) + left;
  var storeIdx = left, pivotVal = arr[pivotIdx]
  // You had a swap of pivot with the right here, 
  // which allowed you to traverse 1 item less in a cycle, 
  // but with the cost of one line of code - removed that
  for (var i = left; i <= right; i++) {
    if (arr[i] < pivotVal) {
      swap(arr, storeIdx, i)
      storeIdx++
    }
  }  
  // Here was a strange swap of pivot back from right to its position,
  // now it is not needed.
  return storeIdx;
}

function quickSelectLoop(arr, k) {  
  var pivotDist;   
  var left = 0, right = arr.length - 1;       
  while(right !== left) {
    // Maintaining: left <= k <= right, while enclosing left to right 
    pivotDist = partitionStart(arr, left, right)        
    // You were returning arr[k] here if pivotDist == k, 
    // but that is incorrect considering function's invariant - 
    // we can't make such a conclusion unless left == right.
    // I corrected that check - it is now located in the while loop.
    if (k < pivotDist) {
      right = pivotDist - 1;
    } else {
      // You were adding 1 here, which is incorrect, 
      // because item at pivotDist may be the answer as well.
      left = pivotDist;
    }
  }    

  // left == right, and we maintained 'left <= k <= right', so we have an answer
  return arr[k]
}
var test2 = [1000,999,1,2,3,100,105]
console.log(Math.floor(Math.random()*test2.length))