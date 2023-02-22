'use strict';

let userLogin = prompt('Введите логин', '');
if (userLogin === 'Админ') {
	let userPass = prompt('Введите пароль', '');
	if (userPass === 'Я главный') {
		alert('Здравствуйте!');
	} else if (!userPass) {
		alert('Отменено');
	} else {
		alert('Неверный пароль');
	}
} else if (!userLogin) {
	alert('Отменено');
} else {
	alert('Я вас не знаю');
}