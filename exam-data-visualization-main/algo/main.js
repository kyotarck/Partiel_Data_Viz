function twoSum(nums, target) {
  var map = {};

  for (var i = 0; i < nums.length; i++) {
    for (var j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }

  return [];
}

var nums = [2, 7, 11, 15];
var target = 9;

var result = twoSum(nums, target);
console.log(result);