| Задача | Файлы |
| --- | --- |
| 2.1.1 Вызвать alert | [task1.html](task1.html) |
| 2.1.2 Покажите сообщение с помощью внешнего скрипта | [task2.html](task2.html), [alert.js](alert.js) |

# 2.1.1 Вызвать alert
Создайте страницу, которая отобразит сообщение «Я JavaScript!».

Выполните это задание в песочнице, либо на вашем жёстком диске, где – неважно, главное – проверьте, что она работает.

**Решение**
JavaScript в HTML-документе.
```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Задание 1</title>
</head>
<body>
	<script>alert('Я JavaScript!')</script>
</body>
</html>
```

# 2.1.2 Покажите сообщение с помощью внешнего скрипта
Возьмите решение предыдущей задачи "Вызвать alert", и измените его. Извлеките содержимое скрипта во внешний файл alert.js, лежащий в той же папке.

Откройте страницу, убедитесь, что оповещение работает.

**Решение**
Подключение внешнего скрипта в HTML-документе.
```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Задание 2</title>
</head>
<body>
	<script src="alert.js"></script>
</body>
</html>
```
Внешний скрипт alert.js.
```javascript
alert('Я JavaScript!');
```