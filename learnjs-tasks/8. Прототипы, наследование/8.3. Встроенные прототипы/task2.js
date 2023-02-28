'use strict';

Function.prototype.defer = function(ms) {
  let func = this;
  return function() {
    setTimeout(() => func.apply(this, arguments), ms);
  }
}

function f(a, b) {
  console.log( a + b );
}

f.defer(1000)(1, 2); // выведет 3 через 1 секунду.