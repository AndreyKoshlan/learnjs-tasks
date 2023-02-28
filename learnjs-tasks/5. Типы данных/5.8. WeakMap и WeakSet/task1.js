// Ответ: WeakSet можно использовать, как структуру данных для ответа на вопрос «было ли сообщение прочитано?»

'use strict';

let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];

let readed = new WeakSet(messages);

// проверим, прочитано ли сообщение Hello от John
console.log(readed.has(messages[0])); // true