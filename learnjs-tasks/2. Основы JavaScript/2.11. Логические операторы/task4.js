/*
	Будет вызван alert(1), вычисления на этом остановятся, так как alert возвращает undefined.
	Следовательно, второй alert выведет undefined

	Ответ: сначала будет отображен 1, а затем undefined
*/

alert( alert(1) && alert(2) );