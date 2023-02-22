'use strict';

let calculator = {
    read() {
        this.value1 = +prompt('Введите число 1', '');
        this.value2 = +prompt('Введите число 2', '');
    },

    sum() {
        return this.value1 + this.value2;
    },

    mul() {
        return this.value1 * this.value2;
    }

};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );