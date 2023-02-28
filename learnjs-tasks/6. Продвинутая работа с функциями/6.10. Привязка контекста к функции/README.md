| Задача | Файлы |
| --- | --- |
| 6.10.1 Связанная функция как метод | [task1.js](task1.js) |
| 6.10.2 Повторный bind | [task2.js](task2.js) |
| 6.10.3 Свойство функции после bind | [task3.js](task3.js) |
| 6.10.4 Исправьте функцию, теряющую "this" | [task4.js](task4.js) |
| 6.10.5 Использование частично применённой функции для логина | [task5.js](task5.js) |

# 6.10.1 Связанная функция как метод
Что выведет функция?
```javascript
function f() {
  alert( this ); // ?
}

let user = {
  g: f.bind(null)
};

user.g();
```

**Решение**
```javascript
// Ответ: выведет null

function f() {
  alert( this ); // null
}

let user = {
  g: f.bind(null)
};

user.g();
```

# 6.10.2 Повторный bind
Можем ли мы изменить this дополнительным связыванием?
Что выведет этот код?
```javascript
function f() {
  alert(this.name);
}

f = f.bind( {name: "Вася"} ).bind( {name: "Петя" } );

f();
```

**Решение**
```javascript
// Ответ: выведет "Вася"

function f() {
  alert(this.name);
}

f = f.bind( {name: "Вася"} ).bind( {name: "Петя" } );

f();
```

# 6.10.3 Свойство функции после bind
В свойство функции записано значение. Изменится ли оно после применения bind? Обоснуйте ответ.
```javascript
function sayHi() {
  alert( this.name );
}
sayHi.test = 5;

let bound = sayHi.bind({
  name: "Вася"
});

alert( bound.test ); // что выведет? почему?
```

**Решение**
```javascript
/* 
  В свойство функции записано значение. Оно не изменится после применения bind.
  Bind вернет другой объект, не имеющий поле "test", поэтому выводом bound.test будет undefined

  Ответ: undefined
*/

function sayHi() {
  alert( this.name );
}
sayHi.test = 5;

let bound = sayHi.bind({
  name: "Вася"
});

alert( bound.test ); // что выведет? почему?
```

# 6.10.4 Исправьте функцию, теряющую "this"
Вызов askPassword() в приведённом ниже коде должен проверить пароль и затем вызвать user.loginOk/loginFail в зависимости от ответа.
Однако, его вызов приводит к ошибке. Почему?
Исправьте выделенную строку, чтобы всё работало (других строк изменять не надо).
```javascript
function askPassword(ok, fail) {
  let password = prompt("Password?", '');
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: 'Вася',

  loginOk() {
    alert(`${this.name} logged in`);
  },

  loginFail() {
    alert(`${this.name} failed to log in`);
  },

};

askPassword(user.loginOk, user.loginFail);
```

**Решение**
```javascript
function askPassword(ok, fail) {
  let password = prompt("Password?", '');
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: 'Вася',

  loginOk() {
    alert(`${this.name} logged in`);
  },

  loginFail() {
    alert(`${this.name} failed to log in`);
  },

};

askPassword(user.loginOk.bind(user), user.loginFail.bind(user)); // добавляем bind(user) в этой строке

// Ответ: loginOk и loginFail выдают ошибку, так не получают контекст.
// Воспользуемся bind, чтобы исправить данную ошибку.
```

# 6.10.5 Использование частично применённой функции для логина
Это задание является немного усложнённым вариантом одного из предыдущих – Исправьте функцию, теряющую "this".
Объект user был изменён. Теперь вместо двух функций loginOk/loginFail у него есть только одна – user.login(true/false).
Что нужно передать в вызов функции askPassword в коде ниже, чтобы она могла вызывать функцию user.login(true) как ok и функцию user.login(false) как fail?
```javascript
function askPassword(ok, fail) {
  let password = prompt("Password?", '');
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: 'John',

  login(result) {
    alert( this.name + (result ? ' logged in' : ' failed to log in') );
  }
};

askPassword(?, ?); // ?
```
Ваши изменения должны затрагивать только выделенный фрагмент кода.

**Решение**
```javascript
function askPassword(ok, fail) {
  let password = prompt("Password?", '');
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: 'John',

  login(result) {
    alert( this.name + (result ? ' logged in' : ' failed to log in') );
  }
};

askPassword(() => user.login(true), () => user.login(false));
```

