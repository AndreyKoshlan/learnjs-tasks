// Пример функции-конструктора для объекта obj, с которой такой вызов корректно сработает.
function Func() {
	this.print = function() {
		console.log('test');
	}
}

let obj = new Func();
let obj2 = new obj.constructor();
obj.print();
obj2.print(); // метод существует

// Пример функции-конструктора, с которой такой код поведёт себя неправильно

function Func2() {
	this.constructor = function() {
		console.log('fake constructor');
	}
	this.print = function() {
		console.log('test');
	}
}

let obj3 = new Func2();
let obj4 = new obj3.constructor();
obj3.print();
obj4.print(); // метода не существует