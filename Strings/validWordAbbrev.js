/**
 * @constructor
 * @param {string[]} dictionary
 */
var ValidWordAbbr = function(dictionary) {
   this.dictionaryHash = {};
   var key, wordLength
   
   for (var i = 0; i < dictionary.length; i++) {
      wordLength = dictionary[i].length
      key = dictionary[i][0] + (wordLength-2)
      if (this.dictionaryHash[key] && this.dictionaryHash[key].indexOf(dictionary[i][wordLength-1]) > -1) {
        this.dictionaryHash[key].push(dictionary[i][wordLength-1])
      } else {
        this.dictionaryHash[key] = [dictionary[i][wordLength-1]]
      }       
   }    
};

/**
 * @param {string} word
 * @return {bool}
 */
ValidWordAbbr.prototype.isUnique = function(word) {
  var firstLetter = word[0]
  var lastLetter = word[word.length-1]
  var wordAbbrev = word.length-2
  var lookup = firstLetter + wordAbbrev
  var endings

  console.log(lastLetter)

  if(this.dictionaryHash[lookup]) {
    endings = this.dictionaryHash[lookup]    
    for (var i = 0; i < endings.length; i++) {      
      if (endings[i] === lastLetter) {
        return false
      }
    }
    return true;
  }
  return true    
};


var testDictionary = [ "deer", "door", "cake", "card" ]
var vwa = new ValidWordAbbr(testDictionary)
console.log(vwa.isUnique('caae'))


/**
 * Your ValidWordAbbr object will be instantiated and called as such:
 * var vwa = new ValidWordAbbr(dictionary);
 * vwa.isUnique("word");
 * vwa.isUnique("anotherWord");
 */