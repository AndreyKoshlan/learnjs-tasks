| Задача | Файлы |
| --- | --- |
| 5.3.1 Сделать первый символ заглавным | [task1.js](task1.js) |
| 5.3.2 Проверка на спам | [task2.js](task2.js) |
| 5.3.3 Усечение строки | [task3.js](task3.js) |
| 5.3.4 Выделить число | [task4.js](task4.js) |

# 5.3.1 Сделать первый символ заглавным
Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:
```javascript
ucFirst("вася") == "Вася";
```

**Решение**
```javascript
'use strict';

function ucFirst(str) {
	if (str.length <= 0)
		return str;
	return str[0].toUpperCase() + str.slice(1);
}

console.log(ucFirst('вася'));
```

# 5.3.2 Проверка на спам
Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.

Функция должна быть нечувствительна к регистру:
```javascript
checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false
```

**Решение**
```javascript
'use strict';

function checkSpam(str) {
	let lowerCaseStr = str.toLowerCase();
	return (lowerCaseStr.includes('xxx') || lowerCaseStr.includes('viagra'));
}

console.log( checkSpam('buy ViAgRA now') ); //== true
console.log( checkSpam('free xxxxx') ); //== true
console.log( checkSpam("innocent rabbit") ); //== false
```

# 5.3.3 Усечение строки
Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.

Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.

Например:
```javascript
truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) = "Вот, что мне хотело…"

truncate("Всем привет!", 20) = "Всем привет!"
```

**Решение**
```javascript
'use strict';

function truncate(str, maxlength) {
	if (str.length <= maxlength)
		return str;
	return str.slice(0, maxlength-1) + '…';
}

console.log( truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) ); // = "Вот, что мне хотело…"

console.log( truncate("Всем привет!", 20) ); //= "Всем привет!"
```

# 5.3.4 Выделить число
Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.

Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.

Например:
```javascript
alert( extractCurrencyValue('$120') === 120 ); // true
```

**Решение**
```javascript
'use strict';

function extractCurrencyValue(str) {
	return +str.slice(1);
}

console.log( extractCurrencyValue('$120') === 120 ) //true
```