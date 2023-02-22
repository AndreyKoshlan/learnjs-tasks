'use strict';

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

let sum = 0;
for (let salary of Object.values(salaries)) {
  sum += salary;
}
console.log(`Сумма: ${sum}`)