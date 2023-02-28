// Ответ: выведет 1, невозможно "перевыполнить" промис

let promise = new Promise(function(resolve, reject) {
  resolve(1);

  setTimeout(() => resolve(2), 1000);
});

promise.then(alert);