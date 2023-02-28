'use strict';

// Используя цикл
function printList1(list) {
	let values = [];
  let obj = list;
	while (obj) {
    values.push(obj.value);
		obj = obj.next;
	}
  for (let i = values.length - 1; i >= 0; i--) {
    console.log(values[i]);
  }
}

// Используя рекурсию
function printList2(list) {
	if (list.next)
		printList2(list.next);
  console.log( list.value );
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