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