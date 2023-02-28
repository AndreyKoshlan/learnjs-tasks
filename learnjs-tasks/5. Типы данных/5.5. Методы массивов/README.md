| Задача | Файлы |
| --- | --- |
| 5.5.1 Переведите текст вида border-left-width в borderLeftWidth | [task1.js](task1.js) |
| 5.5.2 Фильтрация по диапазону | [task2.js](task2.js) |
| 5.5.3 Фильтрация по диапазону "на месте" | [task3.js](task3.js) |
| 5.5.4 Сортировать в порядке по убыванию | [task4.js](task4.js) |
| 5.5.5 Скопировать и отсортировать массив | [task5.js](task5.js) |
| 5.5.6 Создать расширяемый калькулятор | [task6.js](task6.js) |
| 5.5.7 Трансформировать в массив имён | [task7.js](task7.js) |
| 5.5.8 Трансформировать в объекты | [task8.js](task8.js) |
| 5.5.9 Отсортировать пользователей по возрасту | [task9.js](task9.js) |
| 5.5.10 Перемешайте массив | [task10.js](task10.js) |
| 5.5.11 Получить средний возраст | [task11.js](task11.js) |
| 5.5.12 Оставить уникальные элементы массива | [task12.js](task12.js) |
| 5.5.13 Создайте объект с ключами из массива | [task13.js](task13.js) |

# 5.5.1 Переведите текст вида border-left-width в borderLeftWidth
Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
То есть дефисы удаляются, а все слова после них получают заглавную букву.
Примеры:
```javascript
camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
```
P.S. Подсказка: используйте split, чтобы разбить строку на массив символов, потом переделайте всё как нужно и методом join соедините обратно.

**Решение**
```javascript
'use strict';

function camelize(str) {
	let arr = str.split('-');
	arr = arr.map( (value, index) => {
		if (index === 0 || value.length <= 0)
			return value;
		return value[0].toUpperCase() + value.slice(1);
	});
	return arr.join('');
}

console.log(camelize("background-color")) // == 'backgroundColor';
console.log(camelize("list-style-image")) // == 'listStyleImage';
console.log(camelize("-webkit-transition")) // == 'WebkitTransition';
```

# 5.5.2 Фильтрация по диапазону
Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет элементы со значениями больше или равными a и меньше или равными b и возвращает результат в виде массива.
Функция должна возвращать новый массив и не изменять исходный.
Например:
```javascript
let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (совпадающие значения)

alert( arr ); // 5,3,8,1 (без изменений)
```

**Решение**
```javascript
'use strict';

function filterRange(arr, a, b) {
	return arr.filter((value) => (value >= a && value <= b));
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

console.log( filtered ); // 3,1 (совпадающие значения)

console.log( arr ); // 5,3,8,1 (без изменений)
```

# 5.5.3 Фильтрация по диапазону "на месте"
Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.
Функция должна изменять принимаемый массив и ничего не возвращать.
Например:
```javascript
let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

alert( arr ); // [3, 1]
```

**Решение**
```javascript
'use strict';

function filterRangeInPlace(arr, a, b) {
	let index = 0;
	while (index < arr.length) {
		let value = arr[index];
		if (value < a || value > b)
			arr.splice(index, 1);
		else
			index++;
	}
}

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

console.log( arr ); // [3, 1]
```

# 5.5.4 Сортировать в порядке по убыванию
```javascript
let arr = [5, 2, 1, -10, 8];

// ... ваш код для сортировки по убыванию

alert( arr ); // 8, 5, 2, 1, -10
```

**Решение**
```javascript
'use strict';

let arr = [5, 2, 1, -10, 8];

// ... ваш код для сортировки по убыванию
arr.sort((a, b) => b - a);

console.log( arr ); // 8, 5, 2, 1, -10
```

# 5.5.5 Скопировать и отсортировать массив
У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.
Создайте функцию copySorted(arr), которая будет возвращать такую копию.
```javascript
let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (без изменений)
```

**Решение**
```javascript
'use strict';

function copySorted(arr) {
	return arr.slice().sort();
}

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

console.log( sorted ); // CSS, HTML, JavaScript
console.log( arr ); // HTML, JavaScript, CSS (без изменений)
```

# 5.5.6 Создать расширяемый калькулятор
Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.
Задание состоит из двух частей.
Во-первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2" в формате «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает результат. Метод должен понимать плюс + и минус -.
Пример использования:
let calc = new Calculator; alert( calc.calculate("3 + 7") ); // 10
Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции. Он принимает оператор name и функцию с двумя аргументами func(a,b), которая описывает его.
Например, давайте добавим умножение \\*, деление / и возведение в степень \\*\\*:
let powerCalc = new Calculator; powerCalc.addMethod("\\*", (a, b) => a \\* b); powerCalc.addMethod("/", (a, b) => a / b); powerCalc.addMethod("\\*\\*", (a, b) => a \\*\\* b); let result = powerCalc.calculate("2 \\*\\* 3"); alert( result ); // 8
Для этой задачи не нужны скобки или сложные выражения.
Числа и оператор разделены ровно одним пробелом.
Не лишним будет добавить обработку ошибок.

**Решение**
```javascript
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
```

