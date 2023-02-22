// Данная функция будет работать точно так же как и с блоком else

function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm('Родители разрешили?');
}