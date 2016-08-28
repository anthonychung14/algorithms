//takes in pattern, outputs an array of values denoting suffix/prefix similarities
function longestPreSuf(pattern){
  var maxPattern = 0
  var patLen = pattern.length
  var skipList = new Array(patLen).fill(0)
  var idx = 1

  while(idx < patLen) {
    if(pattern[idx] === pattern[maxPattern]) {
      maxPattern++
      skipList[idx] = maxPattern
      idx++
    } else {
      if (maxPattern !== 0) {
        maxPattern = skipList[maxPattern-1]
      } else {
        skipList[idx] = 0;
        idx++
      }
    }
  }
  return skipList
}
console.log(longestPreSuf(['A', 'N', 'A', 'N', 'A', 'B']))