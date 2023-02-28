'use strict';

let styles = ['Джаз', 'Блюз'];
console.log('1.' + styles);

styles.push('Рок-н-ролл');
console.log('2.' +styles);

styles[Math.floor(styles.length / 2)] = 'Классика';
console.log('3.' +styles);

console.log( styles.shift() );
console.log('4.' +styles);

styles.unshift('Рэп', 'Регги');
console.log('5.' +styles);