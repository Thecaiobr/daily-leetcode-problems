/*
2176. Count Equal and Divisible Pairs in an Array
Given a 0-indexed integer array nums of length n and an integer k, return the number of pairs (i, j)
where 0 <= i < j < n, such that nums[i] == nums[j] and (i * j) is divisible by k.
*/
var countPairs = function(nums, k) {
    let freq = new Map();
    let count = 0;

    for(let j = 0; j < nums.length; j++){
        let num = nums[j];
        if(freq.has(num)){
            for(let i of freq.get(num)){
                if((i * j) % k === 0){
                    count++;
                }
            }
        }
        if(!freq.has(num)){
            freq.set(num,[])
        }
        freq.get(num).push(j)
    }
    return count;
};

// ----------------------------SECOND APPROACH----------------------------//
var countPairs = function(nums, k) {
    let count = 0;

    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] === nums[j] && (i * j) % k === 0){
                count++
            }
        }
    }
    return count;
};
