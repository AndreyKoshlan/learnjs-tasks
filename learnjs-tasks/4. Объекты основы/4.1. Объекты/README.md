| Задача | Файлы |
| --- | --- |
| 4.1.1 Привет, object | [task1.js](task1.js) |
| 4.1.2 Проверка на пустоту | [task2.js](task2.js) |
| 4.1.3 Объекты-константы? | [task3.js](task3.js) |
| 4.1.4 Сумма свойств объекта | [task4.js](task4.js) |
| 4.1.5 Умножаем все числовые свойства на 2 | [task5.js](task5.js) |

# 4.1.1 Привет, object
Напишите код, выполнив задание из каждого пункта отдельной строкой:

1. Создайте пустой объект user.
2. Добавьте свойство name со значением John.
3. Добавьте свойство surname со значением Smith.
4. Измените значение свойства name на Pete.
5. Удалите свойство name из объекта.

**Решение**
```javascript
'use strict';

// 1. Создайте пустой объект user.
let user = {};

// 2. Добавьте свойство name со значением John.
user.name = 'John';

// 3. Добавьте свойство surname со значением Smith.
user.surname = 'Smith';

// 4. Измените значение свойства name на Pete.
user.name = 'Pete';

// 5. Удалите свойство name из объекта.
delete user.name;
```

# 4.1.2 Проверка на пустоту
Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

Должно работать так:
```javascript
let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false
```

**Решение**
```javascript
function isEmpty(obj) {
  return !Object.keys(obj).length;
}

let schedule = {};

console.log( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

console.log( isEmpty(schedule) ); // false
```

# 4.1.3 Объекты-константы?
Можно ли изменить объект, объявленный с помощью const? Как вы думаете?
```javascript
const user = {
  name: "John"
};

// это будет работать?
user.name = "Pete";
```

**Решение**
```javascript
const user = {
  name: "John"
};

// это будет работать?
user.name = "Pete";

// Ответ: объект будет изменен. Запрет работает только на изменение ссылки user
```

# 4.1.4 Сумма свойств объекта
У нас есть объект, в котором хранятся зарплаты нашей команды:
```javascript
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
```
Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.

Если объект salaries пуст, то результат должен быть 0.

**Решение**
```javascript
'use strict';

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

let sum = 0;
for (let salary of Object.values(salaries)) {
  sum += salary;
}
console.log(`Сумма: ${sum}`)
```

# 4.1.5 Умножаем все числовые свойства на 2
Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

Например:
```javascript
// до вызова функции
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

// после вызова функции
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};
```
Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.

P.S. Используйте typeof для проверки, что значение свойства числовое.

**Решение**
```javascript
'use strict';

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'number')
            obj[key] *= 2;
    }
}

// до вызова функции
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

multiplyNumeric(menu);

console.log(menu);

/* 
после вызова функции
menu = {
    width: 400,
    height: 600,
    title: "My menu"
};
*/
```