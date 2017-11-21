var test1 = [0,5,6,7,9,10,100,101, 1000]
var test2 = [0,1,3,4,5,100,101]
var test3 = [-1]
var test4 = [-100, -90, -2,-1, 0, 2, 3, 4]

function sumRanges(nums) {
  var result = [], currNum, prevNum,
      currString = nums[0], arrow = "->"

  //handle edge case
  if (nums.length === 1) {
    return [String(nums[0])]
  }

  for (var i = 1; i < nums.length; i++ ) {
    currNum = nums[i]
    prevNum = nums[i-1]
    if ( Math.abs(currNum - prevNum) > 1 ) {
        if (prevNum !== currString) {
          currString += arrow + prevNum
        }
        result.push(String(currString))
        currString = currNum
      }
    }

  //at termination of loop, construct final string
  if (Math.abs( currNum - prevNum ) === 1) {
    currString += arrow + currNum
  }
  result.push(String(currString))

  return result;
}

function sumRangesTwo(nums) {
  var results = []
  for (var i =0, j = 0; j < nums.length; ++j) {
      if (j+1 < nums.length && nums[j+1] === (nums[j] +1)) {
        continue;
      }
      if (i === j) {
        results.push(nums[i]+"")
      } else {
        results.push(nums[i] + '->' + nums[j])
      }
      i = j+1
  }
  return results;
}

console.log(sumRangesTwo(test1), "TEST 1")
console.log(sumRangesTwo(test2), "TEST 2")
console.log(sumRangesTwo(test3), "TEST 3")
console.log(sumRangesTwo(test4), "TEST 4")