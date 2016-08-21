(function(){
	function hSort(arr){
		heapify(arr);

		var res = [];
		while(arr.length > 0){
			res.unshift(arr.shift());
			if(arr.length <= 0) break;
			arr.unshift(arr.pop());
			heapify(arr);
		}

		return res;
	}
	function heapify(arr){
		var idx = 0;

		for(var i = 0; i< arr.length; i++){
			var parrentIdx = getParentPos(i);
			var curIdx = i;

			while( parrentIdx >= 0 ){
				if(arr[parrentIdx] < arr[curIdx])
					swop(arr, parrentIdx, curIdx);
				curIdx = parrentIdx;
				parrentIdx = getParentPos(curIdx);
			}
		}
	}
	function swop(arr, a, b){
		var tmp = arr[a];
		arr[a] = arr[b];
		arr[b] = tmp;
	}
	function getParentPos(idx){
		if(idx <= 0){
			return -1;
		}

		if(idx % 2 === 0){
			return idx / 2;
		}else{
			return Math.floor(idx / 2);
		}
	}
	function getLeftPos(idx){
		return (2 * idx) + 1;
	}
	function getRightPos(idx){
		return (2 * idx) + 2;
	}

})();
