let array = [1, 2, 3];

array = new Proxy(array, {
	get(target, prop, receiver) {
		if (prop < 0) {
			return Reflect.get(target, target.length + +prop, receiver);
		}
		return Reflect.get(target, prop, receiver);
	},

	set(target, prop, val, receiver) {
		if (prop < 0) {
			return Reflect.set(target, target.length + +prop, val, receiver);
		}
		return Reflect.set(target, prop, val, receiver);
	}
});

console.log( array[-1] ); // 3
console.log( array[-2] ); // 2