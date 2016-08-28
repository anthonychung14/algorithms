var test1 = [8,1,2,3,0,5]
var test2 = [0,0,0,1,0,1,2,3,1,2,3,4,5,6,7]
var test3 = [3,2,6,4,5,1] //should be 3
var test4 = [3,4, -1, 0, 6, 2,3]
//should be 4

function LIS(arr) {
  
  //build memo table
  var memo = arr.map((e) => 1)  

  //runner with i out in front and j following
  //loop through the collection starting from idx1
  for (var i = 1; i < arr.length;i++) {
    //iterate through up until i
    for (var j = 0; j < i; j++) {
      //if a valid solution (increasing), j should be less
      if (arr[j] < arr[i]) {
        //if the memo table is greater than where the i is
        if( (memo[j]+1 ) > memo[i]) {
          //add one to the table
          memo[i] = memo[j] + 1
        }
      }
    }    
  }

  return memo 
}

console.log(LIS(test2))

