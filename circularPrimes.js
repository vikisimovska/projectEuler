// https://projecteuler.net/problem=35

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

var isCircularPrime = function(input){
  var work = input.toString().split('');

  for (var i = 0; i < work.length; i++){
    if (!checkPrime(Number(work.join('')))){
      return false;
    }
    work.push(work.shift());
  }
  return true;
}

var counter = 0;

for (var i = 2; i < 1000000; i++){
  if (isCircularPrime(i)){
    counter++;
  }
}

console.log(counter);