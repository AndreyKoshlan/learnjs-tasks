'use strict';

function fib(n) {
	let cache = new Map();

	function fibOptimized(n) {
		if (n <= 2)
			return 1;
		let nMinus2 = cache.get(n - 2) ?? fibOptimized(n - 2);
		let nMinus1 = cache.get(n - 1) ?? fibOptimized(n - 1);
		let result = nMinus2 + nMinus1;
		if (!cache.has(n))
			cache.set(n, result);
		return result;
	}

	return fibOptimized(n);
}

console.log(fib(3)); // 2
console.log(fib(7)); // 13
console.log(fib(77)); // 5527939700884757