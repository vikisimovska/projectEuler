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

var findPrime = function(input){
var counter = 0;
var work = 1;

while (counter < input){
  work++;
  if (checkPrime(work)){
    counter++;
  }
}
return work;
}