class Rabbit extends Object {
  constructor(name) {
    super(); // Необходимо вызвать базовый конструктор
    this.name = name;
  }
}

let rabbit = new Rabbit("Кроль");

console.log( rabbit.hasOwnProperty('name') );