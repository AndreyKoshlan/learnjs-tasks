// Ответ: keys - это итератор. Его необходимо привести к массиву с помощью Array.from

let map = new Map();

map.set("name", "John");

//let keys = map.keys();
// Error: keys.push is not a function
// Ошибка: keys.push -- это не функция
//keys.push("more");

let keys = Array.from(map.keys());
keys.push("more");
console.log( keys );