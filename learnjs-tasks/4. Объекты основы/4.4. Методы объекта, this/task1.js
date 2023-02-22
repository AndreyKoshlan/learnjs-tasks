function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

alert( user.ref.name ); // Каким будет результат?

// Ответ: ошибка, так как this является undefined
// В нестрогом режиме this - это window. Если в window
// нет свойства name, то это также даст ошибку.