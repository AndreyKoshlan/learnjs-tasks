| Задача | Файлы |
| --- | --- |
| 11.2.1 Можно ли "перевыполнить" промис? | [task1.js](task1.js) |
| 11.2.2 Задержка на промисах | [task2.js](task2.js) |
| 11.2.3 Анимация круга с помощью промиса | [task3.html](task3.html) |

# 11.2.1 Можно ли "перевыполнить" промис?
Что выведет код ниже?
```javascript
let promise = new Promise(function(resolve, reject) {
  resolve(1);

  setTimeout(() => resolve(2), 1000);
});

promise.then(alert);
```

**Решение**
```javascript
// Ответ: выведет 1, невозможно "перевыполнить" промис

let promise = new Promise(function(resolve, reject) {
  resolve(1);

  setTimeout(() => resolve(2), 1000);
});

promise.then(alert);
```

# 11.2.2 Задержка на промисах
Встроенная функция setTimeout использует колбэк-функции. Создайте альтернативу, использующую промисы.
Функция delay(ms) должна возвращать промис, который перейдёт в состояние «выполнен» через ms миллисекунд, так чтобы мы могли добавить к нему .then:
```javascript
function delay(ms) {
  // ваш код
}

delay(3000).then(() => alert('выполнилось через 3 секунды'));
```

**Решение**
```javascript
'use strict';
function delay(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
}

delay(3000).then(() => console.log('выполнилось через 3 секунды'));
```

# 11.2.3 Анимация круга с помощью промиса
Перепишите функцию showCircle, написанную в задании Анимация круга с помощью колбэка таким образом, чтобы она возвращала промис, вместо того чтобы принимать в аргументы функцию-callback.
Новое использование:
```javascript
showCircle(150, 150, 100).then(div => {
  div.classList.add('message-ball');
  div.append("Hello, world!");
});
```
Возьмите решение из Анимация круга с помощью колбэка в качестве основы.

**Решение**
```html
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <style>
    .message-ball {
      font-size: 20px;
      line-height: 200px;
      text-align: center;
    }
    .circle {
      transition-property: width, height;
      transition-duration: 2s;
      position: fixed;
      transform: translateX(-50%) translateY(-50%);
      background-color: red;
      border-radius: 50%;
    }
  </style>
</head>

<body>

  <button onclick="go()">Нажми на меня</button>

  <script>

  function go() {
    showCircle(150, 150, 100).then(div => {
      div.classList.add('message-ball');
      div.append("Привет, мир!");
    });
  }

  function showCircle(cx, cy, radius, callback) {
    let div = document.createElement('div');
    div.style.width = 0;
    div.style.height = 0;
    div.style.left = cx + 'px';
    div.style.top = cy + 'px';
    div.className = 'circle';
    document.body.append(div);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        div.style.width = radius * 2 + 'px';
        div.style.height = radius * 2 + 'px';

        div.addEventListener('transitionend', function handler() {
          div.removeEventListener('transitionend', handler);
          resolve(div);
        });
      }, 0);
    });
  }
  </script>


</body>
</html>
```

