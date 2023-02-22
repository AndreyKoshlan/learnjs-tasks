| Задача | Файлы |
| --- | --- |
| 2.14.1 Напишите "if", аналогичный "switch" | [task1.js](task1.js) |
| 2.14.2 Переписать условия "if" на "switch" | [task2.js](task2.js) |

# 2.14.1 Напишите "if", аналогичный "switch"
Напишите if..else, соответствующий следующему switch:
```javascript
switch (browser) {
  case 'Edge':
    alert( "You've got the Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;

  default:
    alert( 'We hope that this page looks ok!' );
}
```

**Решение**
```javascript
'use strict';

let browser = 'Edge'; 

if (browser === 'Edge') {
    console.log(`You've got the Edge!`)
} else if (['Chrome', 'Firefox', 'Safari', 'Opera'].includes(browser)) {
    console.log('Okay we support these browsers too')
} else {
    console.log('We hope that this page looks ok!')
}
```

# 2.14.2 Переписать условия "if" на "switch"
Перепишите код с использованием одной конструкции switch:
```javascript
const number = +prompt('Введите число между 0 и 3', '');

if (number === 0) {
  alert('Вы ввели число 0');
}

if (number === 1) {
  alert('Вы ввели число 1');
}

if (number === 2 || number === 3) {
  alert('Вы ввели число 2, а может и 3');
}
```

**Решение**
```javascript
'use strict';

// число между 0 и 3
const number = 0;

switch (number) {
    case 0:
        console.log('Вы ввели число 0');
        break;
    case 1:
        console.log('Вы ввели число 1');
        break;
    case 2:
    case 3:
        console.log('Вы ввели число 2, а может и 3');
}
```

