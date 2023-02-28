| Задача | Файлы |
| --- | --- |
| 5.10.1 Деструктурирующее присваивание | [task1.js](task1.js) |
| 5.10.2 Максимальная зарплата | [task2.js](task2.js) |

# 5.10.1 Деструктурирующее присваивание
У нас есть объект:
```javascript
let user = {
  name: "John",
  years: 30
};
```
Напишите деструктурирующее присваивание, которое:
свойство name присвоит в переменную name.
свойство years присвоит в переменную age.
свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)
Пример переменных после вашего присваивания:
```javascript
let user = { name: "John", years: 30 };

// ваш код должен быть с левой стороны:
// ... = user

alert( name ); // John
alert( age ); // 30
alert( isAdmin ); // false
```

**Решение**
```javascript
'use strict';

let user = {
  name: "John",
  years: 30
};

let {name, years: age, isAdmin = false} = user;

console.log( name ); // John
console.log( age ); // 30
console.log( isAdmin ); // false
```

# 5.10.2 Максимальная зарплата
У нас есть объект salaries с зарплатами:
```javascript
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
```
Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.
Если объект salaries пустой, то нужно вернуть null.
Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.

**Решение**
```javascript
'use strict';

function topSalary(salaries) {
    let max = 0;
    let name = "";
    for (let [key, value] of Object.entries(salaries)) {
        if (value > max) {
            max = value;
            name = key;
        }
    }
    return name;
}

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

console.log( topSalary(salaries) );
```

