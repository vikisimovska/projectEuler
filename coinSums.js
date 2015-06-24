

var makeChange = function(total){
  var counter = 0; 
  var current;
  for (var a = 0; a < total + 1; a++){
    for (var b = 0; b < total/2 + 1; b++){
      for (var c = 0; c < total/5 + 1; c++){
        for (var d = 0; d < total/10 + 1; d++){
          for (var e = 0; e < total/20 + 1; e++){
            for (var f = 0; f < total/50 + 1; f++){
              for (var g = 0; g < total/100 + 1; g++){
                for (var h = 0; h < total/200 + 1; h++){
                  current = a*1 + b*2 + c*5 + d*10 + e*20 + f*50 + g*100 + h*200;
                  if (current === total){
                    counter++;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  // return counter;
  console.log(counter);
};