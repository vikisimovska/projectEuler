// https://projecteuler.net/problem=15

var latticePaths = function(n){
	var work = [1];
	var temmp;

	while (work.length < n+1){
		temp = 1;
		for (var i = 1; i < work.length; i++){
			temp = work[i] + temp;
			work[i] = temp;
		}
		work.push(2*temp);
	}
	return work[work.length-1];
}