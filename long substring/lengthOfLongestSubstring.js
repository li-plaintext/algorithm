/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var res = {};
    var curPtr = -1;
    var max=0;
    
    for(var i=0; i<s.length; i++){
				if(res[s[i]] > curPtr) curPtr = res[s[i]];
				res[s[i]] = i;
				if(max < res[s[i]] - curPtr) max = res[s[i]] - curPtr;
    }
    

    console.log(res);
	
    return max;
};


console.log(lengthOfLongestSubstring('dvdf'))