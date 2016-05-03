
        function SelectionSort(arr){
            var res = [];
            var len = arr.length;
            for(var resIdx = 0 ; resIdx < len ; resIdx++){
                var min = arr.shift();
                var i = 0;
                while(i < arr.length){
                    if(arr[i] < min){
                        min = [arr[i], arr[i] = min].shift();
                        continue;
                    }
                    i++;
                }
                res.push(min);
            }
            return res;
        }

