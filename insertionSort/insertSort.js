        function insertSort(arr){
            var res = arr.splice(0,1);
            while(arr.length > 0){
                var cur = arr.shift();
                for(var i = 0; i < res.length; i++){
                    if(res[i] > cur){
                        res.splice(i,0,cur);
                        break;
                    }else if(i === (res.length - 1) ){
                        res.push(cur);
                        break;
                    }
                }
            }
            return res;
        }
