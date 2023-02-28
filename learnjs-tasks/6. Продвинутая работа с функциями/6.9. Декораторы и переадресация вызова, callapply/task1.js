function work(a, b) {
  console.log( a + b ); // произвольная функция или метод
}

function spy(func) {
	return function call() {
		if (!call.calls)
			call.calls = [];
		call.calls.push([...arguments]);
		func.apply(this, arguments);
	}
}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
  console.log( 'call:' + args.join() ); // "call:1,2", "call:4,5"
}