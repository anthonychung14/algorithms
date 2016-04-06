/**
* Extend the Number prototype with a new method called `toEnglish`.
* It should return the number as a string using English words.
* Examples:
*   (7).toEnglish(); // > "seven"
*   (575).toEnglish(); // > "five hundred seventy-five"
*   (78,193,512).toEnglish(); // > "seventy-eight million one hundred ninety-three thousand five hundred twelve"
*
* Extra credit: Make your function support decimals.
* Example:
*   (150043.273).toEnglish() // > "one hundred fifty thousand forty-three and two hundred seventy three thousandths"
*
 */

//Number should first get split up to the following:

  //Five * Hundred, Seventy + Tens, Five
  // return my value as english words

Number.prototype.toEnglish = function () {
  var queue = this.toString().split('')
  var resultsString = ''
  var workingString = queue.shift();
  var howManyZeros = function(array) {
    var string = String(0)
    for (var i = 0; i < array.length; i++) {
      string += 0
    }
    return string;
  }

  var subroutine = function (workingQueue, resultsString, working) {
    var numLeft = workingQueue.length;
    if (numLeft === 0) {
      resultsString += numbersToWords[working]
      return resultsString;
    }
    else if (numLeft ===1) {
      var hashLookup = working + String(0);
      resultsString += numbersToWords[hashLookup];
      working = workingQueue.shift();
      subroutine(workingQueue, resultsString, working)
    } else {
      working = workingQueue.shift()
      var workingPlaces = String(1) + howManyZeros(workingQueue) 
      resultsString += numbersToPlace[working] + workingPlaces
      subroutine(workingQueue, resultsString, working)
    }
    //number of zeroes eqvuivalent to numbers left
  }
  return subroutine(queue, resultsString, workingString)
};

//Recursive solution:
  //base case: when number is alone. (it's in the ones). so return the number


  //if there are numbers left in the string,

    //determine how many numbers are left

    //if there are 2 numbers left, default to numbers to words
    //expression will be that number + numbersToPlace[]

    //remove number from the string
  
    //call subroutine again(pass the sliced string, workingString)


var numbersToWords = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
};
var numbersToPlace = {
  10: 'ten',
  100: 'hundred',
  1000: 'thousand',
  1000000: 'million',
  1000000000: 'billion',
  1000000000000: 'trillion',
  1000000000000000: 'quadrillion',
  1000000000000000000: 'quintillion',
};


