var shortestDistance = function(words, word1, word2) {
    var first = -1, second = -1, curr, shortestDist = Number.POSITIVE_INFINITY;


    for (var i = 0 ; i< words.length; i++) {
        curr = words[i];
        if (curr === word1) {
          first = i;
        } else if (curr === word2) {
          second = i;
        }
      if(first !== -1 && second !== -1) {
        shortestDist = Math.min(shortestDist, Math.abs(second-first));
      }
    }

  return shortestDist;

};