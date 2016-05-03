        function bSort(arr){
            for(var i = 0; i< arr.length; i++ ){
                for(var j = 1; j< arr.length - i; j++){
                    if(arr[j-1] > arr[j]){
                        arr[j] = [arr[j-1], arr[j-1] = arr[j]].shift(); // A swop B
                    }
                }
            }
            return arr;
        }


