| Задача | Файлы |
| --- | --- |
| 14.1.1 Ошибка при чтении несуществующего свойства | [task1.js](task1.js) |
| 14.1.2 Получение элемента массива с отрицательной позиции | [task2.js](task2.js) |
| 14.1.3 Observable | [task3.js](task3.js) |

# 14.1.1 Ошибка при чтении несуществующего свойства
Обычно при чтении несуществующего свойства из объекта возвращается undefined.
Создайте прокси, который генерирует ошибку при попытке прочитать несуществующее свойство.
Это может помочь обнаружить программные ошибки пораньше.
Напишите функцию wrap(target), которая берёт объект target и возвращает прокси, добавляющий в него этот аспект функциональности.
Вот как это должно работать:
```javascript
let user = {
  name: "John"
};

function wrap(target) {
  return new Proxy(target, {
      /* ваш код */
  });
}

user = wrap(user);

alert(user.name); // John
alert(user.age); // Ошибка: такого свойства не существует
```

**Решение**
```javascript
let user = {
  name: "John"
};

function wrap(target) {
  return new Proxy(target, {
      get(target, prop, receiver) {
        if (prop in target) {
          return Reflect.get(target, prop, receiver);
        }
        throw new ReferenceError(`${prop} is not defined`);
      }
  });
}

user = wrap(user);

console.log(user.name); // John
console.log(user.age); // Ошибка: такого свойства не существует
```

# 14.1.2 Получение элемента массива с отрицательной позиции
В некоторых языках программирования возможно получать элементы массива, используя отрицательные индексы, отсчитываемые с конца.
Вот так:
```javascript
let array = [1, 2, 3];

array[-1]; // 3, последний элемент
array[-2]; // 2, предпоследний элемент
array[-3]; // 1, за два элемента до последнего
```
Другими словами, array[-N] – это то же, что и array[array.length - N].
Создайте прокси, который реализовывал бы такое поведение.
Вот как это должно работать:
```javascript
let array = [1, 2, 3];

array = new Proxy(array, {
  /* ваш код */
});

alert( array[-1] ); // 3
alert( array[-2] ); // 2

// вся остальная функциональность массивов должна остаться без изменений
```

**Решение**
```javascript
let array = [1, 2, 3];

array = new Proxy(array, {
	get(target, prop, receiver) {
		if (prop < 0) {
			return Reflect.get(target, target.length + +prop, receiver);
		}
		return Reflect.get(target, prop, receiver);
	},

	set(target, prop, val, receiver) {
		if (prop < 0) {
			return Reflect.set(target, target.length + +prop, val, receiver);
		}
		return Reflect.set(target, prop, val, receiver);
	}
});

console.log( array[-1] ); // 3
console.log( array[-2] ); // 2
```

# 14.1.3 Observable
Создайте функцию makeObservable(target), которая делает объект «наблюдаемым», возвращая прокси.
Вот как это должно работать:
```javascript
function makeObservable(target) {
  /* ваш код */
}

let user = {};
user = makeObservable(user);

user.observe((key, value) =&gt; {
  alert(`SET ${key}=${value}`);
});

user.name = "John"; // выводит: SET name=John
```
Другими словами, возвращаемый makeObservable объект аналогичен исходному, но также имеет метод observe(handler), который позволяет запускать handler при любом изменении свойств.
При изменении любого свойства вызывается handler(key, value) с именем и значением свойства.
P.S. В этой задаче ограничьтесь, пожалуйста, только записью свойства. Остальные операции могут быть реализованы похожим образом.

**Решение**
```javascript
'use strict';

function makeObservable(target) {
    let handlers = [];
    target.observe = function(handler) {
        handlers.push(handler);
    };
    return new Proxy(target, {
        set(target, prop, val, receiver) {
            handlers.forEach((f) => f(prop, val));
            return Reflect.set(target, prop, val, receiver);
        }
    });
}

let user = {};
user = makeObservable(user);

user.observe((key, value) => {
    console.log(`SET ${key}=${value}`);
});

user.name = "John"; // выводит: SET name=John
```

