/*
34. Find first and last positionof element in a sorted array
Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.
If target is not found in the array, return [-1, -1].
You must write an algorithm with O(log n) runtime complexity.
*/
function findPosition(nums, target, findFirst) {
    let left = 0;
    let right = nums.length - 1;
    let pos = -1;
  
    while (right >= left) {
      let mid = left + Math.floor((right - left) / 2);
  
      if (nums[mid] === target) {
        pos = mid;
        if (findFirst) {
          right = mid - 1;
        } else {
          left = mid + 1;
        }
      } else if (nums[mid] > target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  
    return pos;
  }
  
  var searchRange = function (nums, target) {
    let first = findPosition(nums, target, true);
    let last = findPosition(nums, target, false);
  
    return [first, last];
  };
  
  // Exemplo de uso:
  console.log(searchRange([5, 7, 7, 8, 8, 10], 8)); // [3, 4]
  
