/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
/*
2537. Count the Number of Good Subarrays
Given an integer array nums and an integer k, return the number of good subarrays of nums.
A subarray arr is good if there are at least k pairs of indices (i, j) such that i < j and arr[i] == arr[j].
A subarray is a contiguous non-empty sequence of elements within an array.
*/
var countGood = function(nums, k) {
    let left = 0;
    let pairCount = 0;
    let freq = new Map();
    let goodSubarrays = 0;
    for(let right = 0; right < nums.length; right++){
        const currentNum = nums[right];
        pairCount += freq.get(currentNum) || 0;
        freq.set(currentNum, (freq.get(currentNum) || 0 ) + 1)

        while(pairCount >= k){
            goodSubarrays += nums.length - right;
            let leftNum = nums[left++]
            pairCount -= freq.get(leftNum) - 1
            freq.set(leftNum, freq.get(leftNum)-1)
        }
    }
    return goodSubarrays
};

