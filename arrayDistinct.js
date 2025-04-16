/*
3396. Minimum Number of Operations to Make Elements in Array Distinct
You are given an integer array nums. You need to ensure that the elements in the array are distinct. To achieve this, you can perform the following operation any number of times:

Remove 3 elements from the beginning of the array. If the array has fewer than 3 elements, remove all remaining elements.
Note that an empty array is considered to have distinct elements. Return the minimum number of operations needed to make the elements in the array distinct.
*/
var minimumOperations = function(nums) {
    let operacoes = 0;
    while(true){
        let seen = new Set();
        let hasDuplicate = false

        for(let i = 0; i < nums.length; i++){
            if(seen.has(nums[i])){
                hasDuplicate = true;
                break
            }
            seen.add(nums[i])
        }
        if(!hasDuplicate) break;

        nums. splice(0,3);
        operacoes++
    }

    return operacoes
};
