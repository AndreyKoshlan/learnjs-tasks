| Задача | Файлы |
| --- | --- |
| 14.4.1 Проверка синтаксиса | [task1.js](task1.js) |
| 14.4.2 Объясните значение "this" | [task2.js](task2.js) |

# 14.4.1 Проверка синтаксиса
Каким будет результат выполнения этого кода?
```javascript
let user = {
  name: "John",
  go: function() { alert(this.name) }
}

(user.go)()
```
P.S. Здесь есть подвох :)

**Решение**
```javascript
let user = {
  name: "John",
  go: function() { alert(this.name) }
}

(user.go)() 

// Ответ: JS объединяет (user.go)() с блоком let user. 
// Необходимо добавить точку с запятой, чтобы этого не происходило
```

# 14.4.2 Объясните значение "this"
В представленном ниже коде мы намерены вызвать obj.go() метод 4 раза подряд.
Но вызовы (1) и (2) работают иначе, чем (3) и (4). Почему?
```javascript
let obj, method;

obj = {
  go: function() { alert(this); }
};

obj.go();               // (1) [object Object]

(obj.go)();             // (2) [object Object]

(method = obj.go)();    // (3) undefined

(obj.go || obj.stop)(); // (4) undefined
```

**Решение**
```javascript
let obj, method;

obj = {
  go: function() { alert(this); }
};

obj.go();               // (1) [object Object]

(obj.go)();             // (2) [object Object]

(method = obj.go)();    // (3) undefined

(obj.go || obj.stop)(); // (4) undefined

/*
Ответ: вызовы (1) и (2) работают иначе, чем (3) и (4), т.к 3 и 4
теряют контекст this.
*/
```

