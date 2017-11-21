function maxProduct(arr){
  var max = [], min = []
  max[0] = min[0] = arr[0]
  var result = arr[0]


  //TRICKY TRICKY. WATCH THE NEGATIVE NUMBERS
  for (let i = 1; i< arr.length; i++ ) {
    max[i]=Math.max(arr[i], max[i-1]*arr[i]);
    min[i]=Math.min(arr[i], min[i-1]*arr[i]);    
    result = Math.max(result, max[i], min[i]);
  }

  return result;
}

var arrayTest1 = [-2, 8,2, -1000, 2, -100, -20, -10000]

console.log(maxProduct(arrayTest1))