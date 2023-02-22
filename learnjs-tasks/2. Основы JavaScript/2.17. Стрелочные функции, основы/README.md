| Задача | Файлы |
| --- | --- |
| 2.17.1 Операторы сравнения | [task1.js](task1.js) |

# 2.17.1 Перепишите с использованием функции-стрелки
Замените код Function Expression стрелочной функцией:
```javascript
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Вы согласны?",
  function() { alert("Вы согласились."); },
  function() { alert("Вы отменили выполнение."); }
);
```

**Решение**
```javascript
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Вы согласны?",
  () => alert("Вы согласились."),
  () => alert("Вы отменили выполнение.")
);
```