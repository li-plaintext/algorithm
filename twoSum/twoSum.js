/**
  Given nums = [2, 7, 11, 15], target = 9,
	
	Because nums[0] + nums[1] = 2 + 7 = 9,
	return [0, 1].
*/


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
	var list = {};
	for(var i=0;i<nums.length;i++){
		if(list.hasOwnProperty(target - nums[i]) )  {
			return [list[target - nums[i]],i];
		}
		list[nums[i]] = i; 
	}
};
