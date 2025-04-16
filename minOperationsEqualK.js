/*
3375. Minimum Operations to Make Array Values Equal to K
You are given an integer array nums and an integer k.
An integer h is called valid if all values in the array that are strictly greater than h are identical.
For example, if nums = [10, 8, 10, 8], a valid integer is h = 9 because all nums[i] > 9 are equal to 10, but 5 is not a valid integer.
You are allowed to perform the following operation on nums:
Select an integer h that is valid for the current values in nums.
For each index i where nums[i] > h, set nums[i] to h.
Return the minimum number of operations required to make every element in nums equal to k. If it is impossible to make all elements equal to k, return -1.
*/

var minOperations = function(nums, k) {
    nums.sort((a,b) => a - b);
    let countK = 0, greater = 0, lastGreater = -1; smallerExists = false
    for(let num of nums){
        if(num === k){
            countK++
        }else if(num > k){
            if(lastGreater !== num){
                lastGreater = num;
                greater++
            }
        }else{
            smallerExists = true;
        }
    }
    if(countK === nums.length) return 0
    if(smallerExists) return -1
    return greater;
};
//-----------------SECOND APPROACH -------------------------------//
var minOperations = function(nums, k) {
    if(nums.some(num => num < k)) return - 1
    const greater = new Set()
    for(let num of nums){
        if(num > k){
            greater.add(num)
        }
    }
    return greater.size
};
