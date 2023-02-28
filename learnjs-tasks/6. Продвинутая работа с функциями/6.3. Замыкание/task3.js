let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    alert(`${phrase}, ${user}`);
  }
}

sayHi();

// Ответ: ошибка, невозможно получить доступ к sayHi из-за вложенности