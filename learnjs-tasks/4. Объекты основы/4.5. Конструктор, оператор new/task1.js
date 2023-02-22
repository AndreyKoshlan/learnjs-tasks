// Возможно ли создать функции A и B, чтобы new A() == new B()?
// Если да – приведите пример вашего кода.

// Ответ: возможно создать такие функции, используя возврат одного и того же объекта
// Нельзя использовать примитивы, их возврат будет проигнорирован

function A() {
	return obj;
}

function B() {
	return obj;
}

let obj = {
	someParameter: 'parameter',
	// ...
};
let a = new A();
let b = new B();

console.log( a == b ); // true