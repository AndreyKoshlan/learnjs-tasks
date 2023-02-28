| Задача | Файлы |
| --- | --- |
| 5.2.1 Сумма пользовательских чисел | [task1.html](task1.html), [task1.js](task1.js) |
| 5.2.2 Почему 6.35.toFixed(1) == 6.3? | [task2.js](task2.js) |
| 5.2.3 Ввод числового значения | [task3.html](task3.html), [task3.js](task3.js) |
| 5.2.4 Бесконечный цикл по ошибке | [task4.js](task4.js) |
| 5.2.5 Случайное число от min до max | [task5.js](task5.js) |
| 5.2.6 Случайное целое число от min до max | [task6.js](task6.js) |

# 5.2.1 Сумма пользовательских чисел
Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) и после показывает их сумму.

**Решение**
```javascript
'use strict';

let value1 = +prompt('Введите первое число', '');
let value2 = +prompt('Введите второе число', '');
alert(value1 + value2);
```

# 5.2.2 Почему 6.35.toFixed(1) == 6.3?
Методы Math.round и toFixed, согласно документации, округляют до ближайшего целого числа: 0..4 округляется в меньшую сторону, тогда как 5..9 в большую сторону.

Например:
```javascript
alert( 1.35.toFixed(1) ); // 1.4
```
Но почему в примере ниже 6.35 округляется до 6.3?
```javascript
alert( 6.35.toFixed(1) ); // 6.3
```
Как правильно округлить 6.35?

**Решение**
```javascript
/* 
	Ответ: 6.35 хранится в памяти как 6.349999... из-за особенностей 
	вычислений чисел с плавающей запятой. Для решения этой проблемы
	необходимо добавить малое число для заданной точности
*/


'use strict'

function roundDecimal(value, decimalPlace) {
	if (decimalPlace <= 0)
		return value.toFixed(decimalPlace)
	return (value + 10**(-decimalPlace-1)).toFixed(decimalPlace);
}

console.log( roundDecimal(6.35, 1) );
```

# 5.2.3 Ввод числового значения
Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор, пока посетитель его не введёт.

Функция должна возвращать числовое значение.

Также надо разрешить пользователю остановить процесс ввода, отправив пустую строку или нажав «Отмена». В этом случае функция должна вернуть null.

**Решение**
```javascript
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
```

# 5.2.4 Бесконечный цикл по ошибке
Этот цикл – бесконечный. Он никогда не завершится, почему?

**Решение**
Ответ: ошибка точности. Значение i не будет ровно 10, поэтому цикл будет продолжаться бесконечно и переменная i превысит число 10.

# 5.2.5 Случайное число от min до max
Встроенный метод Math.random() возвращает случайное число от 0 (включительно) до 1 (но не включая 1)

Напишите функцию random(min, max), которая генерирует случайное число с плавающей точкой от min до max (но не включая max).

Пример работы функции:
```javascript
alert( random(1, 5) ); // 1.2345623452
alert( random(1, 5) ); // 3.7894332423
alert( random(1, 5) ); // 4.3435234525
```

**Решение**
```javascript
'use strict';

function random(min, max) {
	return min + (Math.random() * (max - min));
}

console.log( random(1, 5) ); // 1.2345623452
console.log( random(1, 5) ); // 3.7894332423
console.log( random(1, 5) ); // 4.3435234525
```

# 5.2.6 Случайное целое число от min до max
Напишите функцию randomInteger(min, max), которая генерирует случайное целое (integer) число от min до max (включительно).

Любое число из интервала min..max должно появляться с одинаковой вероятностью.

Пример работы функции:
```javascript
alert( randomInteger(1, 5) ); // 1
alert( randomInteger(1, 5) ); // 3
alert( randomInteger(1, 5) ); // 5
```

**Решение**
```javascript
'use strict';

function randomInteger(min, max) {
	return min + Math.floor( (Math.random() * (max - min + 1) ));
}

console.log( randomInteger(1, 5) ); // 1
console.log( randomInteger(1, 5) ); // 3
console.log( randomInteger(1, 5) ); // 5
```