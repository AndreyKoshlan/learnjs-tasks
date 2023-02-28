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