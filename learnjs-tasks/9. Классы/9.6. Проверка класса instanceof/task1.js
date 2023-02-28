function A() {}
function B() {}

A.prototype = B.prototype = {};

let a = new A();

alert( a instanceof B ); 

// instanceof проверяет, равен ли Class.prototype одному из прототипов в прототипной цепочке.
// так как прототипы A и B равны, то a instanceof B возвращает true