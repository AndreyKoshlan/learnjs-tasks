// Используя setInterval.
function printNumbers1(from, to) {
	let timer = setInterval(() => {
		if (from >= to)
			clearInterval(timer);
		console.log(from++);
	}, 1000);
}

// Используя рекурсивный setTimeout
function printNumbers2(from, to) {
	let func = () => {
		console.log(from++);
		if (from <= to)
			setTimeout(func, 1000);
	}
	setTimeout(func, 1000);
}

printNumbers1(5, 10); // Используя setInterval.
printNumbers2(5, 10); // Используя рекурсивный setTimeout