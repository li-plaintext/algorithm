        function mSort(arr){
            var mid = Math.floor(arr.length / 2);

            if(mid > 0){
                var arrL = mSort(arr.slice(0,mid));
                var arrR = mSort(arr.slice(mid,arr.length));
                return merge(arrL, arrR);
            }else{
                return arr;
            }

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
            if(idxL < arrL.length){
                res = res.concat(arrL.slice(idxL));
            }
            if(idxR < arrR.length){
                res = res.concat(arrR.slice(idxR));
            }
            return res;
        }


