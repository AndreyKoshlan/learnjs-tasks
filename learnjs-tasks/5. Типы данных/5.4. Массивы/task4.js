function sumInput() {
	let valueArray = [];
	while (userPrompt = prompt('Введите значение', '')) {
		let value = +userPrompt;
		if (!isFinite(value))
			break;
		valueArray.push(+userPrompt);
	}
	return valueArray.reduce((a, b) => a + b, 0);
}

alert(`Сумма: ${sumInput()}`);