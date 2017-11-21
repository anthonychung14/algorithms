function superIsomorphicString(pattern, input) {

  var pat = pattern, h1, h2;

  var patLength, currChar, currInput, currCheck;
  var boolFlag = true;

  //There will be a problem with how copyInput is managed
  var copyInput;

  for (var i = 0; i < input.length; i++) {
    patLength = i
    copyInput = input.slice(0)
    h1 = {}, h2 = {}

    for (var j = 0; j < pattern.length; j++) {
      currChar = pattern[j]
      currInput = copyInput.splice(0, patLength)

      h1[currChar] = currInput
      h2[currInput] = currChar
    }

    for (var k = 0; k < pattern.length; k++) {
      currCheck = pattern[k]
      currCheck2 = h1[currCheck] //r from h2

      if (currCheck === h2[currCheck2] && currCheck2 === h2[currCheck]) {
        boolFlag = true
      } else {
        boolFlag = false
        break;
      }
    }
    if (boolFlag === true) { return true }
    else {continue}

  }
  return false;
}
