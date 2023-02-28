let head = {
  glasses: 1
};

let table = {
  pen: 3,
  __proto__: head
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table
};

let pockets = {
  money: 2000,
  __proto__: bed
};

/* 
Ответьте на вопрос: как быстрее получить значение glasses – 
через pockets.glasses или через head.glasses? 
При необходимости составьте цепочки поиска и сравните их.

Ответ: Через head.glasses быстрее получить значение.
Цепочка из pockets состоит из следующего пути: pockets -> bed -> table -> head,
в то время как head.glasses находит значение сразу же. Однако, производительность
может зависить от различных движков JavaScript.
*/