'use strict';

function randomInteger(min, max) {
    return min + Math.floor( (Math.random() * (max - min + 1) ));
}

function shuffle(arr) {
    arr.forEach((value, index) => {
        let randomIndex = randomInteger(index, arr.length-1);
        [arr[index], arr[randomIndex]] = [arr[randomIndex], arr[index]];
    });
}

let arr = [1, 2, 3];

shuffle(arr);
console.log(arr);
// arr = [3, 2, 1]

shuffle(arr);
console.log(arr);
// arr = [2, 1, 3]

shuffle(arr);
console.log(arr);
// arr = [3, 1, 2]
// ...