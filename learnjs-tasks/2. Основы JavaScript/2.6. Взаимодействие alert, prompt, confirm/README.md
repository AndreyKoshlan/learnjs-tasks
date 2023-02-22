| Задача | Файлы |
| --- | --- |
| 2.6.1 Простая страница | [task1.html](task1.html), [task1.js](task1.js) |

# 2.6.1 Простая страница
Создайте страницу, которая спрашивает имя у пользователя и выводит его.

**Решение**
HTML-документ
```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Задание 1</title>
</head>
<body>
	<script src="task1.js"></script>
</body>
</html>
```

task1.js
```javascript
'use strict';
let username = prompt('Как тебя зовут?', '');
alert(`Тебя зовут ${username}`);
```