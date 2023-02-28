let fruits = ["Яблоки", "Груша", "Апельсин"];

// добавляем новое значение в "копию"
let shoppingCart = fruits;
shoppingCart.push("Банан");

// что в fruits?
alert( fruits.length ); // 4

/* Ответ:
	fruits - это массив, который как и любой другой объект, имеет ссылочный тип.
	Поэтому при добавлении элемента в shoppingCart, элемент появится и во fruits.

	Ответ: 4
*/