| Задача | Файлы |
| --- | --- |
| 8.3.1 Добавить функциям метод "f.defer(ms)" | [task1.js](task1.js) |
| 8.3.2 Добавьте функциям декорирующий метод "defer()" | [task2.js](task2.js) |

# 8.3.1 Добавить функциям метод "f.defer(ms)"
Добавьте всем функциям в прототип метод defer(ms), который вызывает функции через ms миллисекунд.
После этого должен работать такой код:
```javascript
function f() {
  alert("Hello!");
}

f.defer(1000); // выведет "Hello!" через 1 секунду
```

**Решение**
```javascript
'use strict';

Function.prototype.defer = function(ms) {
  setTimeout(this, ms);
}

function f() {
  console.log("Hello!");
}

f.defer(1000); // выведет "Hello!" через 1 секунду
```

# 8.3.2 Добавьте функциям декорирующий метод "defer()"
Добавьте всем функциям в прототип метод defer(ms), который возвращает обёртку, откладывающую вызов функции на ms миллисекунд.
Например, должно работать так:
```javascript
function f(a, b) {
  alert( a + b );
}

f.defer(1000)(1, 2); // выведет 3 через 1 секунду.
```
Пожалуйста, заметьте, что аргументы должны корректно передаваться оригинальной функции.

**Решение**
```javascript
'use strict';

Function.prototype.defer = function(ms) {
  let func = this;
  return function() {
    setTimeout(() => func.apply(this, arguments), ms);
  }
}

function f(a, b) {
  console.log( a + b );
}

f.defer(1000)(1, 2); // выведет 3 через 1 секунду.
```

