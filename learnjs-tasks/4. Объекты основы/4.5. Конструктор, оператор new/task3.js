'use strict';

function Accumulator(value) {
	this.value = value;

	this.read = () => {
		this.value += +prompt('Введите число', '');
	}
}

let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
accumulator.read(); // прибавляет введённое пользователем значение к текущему значению

alert(accumulator.value); // выведет сумму этих значений