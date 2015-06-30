// https://projecteuler.net/problem=12

var findNumberOfDivisors = function(input){
  var root = Math.sqrt(input);
  var counter = 0;
  if (input / root === root){
    counter++;
  }
  for (var i = 0; i < root; i++){
    if (input%i === 0){
      counter += 2;
    }
  }
  return counter;
}

var traverseTriangularNums = function(){
  var work = 1;
  var toAdd = 2;
  while (findNumberOfDivisors(work) < 501){
    work += toAdd;
    toAdd ++;
  }
  console.log(work);
}