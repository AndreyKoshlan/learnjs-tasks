'use strict';

function camelize(str) {
	let arr = str.split('-');
	arr = arr.map( (value, index) => {
		if (index === 0 || value.length <= 0)
			return value;
		return value[0].toUpperCase() + value.slice(1);
	});
	return arr.join('');
}

console.log(camelize("background-color")) // == 'backgroundColor';
console.log(camelize("list-style-image")) // == 'listStyleImage';
console.log(camelize("-webkit-transition")) // == 'WebkitTransition';