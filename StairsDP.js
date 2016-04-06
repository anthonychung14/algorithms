//Should I return the results array or implement the same solution from bottom up?

var countStairsDP = function (n, arraySolutions) {
  //if not enough steps remaining, do not count it
  if ( n < 0) {
    return 0;
  
  //you've reached the right number of stairs
  } else if (n === 0) {
    return 1;
  
  //if you can locate the number within the solutions array
  //return that number. 
  // This is the memoization
  } else if (arraySolutions[n] > -1) {
    return arraySolutions[n]
  

  //DP part: breaking it into further subproblems
  } else {
    arraySolutions[n] = countStairsDP(n-1, arraySolutions) + countStairsDP(n-2, arraySolutions) + countStairsDP(n-3, arraySolutions)
    return arraySolutions[n]
  }

}

countStairsDP(4, [])

//TODO: Implement iterative solution via DP. Return integer of how many combos there are

var countStairsBottom = function(n) {
  var count = 0;
  for (var i = 0; i < n; i++) {
    if (i = 0) {
      count++
    } else if {
      

    }

  }
}