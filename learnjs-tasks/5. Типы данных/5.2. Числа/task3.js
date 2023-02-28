'use strict';

function readNumber() {
	let userPrompt;
	do {
		userPrompt = prompt('Введите число', '');
		if (!userPrompt)
			return null;
	} while (!isFinite(+userPrompt));
	return +userPrompt;
}

alert( `Вы ввели: ${readNumber()}` );