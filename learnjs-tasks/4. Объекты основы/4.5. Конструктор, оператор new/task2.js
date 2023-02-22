'use strict';

function Calculator() {
	this.read = () => {
		this.value1 = +prompt('Введите число 1', '');
		this.value2 = +prompt('Введите число 2', '');
	}

	this.sum = () => {
		return this.value1 + this.value2;   
	}

	this.mul = () => {
		return this.value1 * this.value2;
	}
}

let calculator = new Calculator();
calculator.read();
console.log(calculator);

alert( 'Sum=' + calculator.sum() );
alert( 'Mul=' + calculator.mul() );