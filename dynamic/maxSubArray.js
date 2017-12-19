// 

var maxSubArray = function(nums) {
    //initialize all variables
    var localMax = nums[0];
    var ultMax = nums[0];
    var curr;

    //iterate through the collection
    for (var i = 1; i< nums.length; i++) {
        curr = nums[i];

        //localMax is either adding them togehter or starting from the curr
        localMax = Math.max(localMax+curr, curr);
        //the ultimate max is thus local vs. the ult that we had
        ultMax = Math.max(localMax, ultMax);
    }

    return ultMax;

};
