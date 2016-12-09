/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
	var left = 0;
	var right = 0;
	var sum = 0;
	var res = [];
	nums.sort(function(a,b){return a - b})
	
	
	for(var i=0; i<nums.length -2 ; i++){
		if (i > 0 && nums[i] == nums[i-1]) continue;
		left = i + 1;
		right = nums.length - 1;
		
		while(left < right){
			sum = nums[left] + nums[right] + nums[i];
			if(sum === 0) {
				res.push([nums[i], nums[left], nums[right]]);
				while(left < right && nums[right] == nums[right-1]) right--;
				while(left < right && nums[left] == nums[left+1]) left++;
				right--;
				left++;
			}
			if(sum > 0) right--;
			if(sum < 0) left++;

		}
	}
	
  return res;
};

console.log(threeSum([-1,0,1,2,-1,-4]));

