var string = "314159265358"
var target = 27182

function findAllMath(digits, target) {  
  for (var i = 1; i < digits.length; i++) {
    current = digits.substr(0, i)
    remaining = digits.substr(i, digits.length)    
    checkExp(0, Number(current), remaining, target, current)
  }
}


function findAllTheMath(num, target) {
  for (var i = 0; i < num.length; i++) {
    var current = num.substr(0, i)
    var remaining = num.substr(i, num.length)
    //fn eval(total, current, remaining, target, expr)
  }
}

function evalExp(numString) {
  result = ""
  for (var i = 0; i<numString.length; i++) { 
    var num = 
    switch(numString[i])

  }
}

function buildExp(total, current, remaining, target, expr) {
  if (remaining.length === 0) {
    if (total + Number(current) === Number(target)) {
      console.log("yo", expr + "=" + target)
    }
  } else {
    for (var i = 0; i < remaining.length; i++) {
      var current = remaining.substr(0, i)
      var remain = remaining.substr(i, remaining.length)
      //recurse over every possible case      
    }
  }
}




function checkExp(sum, previous, digits, target, expr) {
  //indicates that we've gotten to the end
  if (digits.length === 0) {
    if (sum + previous == Number(target)) {
      return expr.toString() + "=" + target.toString()
    }
  } else {
    for (var j = 1; j < digits.length; j++) {
      current = digits.substr(0, j)
      remaining = digits.substr(j, digits.length)
      checkExp(sum + previous, Number(current), remaining, target, expr.toString() + "+" +current.toString())    
      checkExp(sum, previous * Number(current), remaining, target, expr.toString() + "-"+ current.toString())
      checkExp(sum, previous/Number(current), remaining, target, expr.toString() + "*" + current.toString())
      checkExp(sum + previous, Number(-current), remaining, target, expr.toString() + "/" + current.toString())
    }
  }
}

findAllMath(string, target)