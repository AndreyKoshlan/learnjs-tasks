| Задача | Файлы |
| --- | --- |
| 8.1.1 Работа с прототипами | [task1.js](task1.js) |
| 8.1.2 Алгоритм поиска | [task2.js](task2.js) |
| 8.1.3 Куда будет произведена запись? | [task3.js](task3.js) |
| 8.1.4 Почему наедаются оба хомяка? | [task4.js](task4.js) |

# 8.1.1 Работа с прототипами
В приведённом ниже коде создаются и изменяются два объекта.
Какие значения показываются в процессе выполнения кода?
```javascript
let animal = {
  jumps: null
};
let rabbit = {
  __proto__: animal,
  jumps: true
};

alert( rabbit.jumps ); // ? (1)

delete rabbit.jumps;

alert( rabbit.jumps ); // ? (2)

delete animal.jumps;

alert( rabbit.jumps ); // ? (3)
```
Должно быть 3 ответа.

**Решение**
```javascript
let animal = {
  jumps: null
};

let rabbit = {
  __proto__: animal,
  jumps: true
};

alert( rabbit.jumps ); // true (1) (свойство берется из rabbit)

delete rabbit.jumps;

alert( rabbit.jumps ); // null (2) (свойство берется из animal)

delete animal.jumps;

alert( rabbit.jumps ); // undefined (3) (свойство удалено = undefined)
```

# 8.1.2 Алгоритм поиска
Задача состоит из двух частей.
У нас есть объекты:
```javascript
let head = {
  glasses: 1
};

let table = {
  pen: 3
};

let bed = {
  sheet: 1,
  pillow: 2
};

let pockets = {
  money: 2000
};
```
С помощью свойства \\_\\_proto\\_\\_ задайте прототипы так, чтобы поиск любого свойства выполнялся по следующему пути: pockets → bed → table → head. Например, pockets.pen должно возвращать значение 3 (найденное в table), а bed.glasses – значение 1 (найденное в head).
Ответьте на вопрос: как быстрее получить значение glasses – через pockets.glasses или через head.glasses? При необходимости составьте цепочки поиска и сравните их.

**Решение**
```javascript
let head = {
  glasses: 1
};

let table = {
  pen: 3,
  __proto__: head
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table
};

let pockets = {
  money: 2000,
  __proto__: bed
};

/* 
Ответьте на вопрос: как быстрее получить значение glasses – 
через pockets.glasses или через head.glasses? 
При необходимости составьте цепочки поиска и сравните их.

Ответ: Через head.glasses быстрее получить значение.
Цепочка из pockets состоит из следующего пути: pockets -> bed -> table -> head,
в то время как head.glasses находит значение сразу же. Однако, производительность
может зависить от различных движков JavaScript.
*/
```

# 8.1.3 Куда будет произведена запись?
Объект rabbit наследует от объекта animal.
Какой объект получит свойство full при вызове rabbit.eat(): animal или rabbit?
```javascript
let animal = {
  eat() {
    this.full = true;
  }
};

let rabbit = {
  __proto__: animal
};

rabbit.eat();
```

**Решение**
```javascript
let animal = {
  eat() {
    this.full = true;
  }
};

let rabbit = {
  __proto__: animal
};

rabbit.eat();

/*
Какой объект получит свойство full при вызове rabbit.eat(): animal или rabbit?

Ответ: получит rabbit. Контекст this определяет объект,
который записан перед точкой с вызовом функции
*/
```

# 8.1.4 Почему наедаются оба хомяка?
У нас есть два хомяка: шустрый (speedy) и ленивый (lazy); оба наследуют от общего объекта hamster.
Когда мы кормим одного хомяка, второй тоже наедается. Почему? Как это исправить?
```javascript
let hamster = {
  stomach: [],

  eat(food) {
    this.stomach.push(food);
  }
};

let speedy = {
  __proto__: hamster
};

let lazy = {
  __proto__: hamster
};

// Этот хомяк нашёл еду
speedy.eat("apple");
alert( speedy.stomach ); // apple

// У этого хомяка тоже есть еда. Почему? Исправьте
alert( lazy.stomach ); // apple
```

**Решение**
```javascript
'use strict';

let hamster = {
  eat(food) {
    if (!this.stomach)
      this.stomach = [];
    this.stomach.push(food);
  }
};

let speedy = {
  __proto__: hamster
};

let lazy = {
  __proto__: hamster
};

// Этот хомяк нашёл еду
speedy.eat("apple");
console.log( speedy.stomach ); // apple

console.log( lazy.stomach ); // undefined
```

