| Задача | Файлы |
| --- | --- |
| 6.6.1 Установка и уменьшение значения счётчика | [task1.js](task1.js) |
| 6.6.2 Сумма с произвольным количеством скобок | [task2.js](task2.js) |

# 6.6.1 Установка и уменьшение значения счётчика
Измените код makeCounter() так, чтобы счётчик мог уменьшать и устанавливать значение:
counter() должен возвращать следующее значение (как и раньше).
counter.set(value) должен устанавливать счётчику значение value.
counter.decrease() должен уменьшать значение счётчика на 1.
Посмотрите код из песочницы с полным примером использования.
P.S. Для того, чтобы сохранить текущее значение счётчика, можно воспользоваться как замыканием, так и свойством функции. Или сделать два варианта решения: и так, и так.

**Решение**
```javascript
function makeCounter() {
  function counter() {
    return counter.count++;
  };

  counter.set = function(value) {
    counter.count = value;
  }

  counter.decrease = function() {
    counter.count--;
  }

  counter.count = 0;

  return counter;
}

let counter = makeCounter();
console.log( counter() ); // 0
console.log( counter() ); // 1

counter.set(10);
console.log( counter.count ); // 10
counter.decrease();
console.log( counter.count ); // 9
```

# 6.6.2 Сумма с произвольным количеством скобок
Напишите функцию sum, которая бы работала следующим образом:
```javascript
sum(1)(2) == 3; // 1 + 2
sum(1)(2)(3) == 6; // 1 + 2 + 3
sum(5)(-1)(2) == 6
sum(6)(-1)(-2)(-3) == 0
sum(0)(1)(2)(3)(4)(5) == 15
```
P.S. Подсказка: возможно вам стоит сделать особый метод преобразования в примитив для функции.

**Решение**
```javascript
'use strict';

function sum(value) {
    let total = value;

    function sumEnv(value) {
        total += value;
        return sumEnv;
    }

    sumEnv[Symbol.toPrimitive] = function(hint) {
        return hint == 'string' ? total.toString() : total;
    }

    return sumEnv;
}

console.log( `${sum(1)(2)}` ); // == 3; // 1 + 2
console.log( `${sum(1)(2)(3)}` ); // == 6; // 1 + 2 + 3
console.log( `${sum(5)(-1)(2)}` ); // == 6
console.log( `${sum(6)(-1)(-2)(-3)}` ); // == 0
console.log( `${sum(0)(1)(2)(3)(4)(5)}` ); // == 15
```

