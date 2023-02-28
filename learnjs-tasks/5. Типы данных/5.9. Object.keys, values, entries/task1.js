function sumSalaries(salaries) {
    return Object.values(salaries).reduce((sum, value) => sum + value, 0);
}

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

console.log( sumSalaries(salaries) ); // 650