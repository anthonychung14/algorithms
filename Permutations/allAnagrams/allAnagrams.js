/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

var allAnagrams = function(string) {
  // remember, each letter can only be used once.

  // loop over the contents of the string
  var answer = [];
  
  var buildAnagram = function(string, workingString) {
    if (workingString.length === string.length) {
      answer.push(workingString)
      return;

    } else {      
      for (var i = 0; i < string.length; i++) {
        if (workingString.indexOf(string[i]) < 0) {
         // var half1 = string.substr(0, i)
         // var half2 = string.substr(i, string.length-1)
         // //splice it out
         // //concat the substr
         buildAnagram(string, workingString.concat(string[i]))
        }        
      }
    } 
  
  }
  buildAnagram(string, "")
  return answer;
};

//Questions: How do I test my base case?