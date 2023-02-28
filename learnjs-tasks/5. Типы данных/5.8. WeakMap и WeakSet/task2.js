// Ответ: WeakMap можно использовать, как структуру данных для хранения информации о том, когда сообщение было прочитано

let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" }
];

let timestamps = new WeakMap();
timestamps.set(messages[0], new Date(2010, 1, 1, 12, 0, 0));
timestamps.set(messages[1], new Date(2010, 1, 2, 14, 10, 0));
timestamps.set(messages[2], new Date(2010, 1, 3, 16, 30, 0));

// Первое сообщение
console.log(`Первое сообщение прочитано: ${timestamps.get(messages[0])}`);

// Второе сообщение
console.log(`Второе сообщение прочитано: ${timestamps.get(messages[1])}`);

// Третье сообщение
console.log(`Третье сообщение прочитано: ${timestamps.get(messages[2])}`);