var giveFactorial = function(input){
  var work = 1;
  while (input--){
    work *= (input+1);
  }
  return work;
}

var breakAndFac = function(input){
  var work = input.toString();
  var result = 0;
  for (var i = 0; i < work.length; i++){
    result += giveFactorial(Number(work[i]));
  }
  return result;
}

var run = function(){
  var work = [];
  for (var i = 3; i < 10000000; i++){
    if (breakAndFac(i) === i){
      work.push(i);
    }
  }
  return work[0] + work[1];
}

run();