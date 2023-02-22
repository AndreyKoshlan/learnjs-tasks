'use strict';

let a = prompt("Первое число?", 1);
let b = prompt("Второе число?", 2);

/* 
	Ошибка в этой строке, необходимо преобразовать строки к числовому типу
	alert(a + b); // 12
*/

alert(Number(a) + Number(b));