// Given a non-negative number represented as an array of digits, plus one to the number.

// eg. [1,0,1] => [1,0,2]
//      [4, 9] => [5,0]

//Ex. 1 [ 9, 9 ,9 ] => [1, 0, 0, 0] => goes from 3 to 4 elements

//Ex. 2 [3, 0, 9, 9 ,9 ] => [3, 1, 0, 0, 0] => 

const array1 = [9,9,9] 
const array2 = [3,0,9,9,9]
const array3 = []
const array4 = [1,9]

const addOne = (arr) => {
  let pointer = arr.length-1  
  // Add one to end of array 
  // pointer = 4
  
  if(arr.length === 0) {return arr}
  
  arr[pointer] += 1
  //3,0,9,9,10
  // check to see if new value is greater than 9    
  
  if (arr[pointer] === 10) {    
    //while(value at pointer === 10) {
    while(arr[pointer] === 10) {
      arr[pointer] = 0
      pointer -= 1
      arr[pointer] += 1    
      
      if(arr[0] === 10) {        
        arr[pointer] = 0
        arr.unshift(1)
        break;
      }
    }
  }    
  return arr  
  // return array   
}
console.log(addOne(array4))
console.log(addOne(array3))
console.log(addOne(array2))
console.log(addOne(array1))