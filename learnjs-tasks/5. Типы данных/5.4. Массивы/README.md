| Задача | Файлы |
| --- | --- |
| 5.4.1 Скопирован ли массив? | [task1.js](task1.js) |
| 5.4.2 Операции с массивами | [task2.js](task2.js) |
| 5.4.3 Вызов в контексте массива | [task3.js](task3.js) |
| 5.4.4 Сумма введённых чисел | [task4.html](task4.html), [task4.js](task4.js) |
| 5.4.5 Подмассив наибольшей суммы | [task5.js](task5.js) |

# 5.4.1 Скопирован ли массив?
Что выведет следующий код?
```javascript
let fruits = ["Яблоки", "Груша", "Апельсин"];

// добавляем новое значение в "копию"
let shoppingCart = fruits;
shoppingCart.push("Банан");

// что в fruits?
alert( fruits.length ); // ?
```

**Решение**
fruits - это массив, который как и любой другой объект, имеет ссылочный тип. Поэтому при добавлении элемента в shoppingCart, элемент появится и во fruits. Ответ: 4

# 5.4.2 Операции с массивами
Давайте произведём 5 операций с массивом.

Создайте массив styles с элементами «Джаз» и «Блюз».
Добавьте «Рок-н-ролл» в конец.
Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
Удалите первый элемент массива и покажите его.
Вставьте Рэп и Регги в начало массива.
Массив по ходу выполнения операций:
```
Джаз, Блюз
Джаз, Блюз, Рок-н-ролл
Джаз, Классика, Рок-н-ролл
Классика, Рок-н-ролл
Рэп, Регги, Классика, Рок-н-ролл
```

**Решение**
```javascript
'use strict';

let styles = ['Джаз', 'Блюз'];
console.log('1.' + styles);

styles.push('Рок-н-ролл');
console.log('2.' +styles);

styles[Math.floor(styles.length / 2)] = 'Классика';
console.log('3.' +styles);

console.log( styles.shift() );
console.log('4.' +styles);

styles.unshift('Рэп', 'Регги');
console.log('5.' +styles);
```

# 5.4.3 Вызов в контексте массива
Каков результат? Почему?
```javascript
let arr = ["a", "b"];

arr.push(function() {
  alert( this );
});

arr[2](); // ?
```

**Решение**
Ответ: this будет ссылаться на объект arr, соответственно выводом в alert будут элементы массива arr: "a", "b" и функция.

# 5.4.4 Сумма введённых чисел
Напишите функцию sumInput(), которая:

Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
Подсчитывает и возвращает сумму элементов массива.
P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».

**Решение**
```javascript
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
```

# 5.4.5 Подмассив наибольшей суммы
На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].

Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.

Функция getMaxSubSum(arr) должна возвращать эту сумму.

Например:
```javascript
getMaxSubSum([-1, 2, 3, -9]) == 5 (сумма выделенных элементов)
getMaxSubSum([2, -1, 2, 3, -9]) == 6
getMaxSubSum([-1, 2, 3, -9, 11]) == 11
getMaxSubSum([-2, -1, 1, 2]) == 3
getMaxSubSum([100, -9, 2, -3, 5]) == 100
getMaxSubSum([1, 2, 3]) == 6 (берём все)
```

Если все элементы отрицательные – ничего не берём(подмассив пустой) и сумма равна «0»:
```javascript
getMaxSubSum([-1, -2, -3]) = 0
```

Попробуйте придумать быстрое решение: O(n^2), а лучше за О(n) операций.

**Решение за O(n)**
```javascript
'use strict';

// Алгоритм Кадана
function getMaxSubSum(arr) {
	let maxSum = 0;
	let currentSum = 0;
	arr.forEach((value) => {
		currentSum += value;
		if (currentSum < 0)
			currentSum = 0;
		if (currentSum > maxSum)
			maxSum = currentSum;
	});
	return maxSum;
}

console.log( getMaxSubSum([-1, 2, 3, -9]) ); //== 5 (сумма выделенных элементов)
console.log( getMaxSubSum([2, -1, 2, 3, -9]) ); //== 6
console.log( getMaxSubSum([-1, 2, 3, -9, 11]) ); //== 11
console.log( getMaxSubSum([-2, -1, 1, 2]) ); //== 3
console.log( getMaxSubSum([100, -9, 2, -3, 5]) ); //== 100
console.log( getMaxSubSum([1, 2, 3]) ); //== 6 (берём все)
console.log( getMaxSubSum([-1, -2, -3]) ); //= 0
```