# 5.5.7 Трансформировать в массив имён
У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.
Например:
```javascript
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = /* ... ваш код */

alert( names ); // Вася, Петя, Маша
```

**Решение**
```javascript
'use strict';

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = users.map((value) => value.name);

console.log( names ); // Вася, Петя, Маша
```

# 5.5.8 Трансформировать в объекты
У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.
Напишите код, который создаст ещё один массив объектов с параметрами id и fullName, где fullName – состоит из name и surname.
Например:
```javascript
let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

let usersMapped = /* ... ваш код ... */

/*
usersMapped = [
  { fullName: "Вася Пупкин", id: 1 },
  { fullName: "Петя Иванов", id: 2 },
  { fullName: "Маша Петрова", id: 3 }
]
*/

alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // Вася Пупкин
```
Итак, на самом деле вам нужно трансформировать один массив объектов в другой. Попробуйте использовать =>. Это небольшая уловка.

**Решение**
```javascript
'use strict';

let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

let usersMapped = users.map((value) => new Object({
	fullName: value.name + " " + value.surname,
	id: value.id
}));

/*
usersMapped = [
  { fullName: "Вася Пупкин", id: 1 },
  { fullName: "Петя Иванов", id: 2 },
  { fullName: "Маша Петрова", id: 3 }
]
*/

console.log( usersMapped );
console.log( usersMapped[0].id ) // 1
console.log( usersMapped[0].fullName ) // Вася Пупкин

```

# 5.5.9 Отсортировать пользователей по возрасту
Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.
Например:
```javascript
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [ vasya, petya, masha ];

sortByAge(arr);

// теперь: [vasya, masha, petya]
alert(arr[0].name); // Вася
alert(arr[1].name); // Маша
alert(arr[2].name); // Петя
```

**Решение**
```javascript
'use strict';

function sortByAge(users) {
    users.sort((a, b) => a.age - b.age);
}

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [ vasya, petya, masha ];

sortByAge(arr);

// теперь: [vasya, masha, petya]
console.log(arr[0].name); // Вася
console.log(arr[1].name); // Маша
console.log(arr[2].name); // Петя
```

# 5.5.10 Перемешайте массив
Напишите функцию shuffle(array), которая перемешивает (переупорядочивает случайным образом) элементы массива.
Многократные прогоны через shuffle могут привести к разным последовательностям элементов. Например:
```javascript
let arr = [1, 2, 3];

shuffle(arr);
// arr = [3, 2, 1]

shuffle(arr);
// arr = [2, 1, 3]

shuffle(arr);
// arr = [3, 1, 2]
// ...
```
Все последовательности элементов должны иметь одинаковую вероятность. Например, [1,2,3] может быть переупорядочено как [1,2,3] или [1,3,2], или [3,1,2] и т.д., с равной вероятностью каждого случая.

**Решение**
```javascript
'use strict';

function randomInteger(min, max) {
    return min + Math.floor( (Math.random() * (max - min + 1) ));
}

function shuffle(arr) {
    arr.forEach((value, index) => {
        let randomIndex = randomInteger(index, arr.length-1);
        [arr[index], arr[randomIndex]] = [arr[randomIndex], arr[index]];
    });
}

let arr = [1, 2, 3];

shuffle(arr);
console.log(arr);
// arr = [3, 2, 1]

shuffle(arr);
console.log(arr);
// arr = [2, 1, 3]

shuffle(arr);
console.log(arr);
// arr = [3, 1, 2]
// ...
```

# 5.5.11 Получить средний возраст
Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.
Формула вычисления среднего арифметического значения: (age1 + age2 + ... + ageN) / N.
Например:
```javascript
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28
```

**Решение**
```javascript
'use strict';

function getAverageAge(users) {
    return users.reduce((sum, user) => sum + (user.age / users.length), 0);
}

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

console.log( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28
```

# 5.5.12 Оставить уникальные элементы массива
Пусть arr – массив строк.
Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.
Например:
```javascript
function unique(arr) {
  /* ваш код */
}

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

alert( unique(strings) ); // кришна, харе, :-O
```

**Решение**
```javascript
function unique(arr) {
    viewed = new Map();
    newArray = [];
    arr.forEach((value) => {
        if (!viewed.has(value))
            newArray.push(value);
        viewed.set(value, true);
    });
    return newArray;
}

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

console.log( unique(strings) ); // кришна, харе, :-O
```

# 5.5.13 Создайте объект с ключами из массива
Допустим, мы получили массив пользователей в виде {id:..., name:..., age:... }.
Создайте функцию groupById(arr), которая создаст из него объект с id в качестве ключа и элементами массива в качестве значений.
Например:
```javascript
let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(users);

/*
// после вызова у нас должно получиться:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/
```
Такая функция очень удобна при работе с данными, которые приходят с сервера.
В этой задаче мы предполагаем, что id уникален. Не может быть двух элементов массива с одинаковым id.
Используйте метод .reduce в решении.

**Решение**
```javascript
function groupById(arr) {
    return arr.reduce((newObj, user) => {
        newObj[user.id] = user;
        return newObj;
    }, {});
}

let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(users);

console.log(usersById);

/*
// после вызова у нас должно получиться:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/
```

