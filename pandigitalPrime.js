// https://projecteuler.net/problem=41

var checkPrime = function(input){
  if (input === 1){
    return false;
  }
  else if (input === 2){
    return true;
  }

  var root = Math.sqrt(input);
  var check = true;
  for (var i = 2; i < root+1; i++){
    if (input % i === 0){
      check = false;
    }
  }
  return check;
}

var usedOnlyOnce = function(input){
  var work = input.toString();
  var check = {};

  for (var i = 0; i < work.length; i++){
    if (check[work[i]]){
      check[work[i]]++;
    }else {
      check[work[i]] = 1;
    }
  }
  
}