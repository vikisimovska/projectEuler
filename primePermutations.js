// https://projecteuler.net/problem=49

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

var isPermutationOfOthers = function(input1, input2, input3){
  var work = [];
  work.push(input1.toString().split(''), input2.toString().split(''), input3.toString().split(''));
  work[0] = work[0].sort().join('');
  work[1] = work[1].sort().join('');
  work[2] = work[2].sort().join('');
  return (work[0] === work[1] && work[0] === work[2]);
}

var work = [];
var current = [];

for (var i = 1000; i < 9999; i++){
  if (checkPrime(i)){
    for (var j = 1; j < 3333; j++){
      current = [];
      if (checkPrime(i + j)){
        if (checkPrime(i + 2 * j)){
          if (isPermutationOfOthers(i, i+j, i+2*j)){
            current.push(i);
            current.push(i+j);
            current.push(i+2*j);
            work.push(current.slice());
          }
        }
      }
    }
  }
}

work = work[1];
work = work[0].toString() + work[1].toString() + work[2].toString();

console.log(work);