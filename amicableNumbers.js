// https://projecteuler.net/problem=21

getDivisors = function(input){
  var work = {}
  var toRoot = Math.sqrt(input);
  work[1] = true;
  for (var i = 2; i <= toRoot; i++){
    if (input % i === 0){
      work[i] = true;
      work[input/i] = true;
    }
  }

  work = Object.keys(work);
  for (var i = 0; i < work.length; i++){
    work[i] = Number(work[i]);
  }
  var sumOfFactors = work.reduce(function(prev, curr){return prev + curr});
  return sumOfFactors;
}

findAmicablePairsSum = function(limit){
  var work = {};
  var current;

  for (var i = 1; i < limit; i++){
    current = getDivisors(i);
    if (current < 10000 && i === getDivisors(current) && current !== i){
      work[current] = true;
      work[i] = true;
    }
  }

  work = Object.keys(work);
  for (var i = 0; i < work.length; i++){
    work[i] = Number(work[i]);
  }
  var result = work.reduce(function(prev, curr){return prev + curr});
  return result;
}