// https://projecteuler.net/problem=9
var c;
for (var i = 1; i < 1000; i++){
  for (var j = i+1; j < 1001; j++){
    c = Math.sqrt(i*i + j*j);
    if ((i + j + c) === 1000){
      console.log(i * j * c);
    }
  }
}