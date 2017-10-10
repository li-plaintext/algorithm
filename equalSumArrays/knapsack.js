/**
 *  Split array into two array, which the difference of  the sum of arrays is mimimun
 */


var arr = [104,1,2,3,100,1,3,4,5,6,7,8];
var mean = sum(arr) / 2;

function knapsack(arr) {

    if (arr.length === 1 ) return arr;

    let elem = arr.slice(-1)[0];
    let rest = arr.slice(0, -1);
    let curMax = knapsack(rest);
    
    return closer(curMax.concat([elem]), curMax)
}

console.log(knapsack(arr));

function closer(a, b) {
    let pre = Math.abs(sum(a) - mean);
    let last = Math.abs(sum(b) - mean);

    return pre < last? a : b;
}

function sum(arr) {
    return arr.reduce((a, b) => a + b, 0);
}
