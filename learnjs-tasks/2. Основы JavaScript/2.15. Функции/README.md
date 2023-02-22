| Задача | Файлы |
| --- | --- |
| 2.15.1 Обязателен ли "else"? | [task1.js](task1.js) |
| 2.15.2 Перепишите функцию, используя оператор '?' или '\|\|' | [task2.js](task2.js) |
| 2.15.3 Функция min(a, b) | [task3.js](task3.js) |
| 2.15.4 Функция pow(x,n) | [task4.js](task4.js) |

# 2.15.1 Обязателен ли "else"?
Следующая функция возвращает true, если параметр age больше 18.

В ином случае она запрашивает подтверждение через confirm и возвращает его результат:
```javascript
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('Родители разрешили?');
  }
}
```

Будет ли эта функция работать как-то иначе, если убрать else?
```javascript
function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm('Родители разрешили?');
}
```

**Решение**
```javascript
// Данная функция будет работать точно так же как и с блоком else

function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm('Родители разрешили?');
}
```

# 2.15.2 Перепишите функцию, используя оператор '?' или '||'
Следующая функция возвращает true, если параметр age больше 18.

В ином случае она задаёт вопрос confirm и возвращает его результат.
```javascript
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }
}
```
Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку.

Сделайте два варианта функции checkAge:
Используя оператор ?
Используя оператор ||

**Решение**
```javascript
// Используя оператор ?
function checkAge(age) {
    return (age > 18) ? true : confirm('Родители разрешили?');
}

// Используя оператор ||
function checkAge(age) {
    return (age > 18) || confirm('Родители разрешили?');
}
```

# 2.15.3 Функция min(a, b)
Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.

Пример вызовов:
```javascript
min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1
```

**Решение**
```javascript
'use strict';

function min(a, b) {
    return a < b ? a : b
}

console.log(min(2, 5)); // 2
console.log(min(3, -1)); // -1
console.log(min(1, 1)); // 1
```

# 2.15.4 Функция pow(x,n)
Напишите функцию pow(x,n), которая возводит x в степень n и возвращает результат.
```javascript
pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...* 1 = 1
```

**Решение**
```javascript
'use strict';

function pow(base, exponent) {
    return base ** exponent;
}

console.log(pow(3, 2)); // pow(3, 2) = 3 * 3 = 9
console.log(pow(3, 3)); // pow(3, 3) = 3 * 3 * 3 = 27
console.log(pow(1, 100)); // pow(1, 100) = 1 * 1 * ...* 1 = 1
```