'use strict';

function random(min, max) {
	return min + (Math.random() * (max - min));
}

console.log( random(1, 5) ); // 1.2345623452
console.log( random(1, 5) ); // 3.7894332423
console.log( random(1, 5) ); // 4.3435234525