| Задача | Файлы |
| --- | --- |
| 4.4.1 Использование "this" в литерале объекта | [task1.js](task1.js) |
| 4.4.2 Создайте калькулятор | [task2.html](task2.html), [task2.js](task2.js) |
| 4.4.3 Цепь вызовов | [task3.js](task3.js) |

# 4.4.1 Использование "this" в литерале объекта
Здесь функция makeUser возвращает объект.

Каким будет результат при обращении к свойству объекта ref? Почему?
```javascript
function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

alert( user.ref.name ); // Каким будет результат?
```

**Решение**
Ответ: ошибка, так как this является undefined. В нестрогом режиме this - это window. Если в window нет свойства name, то это также даст ошибку.

# 4.4.2 Создайте калькулятор
Создайте объект calculator (калькулятор) с тремя методами:

read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
sum() (суммировать) возвращает сумму сохранённых значений.
mul() (умножить) перемножает сохранённые значения и возвращает результат.

```javascript
let calculator = {
  // ... ваш код ...
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
```

**Решение**
```javascript
'use strict';

let calculator = {
    read() {
        this.value1 = +prompt('Введите число 1', '');
        this.value2 = +prompt('Введите число 2', '');
    },

    sum() {
        return this.value1 + this.value2;
    },

    mul() {
        return this.value1 * this.value2;
    }

};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
```

# 4.4.3 Цепь вызовов
У нас есть объект ladder (лестница), который позволяет подниматься и спускаться:

```javascript
let ladder = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showStep: function() { // показывает текущую ступеньку
    alert( this.step );
  }
};
```

Теперь, если нам нужно выполнить несколько последовательных вызовов, мы можем сделать это так:
```javascript
ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
ladder.down();
ladder.showStep(); // 0
```

Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке, например так:
```javascript
ladder.up().up().down().showStep().down().showStep(); // показывает 1 затем 0
```

**Решение**
```javascript
'use strict';

let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep: function() { // показывает текущую ступеньку
        console.log( this.step );
        return this;
    }
};

ladder.up().up().down().showStep().down().showStep();
```