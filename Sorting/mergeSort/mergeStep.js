const mergeArrays = (arr1, arr2) => {
  let point1 = 0, point2 = 0, result = []  
    
  if (arr1.length === 0) {
    return arr2
  } else if (arr2.length === 0) {
    return arr1
  }
  
  const sub = (i1, i2) => {
    if (i1 >= arr1.length) {
      result = result.concat(arr2.slice(i2))
      return;
    } else if(i2 >= arr2.length) {
      result = result.concat(arr1.slice(i1))
      return;
    }
    
    if (arr1[i1] > arr2[i2]) {
      result.push(arr2[i2])
      i2++      
    } else {
      result.push(arr1[i1])
      i1++    
    }  
    sub(i1, i2)    
  }  
  sub(0,0)  
  return result
}

const mergeArraysIt = (arr1, arr2) => {
  let point1 = 0, point2 = 0, result = []  
  
  while(point1 <= arr1.length-1 && point2 <= arr2.length-1) {
    if (arr1[point1] > arr2[point2]) {
      result.push(arr2[point2])
      point2++      
    } else {
      result.push(arr1[point1])
      point1++    
    }  
  }
  
  if (point1 >= arr1.length) {
      result = result.concat(arr2.slice(point2))      
    } else if(point2 >= arr2.length) {
      result = result.concat(arr1.slice(point1))      
    }
    
  return result
}

const array1 = [4,5,6,10]
const array2 = [1,2,11,20]