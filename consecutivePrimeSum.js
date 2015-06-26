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

var findPrimeSum = function(input){
  var work = 0;

  var primeToAdd = 2;

  var primesBelowMil = [];

  while (work < input){
    if (checkPrime(primeToAdd)){
      if (work + primeToAdd > input){
        break;
      }
      work += primeToAdd;
      primes.push(primeToAdd);
    }
    primeToAdd++;
  }
  console.log(work);
}


findPrimeSum(1000);