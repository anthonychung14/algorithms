/*

Write a function that takes an array A and an index i into A, 
and rearranges the elements such that all elements less than A[i] appear first,
followed by elements equal to A[i], followed by elements greater than A[i]. Your
algorithm should have O(1) space complexity and O(N) time complexity



I: A = [ 33, 33, 10, 7, 11, 49, 48, 33 ], index = 1
O: A = [11,7,10, 33, 33, 33, 49, 48]
C: O(1) space, O(N) time
E: Duplicate handling!

*/

// Example
// The value at index 1 becomes the partition point

// you need to declare variables (indices) for all swap points
  // pivotVal = arr[i]
  // start = 0
  // startEqual = 0. inc when swap
  // stopEqual = 0
  // startGreater = stopEqual
  // end = arr.length-1 