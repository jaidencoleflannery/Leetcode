class Solution {
    hasDuplicate(nums) {
        let count = -1;
        let arr = [];
        let val, subval = 0;

        for(val of nums){
            let subcount = 0;

                //iterate through the array to check first
                for(subval of arr){
                    if(subval === val){
                        return true;
                    }
                    subcount++;
                }
            count++;
            arr[count] = val;
            console.log(arr);
        }
        return false;
    }
}