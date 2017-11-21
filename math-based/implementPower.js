var myPow = function(x, n) {
    //Does this in logN time because we split it into two separate subproblems. 
    //leverages the fact that 1/2 * 1/2 in power land makes a 1!
    //memoizes it with temp

    if (n === 0) {return 1}
    var temp = myPow(x, parseInt(n/2))    
    
    //if n is a power of 2, we can return its square right away
    if (n%2 === 0) { return temp * temp }
    
    //otherwise we'd multiply our base by the same call
    if(n > 0) {
        return x*temp*temp;
    } else {
        
    //thinking about negative numbers of course!
        return (temp*temp)/x;
    }
};

console.log(myPow(3.89707,2))

