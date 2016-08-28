function areArraysEqual(array1, array2) {
  var areEqual = true;
  for (var i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      areEqual = false;
    }
  }
  return areEqual && array1.length === array2.length;
}

// function dutchFlag(array, idx) {
//   var lo = 0
//   var mid = idx
//   var hi = array.length-1
//   var val, temp;
  
//   while (mid <= hi) {
//      val = array[mid]
     
//      if (val < array[lo]) {
//        temp = array[lo]
//        array[lo] = array[mid]
//        array[mid] = temp
//        lo++
//        mid++
//      }
    
//   }
// }


function quickSort(array) {
  
  function swap(array, idxA, idxB) {
    var temp = array[idxA] 
    array[idxA] = array[idxB]
    array[idxB] = temp
  }
  
  function partition(array, pivot, left, right) {
    var storeIdx = left
    var pivotVal = array[pivot]
    
    //move the pivot to the end of the array
    swap(array, pivot, right)
        
    //iterate through the array
    for (var v = left; v < right; v++) {
      //if the val is less than pivot
      if (array[v] < pivotVal) {
        //switch the val with the store index.        
        swap(array, v, storeIdx)
        //inc storeIndex
        storeIdx++
      }
    }
    //switch the rightmost with the store
    swap(array, right, storeIdx)    
    return storeIdx    
  }
  
  function sort(array, left, right) {
      var pivot = null  
      if (left === undefined) {
        left = 0
      }
    
      if (right === undefined) {
        right = array.length-1
      }
    
      if (left < right) {
        pivot = left + Math.ceil((right - left) * .5);
        let newPivot = partition(array, pivot, left, right)
        
        sort(array, left, newPivot-1)
        sort(array, newPivot+1, right)
      }    
   }    
  
  sort(array)
}

var bob = [5,6,3,2,1,9]

var array = []
for (var i = 0; i < 20; i++) {
  array.push(Math.round(Math.random()*100))
}

console.log(array, "before")
quickSort(array)
console.log(array, "after")
