'use strict';

let userPrompt;
do {
	userPrompt = prompt('Введите число больше 100', '');
} while (userPrompt <= 100 && userPrompt != null)

if (userPrompt)
	alert(`Вы ввели: ${userPrompt}`);