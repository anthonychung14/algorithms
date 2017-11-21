var twoSum = function(nums, target) {
    var hash = {}, result = [];
    var toFind, curr, sol;
    for (var i=0; i< nums.length;i++) {
        curr = nums[i];
        hash[curr] = target - curr;
    }    

    for (var j=0; j< nums.length;j++) {    
        curr = nums[j];
        toFind = target - curr;
        
        if (hash[toFind]) {
            result.push(j, nums.indexOf(toFind));
            return result;
        }        
    }
    return false    
};

console.log(twoSum([2,3,4], 5))