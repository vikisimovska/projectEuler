// https://projecteuler.net/problem=1


var run = function(){

  var threes = 3;
  var fives = 5;

  var result = 0
  var work = [];
  var otherWork = [];

  while (threes < 1000 || fives < 1000){
    result += threes;
    work.push(threes);
    if (fives % 3 !== 0 && fives < 1000){
      result += fives;
      otherWork.push(fives);
    }
    threes += 3;
    fives += 5;
  }

  // console.log(work);
  // console.log(otherWork);
  return result;
    
}

run();