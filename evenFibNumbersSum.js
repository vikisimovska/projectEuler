var checkEven = function(input){
  return (input % 2 === 0)? true: false;
}

var goThroughFib = function(){
  var work = [1, 2];
  var counter = 0;

  while (work[0] < 4000000){
    var temp = work[0];
    work[0] = work[1];
    work[1] = temp + work[0];
    if (checkEven(temp)){
      counter += temp;
    }
  }
  console.log(counter);
}