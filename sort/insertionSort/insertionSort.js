var insertionSort = function(Array) {
  for (var i = 1 i <array,length; i++) {
    //assume that array.slice(0,i) is sorted

    //grab the current element
    var val = array[i]
    var hole = i

    //find the insertion point
    while (insertionPoint && val < array[insertionPoint-1]) {
      insertionPoint--
    }

    //while (hole && val < array[hole-1])
      //array[hole] = array[hole-1]
      //hole -= 1

    //insert the element
    array.splice(i,1);
    array.splice(insertionPoint, 0, val);

        //consider that splice could be really bad in terms of time complexity
    }
    return array;
  }
}


/*jshint expr:true*/

/**
 * Insertion sort is a basic sorting algorithm.
 *
 * Insertion sort iterates over an array, growing a sorted array behind the current location.
 * It takes each element from the input and finds the spot, up to the current point,
 * where that element belongs. It does this until it gets to the end of the array.
 *
 * Insertion sort should be implemented as a stable sort. This means that equal elements
 * should retain their relative order. Numbers, as primitives, give us no way to check this,
 * so we'll be sorting objects with a value field, on which they will be sorted, like so:
 *
 * `[{value: 10}, {value: 5, order: 1}, {value: 5, order: 2}]`
 *
 * A stable sort must return `{value: 5, order: 1}, {value:5, order: 2}` in that order.
 *
 * ---
 *
 * EXTRA CREDIT:
 *
 * Refactor your sort to (optionally) take an explicit comparator function
 * as its second argument, so that callers can define arbitrary ways to sort elements.
 * See [Array.prototype.sort](http://devdocs.io/javascript/global_objects/array/sort)
 * for an example of how this works (excerpt below):
 *
 * > If `comparator(a, b)` is less than `0`, sort `a` to a lower index than `b`, i.e. `a` comes first.
 * > If `comparator(a, b)` returns `0`, leave `a` and `b` unchanged with respect to each other, but sorted with respect to all different elements.
 * > If `comparator(a, b)` is greater than `0`, sort `b` to a lower index than `a`.
 *
 * If no comparator is given, just sort the elements using `<` or `>`.
 **/

// Example usage:
// insertionSort([{value: 2}, {value: 1}, {value: 3}]);
// yields [{value: 1}, {value: 2}, {value: 3}]

// This function is to help you test, and should not be incorporated in your solution.
// It will transform an array of numbers into an array of valid objects.
var testingTransform = function(array) {
  var transform = [];
  
  for (var i = 0; i < array.length; i++)
    transform.push({value: array[i], i: i});

  return transform;
};

var insertionSort = function(array) {
  // Your code goes here. Feel free to add helper functions if needed.

  // Declare results array

  // Iterate over the length of the array
  // for (var i = 0; i < array.length; i++) {
    // At each i, create an object literal with value inside

    // conduct value check between the new object and the values inside array

      // if value of new object is lower, change order indices by +1

      // If not, obj order goes to the end, +1

  // }
  return array.reduce(function(memo, current) {
    count = memo.length;
    memo.push({"value": current, "order": count +1})
    console.log(memo[count].value, current)
    if (memo[0].value < current) {
       console.log(memo[count-1].value)
       memo.order = count -1
     }
    return memo;    
    // if (current.value < memo.value) {
    //   current.order = current.order +2      
    // }
  }, [])
};
