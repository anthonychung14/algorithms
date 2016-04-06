/*
 *  Write a function that takes as its input a string and returns an array of
 *  arrays as shown below sorted in descending order by frequency and then by
 *  ascending order by character.
 *
 *       :: Example ::
 *
 *  characterFrequency('mississippi') ===
 *  [
 *    ['i', 4],
 *    ['s', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example2 ::
 *
 *  characterFrequency('miaaiaaippi') ===
 *  [
 *    ['a', 4], ['i', 4], ['p', 2], ['m', 1]
 *  ]
 *
 *       :: Example3 ::
 *
 *  characterFrequency('mmmaaaiiibbb') ===
 *  [
 *    ['a', 3], ['b', 3], ['i', 3], ['m', 3]
 *  ]
 *
 */

var characterFrequency = function(string) {
  //make a hash table of values
  var stringHash = {}
  var stringArray = [];

  for (var i = 0; i < string.length; i++) {
    stringHash[string[i]] = stringHash[string[i]]+1 || 1; 
  }

  for (var str in stringHash) {
    stringArray.push([str,stringHash[str]])
  }

  //sort the array first by descending order of the second value

  var sortedNumber = stringArray.sort()

  var finalSort = sortedNumber.sort(function(a,b) {
        return b[1] - a[1]
    })
  
  return finalSort;
};

characterFrequency('miaaiaaippi')
characterFrequency('mmmaaaiiibbb')