'use strict';

let n = 100;
for (let value = 2; value <= n; value++) {
	let isPrime = true;
	for (let denominator = 2; denominator < value; denominator++) {
		if (value % denominator === 0)
			isPrime = false;
	}
	if (isPrime === true)
		console.log(value);
}