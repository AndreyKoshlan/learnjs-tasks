| Задача | Файлы |
| --- | --- |
| 5.7.1 Фильтрация уникальных элементов массива | [task1.js](task1.js) |
| 5.7.2 Отфильтруйте анаграммы | [task2.js](task2.js) |
| 5.7.3 Перебираемые ключи | [task3.js](task3.js) |

# 5.7.1 Фильтрация уникальных элементов массива
Допустим, у нас есть массив arr.
Создайте функцию unique(arr), которая вернёт массив уникальных, не повторяющихся значений массива arr.
Например:
```javascript
function unique(arr) {
  /* ваш код */
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(values) ); // Hare,Krishna,:-O
```
P.S. Здесь мы используем строки, но значения могут быть любого типа.
P.P.S. Используйте Set для хранения уникальных значений.

**Решение**
```javascript
function unique(arr) {
  return Array.from(new Set(arr));
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log( unique(values) ); // Hare,Krishna,:-O
```

# 5.7.2 Отфильтруйте анаграммы
Анаграммы – это слова, у которых те же буквы в том же количестве, но они располагаются в другом порядке.
Например:
```javascript
nap - pan
ear - are - era
cheaters - hectares - teachers
```
Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.
Например:
```javascript
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"
```
Из каждой группы анаграмм должно остаться только одно слово, не важно какое.

**Решение**
```javascript
function aclean(arr) {
	return Array.from(new Set(arr.map((str) => 
		Array.from(str.toLowerCase()).sort().join('')
	)));
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"
```

# 5.7.3 Перебираемые ключи
Мы хотели бы получить массив ключей map.keys() в переменную и далее работать с ними, например, применить метод .push.
Но это не выходит:
```javascript
let map = new Map();

map.set("name", "John");

let keys = map.keys();

// Error: keys.push is not a function
// Ошибка: keys.push -- это не функция
keys.push("more");
```
Почему? Что нужно поправить в коде, чтобы вызов keys.push сработал?

**Решение**
```javascript
// Ответ: keys - это итератор. Его необходимо привести к массиву с помощью Array.from

let map = new Map();

map.set("name", "John");

//let keys = map.keys();
// Error: keys.push is not a function
// Ошибка: keys.push -- это не функция
//keys.push("more");

let keys = Array.from(map.keys());
keys.push("more");
console.log( keys );
```

