| Задача | Файлы |
| --- | --- |
| 5.11.1 Создайте дату | [task1.js](task1.js) |
| 5.11.2 Покажите день недели | [task2.js](task2.js) |
| 5.11.3 День недели в европейской нумерации | [task3.js](task3.js) |
| 5.11.4 Какой день месяца был много дней назад? | [task4.js](task4.js) |
| 5.11.5 Последнее число месяца? | [task5.js](task5.js) |
| 5.11.6 Сколько сегодня прошло секунд? | [task6.js](task6.js) |
| 5.11.7 Сколько секунд осталось до завтра? | [task7.js](task7.js) |
| 5.11.8 Форматирование относительной даты | [task8.js](task8.js) |

# 5.11.1 Создайте дату
Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.
Для вывода используйте alert.

**Решение**
```javascript
let date = new Date(2012, 1, 20, 3, 12, 0);
console.log(date.toString());
```

# 5.11.2 Покажите день недели
Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».
Например:
```javascript
let date = new Date(2012, 0, 3);  // 3 января 2012 года
alert( getWeekDay(date) );        // нужно вывести "ВТ"
```

**Решение**
```javascript
function getWeekDay(date) {
	return ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'][date.getDay()];
}

let date = new Date(2012, 0, 3);  // 3 января 2012 года
console.log( getWeekDay(date) );        // нужно вывести "ВТ"
```

# 5.11.3 День недели в европейской нумерации
В Европейских странах неделя начинается с понедельника (день номер 1), затем идёт вторник (номер 2) и так до воскресенья (номер 7). Напишите функцию getLocalDay(date), которая возвращает «европейский» день недели для даты date.
```javascript
let date = new Date(2012, 0, 3);  // 3 января 2012 года
alert( getLocalDay(date) );       // вторник, нужно показать 2
```

**Решение**
```javascript
function getLocalDay(date) {
	return date.getDay() || 7;
}

let date = new Date(2012, 0, 3);  // 3 января 2012 года
console.log( getLocalDay(date) );       // вторник, нужно показать 2
```

# 5.11.4 Какой день месяца был много дней назад?
Создайте функцию getDateAgo(date, days), возвращающую число, которое было days дней назад от даты date.
К примеру, если сегодня двадцатое число, то getDateAgo(new Date(), 1) вернёт девятнадцатое и getDateAgo(new Date(), 2) – восемнадцатое.
Функция должна надёжно работать при значении days=365 и больших значениях:
```javascript
let date = new Date(2015, 0, 2);

alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)
```
P.S. Функция не должна изменять переданный ей объект date.

**Решение**
```javascript
'use strict';

function getDateAgo(date, days) {
	let newDate = new Date(date);
	let offset = date.getDate() - days;
	newDate.setDate(offset);
	return newDate.getDate();
}

let date = new Date(2015, 0, 2);

console.log( getDateAgo(date, 1).toString() ); // 1, (1 Jan 2015)
console.log( getDateAgo(date, 2).toString() ); // 31, (31 Dec 2014)
console.log( getDateAgo(date, 365).toString() ); // 2, (2 Jan 2014)
```

# 5.11.5 Последнее число месяца?
Напишите функцию getLastDayOfMonth(year, month), возвращающую последнее число месяца. Иногда это 30, 31 или даже февральские 28/29.
Параметры:
year – год из четырёх цифр, например, 2012.
month – месяц от 0 до 11.
К примеру, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль).

**Решение**
```javascript
'use strict';

function getLastDayOfMonth(year, month) {
	let dateIndex = 28;
	let dateSearch = new Date(year, month, dateIndex);
	while (dateSearch.getMonth() == month) {
		dateSearch.setDate(++dateIndex);
	}
	return dateIndex - 1;
}

console.log( getLastDayOfMonth(2012, 1) ); // = 29
```

# 5.11.6 Сколько сегодня прошло секунд?
Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.
Например, если сейчас 10:00, и не было перехода на зимнее/летнее время, то:
```javascript
getSecondsToday() == 36000 // (3600 * 10)
```
Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.

**Решение**
```javascript
'use strict';

function getSecondsToday() {
	let now = new Date();
	return (now.getHours() * 3600) + (now.getMinutes() * 60) + now.getSeconds();
}

console.log( getSecondsToday() );
```

# 5.11.7 Сколько секунд осталось до завтра?
Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.
Например, если сейчас 23:00, то:
```javascript
getSecondsToTomorrow() == 3600
```
P.S. Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.

**Решение**
```javascript
'use strict';

function getSecondsToTomorrow() {
	let tomorrowDate = new Date();
	tomorrowDate.setDate(tomorrowDate.getDate() + 1);
	tomorrowDate.setHours(0);
	tomorrowDate.setMinutes(0);
	tomorrowDate.setSeconds(0);
	tomorrowDate.setMilliseconds(0);
	return Math.round((tomorrowDate - Date.now()) / 1000);
}

console.log( getSecondsToTomorrow() );
```

# 5.11.8 Форматирование относительной даты
Напишите функцию formatDate(date), форматирующую date по следующему принципу:
Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
В противном случае, если меньше часа, вывести "m мин. назад".
В противном случае, полная дата в формате "DD.MM.YY HH:mm". А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.
Например:
```javascript
alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
alert( formatDate(new Date(new Date - 86400 * 1000)) );
```

**Решение**
```javascript
'use strict';

function formatDate(date) {
	function formatZeroDigit(value) {
		let str = value.toString();
		return str.length - 1 ? str : '0' + str;
	}

	if (Date.now() - date < 1000)
		return 'Прямо сейчас';
	if (Date.now() - date < 60 * 1000)
		return Math.round((Date.now() - date) / 1000) + ' сек. назад';
	if (Date.now() - date < 60 * 60 * 1000)
		return Math.round((Date.now() - date) / 60 / 1000) + ' мин. назад';

	return `${formatZeroDigit( date.getDate() )}.\
		${formatZeroDigit( date.getMonth()+1 )}.\
		${date.getFullYear()} \
		${formatZeroDigit( date.getHours() )}:\
		${formatZeroDigit( date.getMinutes() )}`
		.replaceAll('\t', '');
}

console.log( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

console.log( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// вчерашняя дата
console.log( formatDate(new Date(new Date - 86400 * 1000)) );
```

