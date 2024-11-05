class Solution {
    hasDuplicate(nums) {
        for(let i = 0; i < nums.length; i++){
            for(let k = i + 1; k < nums.length; k++){
                if(nums[i] === nums[k]){
                    console.log(nums[i] + '' + nums[k]);
                    return true;
                }
            }
        }
        return false;
    }
}