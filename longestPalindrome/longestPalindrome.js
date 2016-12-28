/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
	var res = {};
	var start = -1;
	var max = "";
	var left , right = 0;
	
	
	for(var i=0; i<s.length; i++){
		if(res[s[i]] > start) {
			start = res[s[i]];
			
			left = start;
			right = i;
			while(right >= left){
				if(res[s[right]] !== res[s[left]]) break;
				
				
				right--;
				left++;
			}
			
			if(right < left && s.slice(start, i+1).length > max.length) max = s.slice(start, i+1);
			
		}
		res[s[i]] = i;
	}
	
	return max;
	
};


console.log(longestPalindrome("babad"));