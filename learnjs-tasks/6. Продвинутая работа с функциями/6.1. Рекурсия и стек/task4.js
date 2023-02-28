'use strict';

// Используя цикл
function printList1(list) {
	let obj = list;
	while (obj) {
		console.log(obj.value);
		obj = obj.next;
	}
}

// Используя рекурсию
function printList2(list) {
	console.log( list.value );
	if (list.next)
		printList2(list.next);
}

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

console.log('С использованием цикла');
printList1(list);

console.log('\nС использованием рекурсии');
printList2(list);

/* 
Вариант с использоваинем цикла превосходит вариант с использоваинем рекурсии, 
т.к. циклический алгоритм имеет наименьшее время выполнения и отсутствует недостаток переполнения стека
*/