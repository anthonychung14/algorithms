 var isPowerOfFour = function(num) {
    if (num === 1) {
        return true;
    } else if (num % 4 === 0) { 
        return isPowerOfFour(num/4);
    } else {
        return false;
    }
};

//console.log(isPowerOfFour(16))

var reverseString = function(s) {
    let temp;
    const length = s.length
    s = s.split('')
    for (var i = 0; i < Math.floor(length/2); i++) {
        temp = s[i];
        s[i] = s[s.length-1-i];
        console.log(s[i], s[s.length-1-i])
        s[length-1-i] = temp;
    }
    return s.join('');
};

console.log(reverseString('hello'))

