function makeCounter() {
  function counter() {
    return counter.count++;
  };

  counter.set = function(value) {
    counter.count = value;
  }

  counter.decrease = function() {
    counter.count--;
  }

  counter.count = 0;

  return counter;
}

let counter = makeCounter();
console.log( counter() ); // 0
console.log( counter() ); // 1

counter.set(10);
console.log( counter.count ); // 10
counter.decrease();
console.log( counter.count ); // 9