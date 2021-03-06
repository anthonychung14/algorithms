/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */

var commonCharacters = function(string1, string2) {
  // TODO: Your code here!
  var stringhash = {}
  var commonstring= []
  for (var i = 0; i < string1.length ; i++) {
    stringhash[string1[i]] = string1[i]
  }
  for (var i = 0; i < string2.length; i++) {
    if (stringhash[string2[i]]) {
      commonstring.push(string2[i])
      delete stringhash[string2[i]]
    }
  }
  return commonstring.join("")
};
