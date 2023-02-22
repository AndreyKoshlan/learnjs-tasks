| Задача | Файлы |
| --- | --- |
| 4.5.1 Две функции - один объект | [task1.js](task1.js) |
| 4.5.2 Создайте калькулятор при помощи конструктора, new Calculator | [task2.html](task2.html), [task2.js](task2.js) |
| 4.5.3 Создайте new Accumulator | [task3.html](task3.html), [task3.js](task3.js) |

# 4.5.1 Две функции - один объект
Возможно ли создать функции A и B, чтобы new A() == new B()?

**Решение**
```javascript
// Возможно ли создать функции A и B, чтобы new A() == new B()?
// Если да – приведите пример вашего кода.

// Ответ: возможно создать такие функции, используя возврат одного и того же объекта
// Нельзя использовать примитивы, их возврат будет проигнорирован

function A() {
  return obj;
}

function B() {
  return obj;
}

let obj = {
  someParameter: 'parameter',
  // ...
};
let a = new A();
let b = new B();

console.log( a == b ); // true
```

# 4.5.2 Создайте калькулятор при помощи конструктора, new Calculator
Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:

read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
sum() возвращает сумму этих свойств.
mul() возвращает произведение этих свойств.

**Решение**
```javascript
'use strict';

function Calculator() {
  this.read = () => {
    this.value1 = +prompt('Введите число 1', '');
    this.value2 = +prompt('Введите число 2', '');
  }

  this.sum = () => {
    return this.value1 + this.value2;   
  }

  this.mul = () => {
    return this.value1 * this.value2;
  }
}

let calculator = new Calculator();
calculator.read();
console.log(calculator);

alert( 'Sum=' + calculator.sum() );
alert( 'Mul=' + calculator.mul() );
```

# 4.5.3 Создайте new Accumulator
Создайте функцию-конструктор Accumulator(startingValue).

Объект, который она создаёт, должен уметь следующее:

Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
Метод read() должен использовать prompt для считывания нового числа и прибавления его к value.
Другими словами, свойство value представляет собой сумму всех введённых пользователем значений, с учётом начального значения startingValue.

Ниже вы можете посмотреть работу кода:

```javascript
let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
accumulator.read(); // прибавляет введённое пользователем значение к текущему значению

alert(accumulator.value); // выведет сумму этих значений
```

**Решение**
```javascript
'use strict';

function Accumulator(value) {
  this.value = value;

  this.read = () => {
    this.value += +prompt('Введите число', '');
  }
}

let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
accumulator.read(); // прибавляет введённое пользователем значение к текущему значению

alert(accumulator.value); // выведет сумму этих значений
```