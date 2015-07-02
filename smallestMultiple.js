// https://projecteuler.net/problem=5

var check = function(input){
	var check = true;
	for (var i = 1; i < 21; i++){
		if (input % i !== 0){
			check = false;
		}
	}
	return check;
}

var lookFor = function(){
	var count = 1;
	while (!check(count)){
		count++;
	}
	return count;
}