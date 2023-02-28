| Задача | Файлы |
| --- | --- |
| 5.12.1 Преобразуйте объект в JSON, а затем обратно в обычный объект | [task1.js](task1.js) |
| 5.12.2 Исключить обратные ссылки | [task2.js](task2.js) |

# 5.12.1 Преобразуйте объект в JSON, а затем обратно в обычный объект
Преобразуйте user в JSON, затем прочитайте этот JSON в другую переменную.
```javascript
let user = {
  name: "Василий Иванович",
  age: 35
};
```

**Решение**
```javascript
'use strict';

let user = {
  name: "Василий Иванович",
  age: 35
};

let json = JSON.stringify(user);
console.log(json);

let parsed = JSON.parse(json);
console.log(parsed);
```

# 5.12.2 Исключить обратные ссылки
В простых случаях циклических ссылок мы можем исключить свойство, из-за которого они возникают, из сериализации по его имени.
Но иногда мы не можем использовать имя, так как могут быть и другие, нужные, свойства с этим именем во вложенных объектах. Поэтому можно проверять свойство по значению.
Напишите функцию replacer для JSON-преобразования, которая удалит свойства, ссылающиеся на meetup:
```javascript
let room = {
  number: 23
};

let meetup = {
  title: "Совещание",
  occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
  place: room
};

// цикличные ссылки
room.occupiedBy = meetup;
meetup.self = meetup;

alert( JSON.stringify(meetup, function replacer(key, value) {
  /* ваш код */
}));

/* в результате должно быть:
{
  "title":"Совещание",
  "occupiedBy":[{"name":"Иванов"},{"name":"Петров"}],
  "place":{"number":23}
}
*/
```

**Решение**
```javascript
'use strict';

let room = {
  number: 23
};

let meetup = {
  title: "Совещание",
  occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
  place: room
};

// цикличные ссылки
room.occupiedBy = meetup;
meetup.self = meetup;

console.log( JSON.stringify(meetup, function replacer(key, value) {
  if (key && value === meetup) 
    return undefined;
  return value;
}));

/* в результате должно быть:
{
  "title":"Совещание",
  "occupiedBy":[{"name":"Иванов"},{"name":"Петров"}],
  "place":{"number":23}
}
*/
```

