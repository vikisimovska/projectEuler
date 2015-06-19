/* 
* @Author: humanityloaner
* @Date:   2015-06-19 10:36:20
* @Last Modified by:   humanityloaner
* @Last Modified time: 2015-06-19 10:49:23
*/

'use strict';

var checkPalin = function(numInput){
  var work = numInput.toString();
  var check = '';
  work.split('').map(function(value){check = value + check});
  return (check === work)? true : false;
}

var getThem = function(){
  var work = [];

  for (var i = 100; i < 1000; i++){
    for (var j = 100; j < 1000; j++){
      if (checkPalin(i * j)){
        work.push(i*j);
      }
    }
  }
  return Math.max.apply(this, work);
}

 