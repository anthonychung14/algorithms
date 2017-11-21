/**
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  *
  * don't worry about handling cyclical object structures.
  *
  */
function deepEquals(apple,orange){
   var values = [];
   var keys = [];
   keys = Object.keys(apple);
   keys.forEach(function(key){
      values.push(key);
   });
   var values2 = [];
   var keys2 = [];
   keys2 = Object.keys(orange);
   keys2.forEach(function(key){
      values2.push(key);
   });
   return (values == values2 && keys == keys2)
}
