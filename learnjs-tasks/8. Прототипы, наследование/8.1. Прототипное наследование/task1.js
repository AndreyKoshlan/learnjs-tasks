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