'use strict';

function sum(value) {
    let total = value;

    function sumEnv(value) {
        total += value;
        return sumEnv;
    }

    sumEnv[Symbol.toPrimitive] = function(hint) {
        return hint == 'string' ? total.toString() : total;
    }

    return sumEnv;
}

console.log( `${sum(1)(2)}` ); // == 3; // 1 + 2
console.log( `${sum(1)(2)(3)}` ); // == 6; // 1 + 2 + 3
console.log( `${sum(5)(-1)(2)}` ); // == 6
console.log( `${sum(6)(-1)(-2)(-3)}` ); // == 0
console.log( `${sum(0)(1)(2)(3)(4)(5)}` ); // == 15