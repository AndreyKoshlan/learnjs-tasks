/*

Методы Math.round и toFixed, согласно документации, округляют до ближайшего целого числа: 0..4 округляется в меньшую сторону, тогда как 5..9 в большую сторону.

Например:

alert( 1.35.toFixed(1) ); // 1.4
Но почему в примере ниже 6.35 округляется до 6.3?

alert( 6.35 * (1+.toFixed(1) ); // 6.3
Как правильно округлить 6.35?

*/

/* 
	Ответ: 6.35 хранится в памяти как 6.349999... из-за особенностей 
	вычислений чисел с плавающей запятой. Для решения этой проблемы
	необходимо добавить малое число для заданной точности
*/


'use strict'

function roundDecimal(value, decimalPlace) {
	if (decimalPlace <= 0)
		return value.toFixed(decimalPlace)
	return (value + 10**(-decimalPlace-1)).toFixed(decimalPlace);
}

console.log( roundDecimal(6.35, 1) );