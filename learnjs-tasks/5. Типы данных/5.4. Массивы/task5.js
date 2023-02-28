'use strict';

// Алгоритм Кадана
function getMaxSubSum(arr) {
	let maxSum = 0;
	let currentSum = 0;
	arr.forEach((value) => {
		currentSum += value;
		if (currentSum < 0)
			currentSum = 0;
		if (currentSum > maxSum)
			maxSum = currentSum;
	});
	return maxSum;
}

console.log( getMaxSubSum([-1, 2, 3, -9]) ); //== 5 (сумма выделенных элементов)
console.log( getMaxSubSum([2, -1, 2, 3, -9]) ); //== 6
console.log( getMaxSubSum([-1, 2, 3, -9, 11]) ); //== 11
console.log( getMaxSubSum([-2, -1, 1, 2]) ); //== 3
console.log( getMaxSubSum([100, -9, 2, -3, 5]) ); //== 100
console.log( getMaxSubSum([1, 2, 3]) ); //== 6 (берём все)
console.log( getMaxSubSum([-1, -2, -3]) ); //= 0