/**
 *  Split array into two arrays, which the difference of  the sum of arrays is mimimun
 * 
 *  transition function: f(n) = Max(f(n-1, mean - Vn ), f(n-1, mean))
 * 
 *  Inspired by knapsack problem
 */


var arr = [2, 1 ,123,234,5,1,432,34,5,342,99,98];
var arrMean = sum(arr) / 2;

function knapsack(arr, mean) {

    if (arr.length === 1 ) return arr;

    let elem = arr.slice(-1)[0];
    let rest = arr.slice(0, -1);

    return closer(knapsack(rest, mean - elem).concat([elem]), knapsack(rest, mean), mean)
}

function closer(a, b, mean) {
    let pre = Math.abs(sum(a) - mean);
    let last = Math.abs(sum(b) - mean);

    return pre < last? a : b;
}

function sum(arr) {
    return arr.reduce((a, b) => a + b, 0);
}


console.log(knapsack(arr, arrMean));
