/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  var left = 0;
	var right = 0;
	var sum = 0;
	var res = [];
	nums.sort(function(a,b){return a - b})
	
	for(var j=0; j<nums.length - 3 ; j++){
		if (j > 0 && nums[j] == nums[j-1]) continue;
		
		
		for(var i=j+1; i<nums.length -2 ; i++){
			if (i > j+1 && nums[i] == nums[i-1]) continue;
			left = i + 1;
			right = nums.length - 1;

			while(left < right){
				sum = nums[left] + nums[right] + nums[i] + nums[j];
				if(sum === target) {
					res.push([nums[j], nums[i], nums[left], nums[right]]);
					while(left < right && nums[right] == nums[right-1]) right--;
					while(left < right && nums[left] == nums[left+1]) left++;
					right--;
					left++;
				}
				if(sum > target) right--;
				if(sum < target) left++;

			}
		}
	
	}
	
  return res;
};