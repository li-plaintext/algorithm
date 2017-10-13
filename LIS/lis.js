var arr = [1,2,3,10]


function LIC(nums) {
    let res = [];

    
    return res; 
}


function binarySearch(nums, element, low, high) {
    let lo = low, 
        hi = high,
        mid = Math.floor((low + high) / 2);

    let midElem = nums[mid][nums[mid].length - 1];
    
    if( lo === mid ){
        return lo;
    } else if( midElem > element ) {
        return binarySearch(nums, element, low, mid)
    } else {
        return binarySearch(nums, element, mid, high)
    }
}


console.log(binarySearch(arr, 100, 0, arr.length))


