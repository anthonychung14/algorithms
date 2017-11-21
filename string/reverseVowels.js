var reverseVowels = function(word) {

  let vowels = {
    a: "a",
    e: "e",
    i: "i",
    o: "o",
    u: "u"
  }

  let firstHalfVowelIndex = '';
  let secondHalfVowelIndex = '';
  let temp;

  let firstPointer = 0
  let secondPointer = word.length-1


  while(secondPointer > firstPointer) {
    if (!vowels[word[firstPointer]]) {
      firstPointer++
    } else {
      firstHalfVowelIndex = firstPointer
    }

    if(!vowels[word[secondPointer]]) {
      secondPointer--
    } else {
      secondHalfVowelIndex = secondPointer
    }

    if (firstHalfVowelIndex !== '' && secondHalfVowelIndex !== '') {
       temp = word[firstHalfVowelIndex]
       word[firstHalfVowelIndex] = word[secondHalfVowelIndex]
       word[secondHalfVowelIndex] = temp

       firstPointer++
       secondPointer--

       firstHalfVowelIndex = ''
       secondHalfVowelIndex = ''
    }
  }
  return word
};

console.log(reverseVowels(['o','d','a','v','i','d','e','p']));

//e, d, i, v, a, d, o, p

console.log(reverseVowels(['a','e','i','o','d','p','t','k']));