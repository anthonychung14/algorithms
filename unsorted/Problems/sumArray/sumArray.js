/*
 * Given an array of numbers, calculate the greatest contiguous sum of numbers in it.
 * A single array item will count as a contiguous sum.
 *
 test1 = sumArray([1, 2, 3]); // => 6
 test2= sumArray([1, 2, 3, -4]); // 6
 
 test3 = sumArray([1, 2, 3, -4, 5]); // 7 
    //getting 11: only adding all positives
 
 test4 =sumArray([4, -1, 5]); // => 8
 test5 = sumArray([10, -11, 11]); // 11
 */

// Solved in O(n) time with O(1) memory
var sumArray = function(array) {
  //iterate over the whole array
  var testAllSum = 0
  var testRealSum = 0;
  var realSum = 0;
  var largestInArray = 0

  for (var i = 0; i < array.length; i++) {
    if (array[i] > largestInArray) {largestInArray = array[i]}
    testAllSum +=array[i]
  }

  for (var i = 0; i < array.length; i++) {
    //if we run into a neg number while traversing
    testRealSum += array[i]
    if (testRealSum > testRealSum + array[i+1]) {
      realSum = testRealSum;
    }
  }
  if (testAllSum > realSum) {
      realSum = testAllSum
    }
  if (largestInArray > realSum) {
      realSum = largestInArray
  }
  return realSum;
};

sumArray([1, 2, 3, -4])