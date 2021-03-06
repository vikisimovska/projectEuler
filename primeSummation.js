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

var sumUpPrimes = function(limit){
  var result = 0;
  for (var i = 0; i < limit; i++){
    result += (checkPrime(i))? i : 0;
  }
  return result;
}