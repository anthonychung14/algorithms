
/**
 * Given a roman numeral as input, write a function that converts the roman
 * numeral to a number and outputs it.
 *
 * Ex:
 * translateRomanNumeral("LX") // 60
 *
 * When a smaller numeral appears before a larger one, it becomes
 * a subtractive operation. You can assume only one smaller numeral
 * may appear in front of larger one.
 *
 * Ex:
 * translateRomanNumeral("IV") // 4
 *
 * You should return `null` on invalid input.
 */

var DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

/*
  LX XX II = 82

  XC VIII = 98

  XC IX = 99

  CM XC IX = 999


*/

var translateRomanNumeral = function(romanNumeral){
// TODO: Implement me!

  //Loop through the Roman Numerals
  var total = 0
  for (var i = 0; i < romanNumeral.length; i++) {
    var left = DIGIT_VALUES[romanNumeral[i]]
    var right = DIGIT_VALUES[romanNumeral[i+1]]
    if ( left < right ) {
      var diff = right - left
      total += right - left
      i++
    } else {
      total += left
    }
  }
  return total;
}

  //Find instances where the number 

  //subtract if number after is smaller


