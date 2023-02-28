| Задача | Файлы |
| --- | --- |
| 11.4.1 Ошибка в setTimeout | [task1.js](task1.js) |

# 11.4.1 Ошибка в setTimeout
Что вы думаете? Выполнится ли .catch? Поясните свой ответ.
```javascript
new Promise(function(resolve, reject) {
  setTimeout(() =&gt; {
    throw new Error("Whoops!");
  }, 1000);
}).catch(alert);
```

**Решение**
```javascript
// Ошибка не будет обработана, чтобы это работало необходимо пробросить ошибку через reject

new Promise(function(resolve, reject) {
  setTimeout(() => {
    throw new Error("Whoops!");
  }, 1000);
}).catch(alert);
```

