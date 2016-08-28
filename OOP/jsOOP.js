var fooz = function(val) {
  if (this instanceof fooz) {
    this.value = val  
  }
  else throw "your mother"
 
}
var baz = new fooz(2)

console.log(baz.value)

var foo = function(val) {  
  //constructor for val  
  var count = 0
  return function(v) {
    count += 1
    console.log(val*v+count)    
  }  
};

var bar = foo(2);
bar(3) // = 2 * 3 + 1
bar(4) // = 2 * 4 + 2
bar(10) // = 2 * 10 + 3