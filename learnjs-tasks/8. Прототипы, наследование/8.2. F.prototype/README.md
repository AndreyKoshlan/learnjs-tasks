| Задача | Файлы |
| --- | --- |
| 8.2.1 Изменяем "prototype" | [task1.js](task1.js) |
| 8.2.2 Создайте новый объект с помощью уже существующего | [task2.js](task2.js) |

# 8.2.1 Изменяем "prototype"
В коде ниже мы создаём нового кролика new Rabbit, а потом пытаемся изменить его прототип.
Сначала у нас есть такой код:
```javascript
function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

alert( rabbit.eats ); // true
```
Добавим одну строчку (выделенную в коде ниже). Что вызов alert покажет нам сейчас?
function Rabbit() {} Rabbit.prototype = { eats: true }; let rabbit = new Rabbit(); Rabbit.prototype = {}; alert( rabbit.eats ); // ?
…А если код такой (заменили одну строчку)?
function Rabbit() {} Rabbit.prototype = { eats: true }; let rabbit = new Rabbit(); Rabbit.prototype.eats = false; alert( rabbit.eats ); // ?
Или такой (заменили одну строчку)?
function Rabbit() {} Rabbit.prototype = { eats: true }; let rabbit = new Rabbit(); delete rabbit.eats; alert( rabbit.eats ); // ?
Или, наконец, такой:
function Rabbit() {} Rabbit.prototype = { eats: true }; let rabbit = new Rabbit(); delete Rabbit.prototype.eats; alert( rabbit.eats ); // ?

**Решение**
```javascript
// 1. Добавим одну строчку (выделенную в коде ниже). Что вызов alert покажет нам сейчас?

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

Rabbit.prototype = {}; // *

alert( rabbit.eats ); //  Вывод: true (прототип изменен уже после создания объекта, ссылка сохраняется у rabbit)

// 2. …А если код такой (заменили одну строчку)?

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

Rabbit.prototype.eats = false; // *

alert( rabbit.eats ); // Вывод: false (изменение объекта по той же ссылке для всех)

// 3. Или такой (заменили одну строчку)?

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

delete rabbit.eats;

alert( rabbit.eats ); // Вывод: true (удаление eats в prototype не произойдет)

// 4. Или, наконец, такой:

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

delete Rabbit.prototype.eats;

alert( rabbit.eats ); // Вывод: undefined (изменение объекта по той же ссылке для всех)
```

# 8.2.2 Создайте новый объект с помощью уже существующего
Представьте, что у нас имеется некий объект obj, созданный функцией-конструктором – мы не знаем какой именно, но хотелось бы создать ещё один объект такого же типа.
Можем ли мы сделать так?
```javascript
let obj2 = new obj.constructor();
```
Приведите пример функции-конструктора для объекта obj, с которой такой вызов корректно сработает. И пример функции-конструктора, с которой такой код поведёт себя неправильно.

**Решение**
```javascript
// Пример функции-конструктора для объекта obj, с которой такой вызов корректно сработает.
function Func() {
	this.print = function() {
		console.log('test');
	}
}

let obj = new Func();
let obj2 = new obj.constructor();
obj.print();
obj2.print(); // метод существует

// Пример функции-конструктора, с которой такой код поведёт себя неправильно

function Func2() {
	this.constructor = function() {
		console.log('fake constructor');
	}
	this.print = function() {
		console.log('test');
	}
}

let obj3 = new Func2();
let obj4 = new obj3.constructor();
obj3.print();
obj4.print(); // метода не существует
```

