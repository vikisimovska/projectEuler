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
  console.log(work);
}

// var work = [];
// var current = [];

// for (var i = 1000; i < 1500; i++){
//   if (checkPrime(i)){
//     for (var j = 1; j < 3333; j++){
//       current = [];
//       if (checkPrime(i + j)){
//         if (checkPrime(i + 2 * j)){
//           current.push(i);
//           current.push(i+j);
//           current.push(i+2*j);
//           work.push(current.slice());
//         }
//       }
//     }
//   }
//   work.push(current.slice());
// }