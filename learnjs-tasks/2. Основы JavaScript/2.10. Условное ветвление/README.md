| Задача | Файлы |
| --- | --- |
| 2.10.1 if (строка с нулём) | [task1.js](task1.js) |
| 2.10.2 Название JavaScript | [task2.html](task3.html), [task2.js](task2.js) |
| 2.10.3 Покажите знак числа | [task3.html](task3.html), [task3.js](task3.js) |
| 2.10.4 Перепишите 'if' в '?' | [task4.js](task4.js) |
| 2.10.5 Перепишите 'if..else' в '?' | [task5.js](task5.js) |

# 2.10.1 if (строка с нулём)
Выведется ли alert?
```javascript
if ("0") {
  alert( 'Привет' );
}
```

**Решение**
```javascript
// alert будет выведен, т.к. "0" - это непустая строка и будет приведена к true

if ("0") {
  alert( 'Привет' );
}
```

# 2.10.2 Название JavaScript
Используя конструкцию if..else, напишите код, который будет спрашивать: „Какое «официальное» название JavaScript?“

Если пользователь вводит «ECMAScript», то показать: «Верно!», в противном случае – отобразить: «Не знаете? ECMAScript!»
**Решение**
```javascript
'use strict';

let userPrompt = prompt('Какое «официальное» название JavaScript?', '');
if (userPrompt.toLowerCase() === 'ecmascript') {
    alert('Верно!');
} else {
    alert('Не знаете? ECMAScript!');
}
```

# 2.10.3 Покажите знак числа
Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:

1, если значение больше нуля,
-1, если значение меньше нуля,
0, если значение равно нулю.
Предполагается, что пользователь вводит только числа.

**Решение**
```javascript
'use strict';

let userPrompt = prompt('Введите число', '');
if (userPrompt > 0)
    alert("1");
else if (userPrompt < 0)
    alert("-1");
else
    alert("0");
```

# 2.10.4 Перепишите 'if' в '?'
Перепишите конструкцию if с использованием условного оператора '?':
```javascript
let result;

if (a + b < 4) {
  result = 'Мало';
} else {
  result = 'Много';
}
```

**Решение**
```javascript
let result = (a + b < 4) ? 'Мало' : 'Много';
```

# 2.10.5 Перепишите 'if..else' в '?'
Перепишите if..else с использованием нескольких операторов '?'.

Для читаемости рекомендуется разбить код на несколько строк.
```javascript
let message;

if (login == 'Сотрудник') {
  message = 'Привет';
} else if (login == 'Директор') {
  message = 'Здравствуйте';
} else if (login == '') {
  message = 'Нет логина';
} else {
  message = '';
}
```

**Решение**
```javascript
let message;

message = (login == 'Сотрудник') ? 'Привет' : '';
message = (login == 'Директор') ? 'Здравствуйте' : message;
message = (login == '') ? 'Нет логина' : message;
```