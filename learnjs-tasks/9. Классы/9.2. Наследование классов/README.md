| Задача | Файлы |
| --- | --- |
| 9.2.1 Ошибка создания экземпляра класса | [task1.js](task1.js) |
| 9.2.2 Улучшенные часы | [task2.js](task2.js) |

# 9.2.1 Ошибка создания экземпляра класса
В коде ниже класс Rabbit наследует Animal.
К сожалению, объект класса Rabbit не создаётся. Что не так? Исправьте ошибку.
```javascript
class Animal {

  constructor(name) {
    this.name = name;
  }

}

class Rabbit extends Animal {
  constructor(name) {
    this.name = name;
    this.created = Date.now();
  }
}

let rabbit = new Rabbit("Белый кролик"); // Error: this is not defined
alert(rabbit.name);
```

**Решение**
```javascript
class Animal {

  constructor(name) {
    this.name = name;
  }

}

class Rabbit extends Animal {
  constructor(name) {
    super(name); // Вызовем базовый конструктор
    this.name = name;
    this.created = Date.now();
  }
}

let rabbit = new Rabbit("Белый кролик");
console.log(rabbit.name);
```

# 9.2.2 Улучшенные часы
У нас есть класс Clock. Сейчас он выводит время каждую секунду
```javascript
class Clock {
  constructor({ template }) {
    this.template = template;
  }

  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours &lt; 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins &lt; 10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs &lt; 10) secs = '0' + secs;

    let output = this.template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
  }

  stop() {
    clearInterval(this.timer);
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  }
}
```
Создайте новый класс ExtendedClock, который будет наследоваться от Clock и добавьте параметр precision – количество миллисекунд между «тиками». Установите значение в 1000 (1 секунда) по умолчанию.
Сохраните ваш код в файл extended-clock.js
Не изменяйте класс clock.js. Расширьте его.

**Решение**
```javascript
'use strict';

class Clock {
  constructor({ template }) {
    this.template = template;
  }

  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    let output = this.template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
  }

  stop() {
    clearInterval(this.timer);
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  }
}

class ExtendedClock extends Clock {
  start() {
    this.render();
    this.timer = setInterval(() => this.render(), this.precision);
  }

  constructor({ template, precision }) {
    super({ template });
    this.template = template;
    this.precision = precision;
  }
}

let lowResolutionClock = new ExtendedClock({
  template: 'h:m:s',
  precision: 10000
});

lowResolutionClock.start();
```

