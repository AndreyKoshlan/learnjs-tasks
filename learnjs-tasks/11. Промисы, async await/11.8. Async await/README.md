| Задача | Файлы |
| --- | --- |
| 11.8.1 Перепишите, используя async/await | [task1.js](task1.js) |
| 11.8.2 Перепишите, используя async/await | [task2.html](task2.html), [task2.js](task2.js) |
| 11.8.3 Вызовите async–функцию из "обычной" | [task3.js](task3.js) |

# 11.8.1 Перепишите, используя async/await
Перепишите один из примеров раздела Цепочка промисов, используя async/await вместо .then/catch:
```javascript
function loadJson(url) {
  return fetch(url)
    .then(response =&gt; {
      if (response.status == 200) {
        return response.json();
      } else {
        throw new Error(response.status);
      }
    })
}

loadJson('no-such-user.json') // (3)
  .catch(alert); // Error: 404
```

**Решение**
```javascript
async function loadJson(url) {
  let response = await fetch(url);
  if (response.status == 200) {
    return response.json();
  } else {
    throw new Error(response.status);
  }
}

loadJson('no-such-user.json') // (3)
  .catch(console.log); // Error: 404
```

# 11.8.2 Перепишите, используя async/await
Ниже пример из раздела Цепочка промисов, перепишите его, используя async/await вместо .then/catch.
В функции demoGithubUser замените рекурсию на цикл: используя async/await, сделать это будет просто.
```javascript
class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}

function loadJson(url) {
  return fetch(url)
    .then(response =&gt; {
      if (response.status == 200) {
        return response.json();
      } else {
        throw new HttpError(response);
      }
    })
}

// Запрашивать логин, пока github не вернёт существующего пользователя.
function demoGithubUser() {
  let name = prompt("Введите логин?", "iliakan");

  return loadJson(`https://api.github.com/users/${name}`)
    .then(user =&gt; {
      alert(`Полное имя: ${user.name}.`);
      return user;
    })
    .catch(err =&gt; {
      if (err instanceof HttpError &amp;&amp; err.response.status == 404) {
        alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
        return demoGithubUser();
      } else {
        throw err;
      }
    });
}

demoGithubUser();
```

**Решение**
```javascript
class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}

async function loadJson(url) {
  let response = await fetch(url);
  if (response.status == 200) {
    return response.json();
  } else {
    throw new HttpError(response);
  }
}

// Запрашивать логин, пока github не вернёт существующего пользователя.
async function demoGithubUser() {
  while (true) {
    let name = prompt("Введите логин?", "iliakan");

    try {
      let user = await loadJson(`https://api.github.com/users/${name}`);
      alert(`Полное имя: ${user.name}.`);
      return user;
    } catch (err) {
      if (err instanceof HttpError && err.response.status == 404) {
        alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
      } else {
        throw err;
      }
    }
  }
}

demoGithubUser();
```

# 11.8.3 Вызовите async–функцию из "обычной"
Есть «обычная» функция. Как можно внутри неё получить результат выполнения async–функции?
```javascript
async function wait() {
  await new Promise(resolve =&gt; setTimeout(resolve, 1000));

  return 10;
}

function f() {
  // ...что здесь написать?
  // чтобы вызвать wait() и дождаться результата "10" от async–функции
  // не забывайте, здесь нельзя использовать "await"
}
```
P.S. Технически задача очень простая, но этот вопрос часто задают разработчики, недавно познакомившиеся с async/await.

**Решение**
```javascript
async function wait() {
  await new Promise(resolve => setTimeout(resolve, 1000));

  return 10;
}

function f() {
  // ...что здесь написать?
  // чтобы вызвать wait() и дождаться результата "10" от async–функции
  // не забывайте, здесь нельзя использовать "await"

  //Ответ: используем then, возможно также сделать async обертку
  wait().then(console.log);
}

f();
```

