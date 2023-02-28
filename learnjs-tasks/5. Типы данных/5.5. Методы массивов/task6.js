'use strict';

function Calculator() {
	this.methods = {
		'+': (a, b) => a + b,
		'-': (a, b) => a - b
	};

	this.addMethod = (name, func) => {
		this.methods[name] = func;
	}

	this.calculate = (str) => {
		let arr = str.split(' ');
		let operator = arr[1];
		let func = this.methods[operator];
		if (!func)
			return undefined;
		return (func(+arr[0], +arr[2]));
	}
}

// 1 часть
let calc = new Calculator;

console.log( calc.calculate("3 + 7") ); // 10

// 2 часть
let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
console.log( result ); // 8