function mSort(arr){

    if(arr.length < 2){
        return arr;
    }

    var mid = Math.floor(arr.length / 2);
    var arrL = mSort(arr.slice(0,mid));
    var arrR = mSort(arr.slice(mid));
    return merge(arrL, arrR);
}
function merge(arrL, arrR){
    var idxL = 0;
    var idxR = 0;
    var res = [];
    while(idxL < arrL.length && idxR < arrR.length){
        if(arrL[idxL] <= arrR[idxR]){
            res.push(arrL[idxL]);
            idxL++;
        }else{
            res.push(arrR[idxR]);
            idxR++;
        }
    }
    return res.concat(arrL.slice(idxL), arrR.slice(idxR));
}


