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