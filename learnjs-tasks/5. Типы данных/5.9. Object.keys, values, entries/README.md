| Задача | Файлы |
| --- | --- |
| 5.9.1 Сумма свойств объекта | [task1.js](task1.js) |
| 5.9.2 Подсчёт количества свойств объекта | [task2.js](task2.js) |

# 5.9.1 Сумма свойств объекта
Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.
Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.
Если объект salaries пуст, то результат должен быть 0.
Например:
```javascript
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

alert( sumSalaries(salaries) ); // 650
```

**Решение**
```javascript
function sumSalaries(salaries) {
    return Object.values(salaries).reduce((sum, value) => sum + value, 0);
}

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

console.log( sumSalaries(salaries) ); // 650
```

# 5.9.2 Подсчёт количества свойств объекта
Напишите функцию count(obj), которая возвращает количество свойств объекта:
```javascript
let user = {
  name: 'John',
  age: 30
};

alert( count(user) ); // 2
```
Постарайтесь сделать код как можно короче.
P.S. Игнорируйте символьные свойства, подсчитывайте только «обычные».

**Решение**
```javascript
function count(obj) {
    return Object.keys(obj).length;
}

let user = {
  name: 'John',
  age: 30
};

console.log( count(user) ); // 2
```

