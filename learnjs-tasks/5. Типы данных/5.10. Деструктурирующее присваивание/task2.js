'use strict';

function topSalary(salaries) {
    let max = 0;
    let name = "";
    for (let [key, value] of Object.entries(salaries)) {
        if (value > max) {
            max = value;
            name = key;
        }
    }
    return name;
}

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

console.log( topSalary(salaries) );