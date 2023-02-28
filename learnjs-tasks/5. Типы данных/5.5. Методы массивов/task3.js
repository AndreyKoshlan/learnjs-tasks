'use strict';

function filterRangeInPlace(arr, a, b) {
	let index = 0;
	while (index < arr.length) {
		let value = arr[index];
		if (value < a || value > b)
			arr.splice(index, 1);
		else
			index++;
	}
}

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

console.log( arr ); // [3, 1]