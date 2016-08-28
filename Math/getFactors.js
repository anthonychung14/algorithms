
function getFactors(n) {
  function helper(n, i, sub, res) {
    //while i2 is less than desired number. (as far as sqrt)
    while (i*i <= n) {
      //check to see if divisible
      if(n % i === 0) {                        
        sub.push([i, n/i])
        res = res.concat(sub)
        sub = []
        helper(n/i, i, sub, res)
      }
      i += 1
    }
    return res;
  }

  return helper(n, 2, [], [])
}

console.log(getFactors(12))