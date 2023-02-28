'use strict';

function randomInteger(min, max) {
	return min + Math.floor( (Math.random() * (max - min + 1) ));
}

console.log( randomInteger(1, 5) ); // 1
console.log( randomInteger(1, 5) ); // 3
console.log( randomInteger(1, 5) ); // 5