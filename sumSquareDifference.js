// https://projecteuler.net/problem=6

var toBeSquared = 0; 
var sumOfSquares = 0;

for (var i = 1; i < 101; i++){
  toBeSquared += i;
  sumOfSquares += (i * i);
}

toBeSquared = toBeSquared * toBeSquared;

console.log(toBeSquared - sumOfSquares);