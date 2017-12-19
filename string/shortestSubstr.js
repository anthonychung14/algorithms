// <Pangram>

function shortestPanGram(alphabetHash, string) {
  let subString = '';
  const alphabetSize = Object.keys(alphabetHash).length;

  // check alphabetHash and stringFrequencyHash
  const stringFrequency = string.split('').reduce(
      (acc, curr) => {
        const frequency = acc[curr] + 1 || 0;
        acc[curr] = frequency;
        return acc;
      }, {}
  );

  const missingAlphabet = (alphabetHash, stringFrequency) => {
      Object.keys(alphabetHash).forEach(alphabet => {
        if (stringFrequency[alphabet]) return false;
      });

    return true;
  };

  if (alphabetSize > string.length || missingAlphabet(alphabetHash, stringFrequency)) return false;


  /*
  example2: { b: true, c: true, e: true }
  string: cccccccccccccccceeeeeeeppppb
  string2: ca -> return false ->
    -> c: 1, b: 0, e: 0 - count num of set in string

  return: ceeeeeeeppppb

    - sliding window
    - when all characters found, break;
    - attempt to minimize the length of the window
      - jump to last matching letter
        in set for string we're trying to build

  alphabet set: {a, b, c}
  string: baadcab
  => shortest substr -> cab

  string2: baaaaaaa // false
*/

  // iterate through string
    // if string[i] lookup in alphabetHash, add to string
        //

  let currString = '';
  let currTable = {};
  let minCurrString = string.length;

  // track whether or not we have each item in alphabet

  const charExists = (alphaHash, string) => alphaHash[string] || false;

  for (let i = 0; i < string.length; i++) {
    // true
    const characterExists = charExists(alphabetHash, string[i])

    if (characterExists) {
      // b
      currString = string[i];
      // { b: true }
      currTable[string[i]] = true;

      for (let j = i + 1; j < string.length; j++) {
        // ba
        currString += string[j];

        // true
        const nextCharExists = charExists(alphabetHash, string[j]);
        // update hash table

        if (nextCharExists) {
          currTable[string[j]] = true;
        }

        const tableSize = Object.keys(currTable).length;

        // when all characters met
         if (tableSize === alphabetSize) {

           // currString = baadc
           const foundSmallerString = currString.length < minCurrString.length;

            if (foundSmallerString) {
              minCurrString = currString;
            }
         };

        currTable = {};
      }
    }
  }

  return minCurrString;
}
