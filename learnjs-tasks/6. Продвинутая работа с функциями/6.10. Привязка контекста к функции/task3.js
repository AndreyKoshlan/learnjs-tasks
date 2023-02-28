/* 
  В свойство функции записано значение. Оно не изменится после применения bind.
  Bind вернет другой объект, не имеющий поле "test", поэтому выводом bound.test будет undefined

  Ответ: undefined
*/

function sayHi() {
  alert( this.name );
}
sayHi.test = 5;

let bound = sayHi.bind({
  name: "Вася"
});

alert( bound.test ); // что выведет? почему?