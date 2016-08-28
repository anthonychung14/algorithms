var arr = [0,1,0,2,1,0,1,3,2,1,2,1]

function rainWater(height){
  var maxSeenRight = new Array(height.length).fill(0)
  var maxSeenLeft = 0;
  var globalMax = 0;
  var rainAccum = 0;

  //iterate from the end to the beginning
  for (var i = height.length-1; i >= 0; i--) { 
    //is 1 greater than 0? yas
    if(height[i] > globalMax) {      
      //globalMax now set to height
      globalMax = height[i]      
      //set maxSeenRight to the newly discovered globalMax
      maxSeenRight[i] = globalMax
    } else {      
      //default value is set to globalMax because GM hasn't been beat yet
      maxSeenRight[i] = globalMax;
    }
  }
  //Start accumulating rainwater by updating maxSeenLeft
  for (var i = 0; i < height.length; i++) { 
    //Add the min of maxLeft and maxRight - height (or 0)
    rainAccum = rainAccum + Math.max(Math.min(maxSeenLeft, maxSeenRight[i]) - height[i], 0)    
    //update the maxSeenLeft if we encounter a larger tower from LTR
    if(height[i] > maxSeenLeft) {
      maxSeenLeft = height[i]
    }
  }
  return rainAccum
}

function rainWater2(height) {
  var i;
  var res = 0
  var n = height.length
  if (height.length < 1) {return res}

  var ltr = new Array(height.length).fill(0)
  var rtl = new Array(height.length).fill(0)

  ltr[0] = height[0]
  for (var i = 1; i < n; i++) {
    ltr[i] = Math.max(ltr[i-1], height[i])
  }

  rtl[n-1] = height[n-1]
  for (var i = n-2; i >= 0; i--) {
    rtl[i] = Math.max(rtl[i+1], height[i])
  }

  for (var i =0; i < n; i++) {
    res += Math.min(ltr[i], rtl[i]) - height[i]
  }
  return res;
}

console.log(rainWater2(arr))