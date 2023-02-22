| Задача | Файлы |
| --- | --- |
| 2.5.1 Шаблонные строки | [task1.js](task1.js) |

# 2.5.1 Шаблонные строки
Что выведет этот скрипт?
```javascript
let name = "Ilya";

alert( `hello ${1}` ); // ?

alert( `hello ${"name"}` ); // ?

alert( `hello ${name}` ); // ?
```

**Решение**
```javascript
let name = "Ilya";

alert( `hello ${1}` ); // hello 1

alert( `hello ${"name"}` ); // hello name

alert( `hello ${name}` ); // hello Ilya
```