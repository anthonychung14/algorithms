function heapSelectK(arr, k) {
  var last = arr.length - 1, youngestParent = Math.floor(last/2)
  for (var i = youngestParent; i >= 0; i--) {
    moveDown(arr, i, last);
  }

  var limit = last - k
  for (var i = last; i > limit; i--) {
    if (arr[0] > arr[i]) {
      swap(arr, 0, i);
      moveDown(arr, 0, i-1)
    }
  }

  return arr;
}

function moveDown(arr, first, last) {
  var largest = 2*first+1
  while (largest <= last) {
    if (largest < last && arr[largest] < array[largest +1]) {
      largest++
    }
  }
  if (arr[first] < arr[largest]) {
    swap(arr, first, largest);
    first = largest
    largest = 2* first +1
  } else {
    return;
  }
}

function swap(arr, first, last) {
  var temp = arr[first]
  arr[first] = arr[last]
  arr[last] = temp
}

var test = [21, 3, 34, 5, 13, 8, 2, 55, 1, 19]

console.log(heapSelectK(test, 2))