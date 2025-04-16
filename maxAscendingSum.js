/*
1800. Maximum Ascending Subarray Sum
Given an array of positive integers nums, return the maximum possible sum of an strictly increasing subarray in nums.
A subarray is defined as a contiguous sequence of numbers in an array.
*/
var maxAscendingSum = function(nums) {
    let currentSum = nums[0];
    let maxSum = currentSum

    for(let i = 1; i < nums.length; i++){
        if(nums[i] > nums[i-1]){
            currentSum += nums[i];
        }else{
            currentSum = nums[i];
        }
        maxSum = Math.max(maxSum, currentSum)
    }
    return maxSum;
};
