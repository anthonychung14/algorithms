var fibMemo = function(n) {
  var lib = {}
  var buildFib = function(n) {
    if (n < 2) {
      return n
    } else if (lib[n] !== undefined) {
      return lib[n]
    }
    else {      
      lib[n] = buildFib(n-1) + buildFib(n-2)
      return lib[n]
    }
  }
  return buildFib(n)
}

var fibTab = function(n) {
  var work = [0,1]
  for (var i = 2; i <= n ; i++) {
    work[i] = work[i-1] + work[i-2]
  }
  return work[n]
}
