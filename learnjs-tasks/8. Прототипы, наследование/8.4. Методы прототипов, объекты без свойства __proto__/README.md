| Задача | Файлы |
| --- | --- |
| 8.4.1 Добавьте toString в словарь | [task1.js](task1.js) |
| 8.4.2 Разница между вызовами | [task2.js](task2.js) |

# 8.4.1 Добавьте toString в словарь
Имеется объект dictionary, созданный с помощью Object.create(null) для хранения любых пар ключ/значение.
Добавьте ему метод dictionary.toString(), который должен возвращать список ключей, разделённых запятой. Ваш toString не должен выводиться при итерации объекта с помощью цикла for..in.
Вот так это должно работать:
```javascript
let dictionary = Object.create(null);

// ваш код, который добавляет метод dictionary.toString

// добавляем немного данных
dictionary.apple = "Apple";
dictionary.__proto__ = "test"; // здесь __proto__ -- это обычный ключ

// только apple и __proto__ выведены в цикле
for(let key in dictionary) {
  alert(key); // "apple", затем "__proto__"
}

// ваш метод toString в действии
alert(dictionary); // "apple,__proto__"
```

**Решение**
```javascript
let dictionary = Object.create(null);

Object.defineProperty(dictionary, "toString", {
  value: function() {
    return Object.keys(this).join(',');
  },
  writable: true,
  enumerable: false,
  configurable: true
});

// добавляем немного данных
dictionary.apple = "Apple";
dictionary.__proto__ = "test"; // здесь __proto__ -- это обычный ключ

// только apple и __proto__ выведены в цикле
for(let key in dictionary) {
  console.log(key); // "apple", затем "__proto__"
}

// ваш метод toString в действии
console.log(`${dictionary}`); // "apple,__proto__"
```

# 8.4.2 Разница между вызовами
Давайте создадим новый объект rabbit:
```javascript
function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype.sayHi = function() {
  alert(this.name);
};

let rabbit = new Rabbit("Rabbit");
```
Все эти вызовы делают одно и тоже или нет?
```javascript
rabbit.sayHi();
Rabbit.prototype.sayHi();
Object.getPrototypeOf(rabbit).sayHi();
rabbit.__proto__.sayHi();
```

**Решение**
```javascript
function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype.sayHi = function() {
  alert(this.name);
};

let rabbit = new Rabbit("Rabbit");

// Все эти вызовы делают одно и тоже или нет?

rabbit.sayHi(); // Выведет Rabbit, т.к. this ссылается на объект
Rabbit.prototype.sayHi(); // Выведет undefined, т.к. this будет ссылаться на prototype
Object.getPrototypeOf(rabbit).sayHi(); // Выведет undefined, т.к. this будет ссылаться на prototype
rabbit.__proto__.sayHi(); // Выведет undefined, т.к. this будет ссылаться на prototype
```

