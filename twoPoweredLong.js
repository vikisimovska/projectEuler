// https://projecteuler.net/problem=16


// for multiplying string by two
var multiplyByTwo = function(input){
  var carryOver = false;
  var result = '';
  var i = input.length; 
  var temp;

  while (i--){
    if (carryOver){
      temp = (Number(input[i]) * 2 + 1).toString();
    }
    else {
      temp = (Number(input[i]) * 2).toString();
    }
    if (temp.length === 2){
      carryOver = true;
      result = temp[1] + result;
    }
    else {
      carryOver = false;
      result = temp[0] + result;
    }
  }
  if (carryOver){
    result = "1" + result;
  }
  console.log(result);
}

