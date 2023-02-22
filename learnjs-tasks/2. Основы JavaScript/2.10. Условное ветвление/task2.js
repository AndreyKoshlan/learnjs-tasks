'use strict';

let userPrompt = prompt('Какое «официальное» название JavaScript?', '');
if (userPrompt.toLowerCase() === 'ecmascript') {
    alert('Верно!');
} else {
    alert('Не знаете? ECMAScript!');
}