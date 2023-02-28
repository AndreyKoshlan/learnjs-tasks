| Задача | Файлы |
| --- | --- |
| 9.6.1 Странный instanceof | [task1.js](task1.js) |

# 9.6.1 Странный instanceof
Почему instanceof в примере ниже возвращает true? Мы же видим, что a не создан с помощью B().
```javascript
function A() {}
function B() {}

A.prototype = B.prototype = {};

let a = new A();

alert( a instanceof B ); // true
```

**Решение**
```javascript
function A() {}
function B() {}

A.prototype = B.prototype = {};

let a = new A();

alert( a instanceof B ); 

// instanceof проверяет, равен ли Class.prototype одному из прототипов в прототипной цепочке.
// так как прототипы A и B равны, то a instanceof B возвращает true
```

