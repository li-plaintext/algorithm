(function(){
	function qSort(arr){
		if(arr.length < 2){
		    return arr;
		}
		var pivot = arr.pop();
		var left  = qSort(arr.filter(function(elmt){
		    return elmt <= pivot;
		}));
		var right = qSort(arr.filter(function(elmt){
		    return elmt > pivot;
		}));
		return left.concat([pivot],right);
	}
})();