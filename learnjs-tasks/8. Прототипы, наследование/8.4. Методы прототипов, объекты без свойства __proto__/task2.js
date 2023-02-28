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