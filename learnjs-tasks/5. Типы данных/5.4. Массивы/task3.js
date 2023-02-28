let arr = ["a", "b"];

arr.push(function() {
  alert( this );
});

arr[2](); 

/* 
	Ответ: this будет ссылаться на объект arr,
	соответственно выводом в alert будут элементы массива arr: "a", "b" и функция
*/