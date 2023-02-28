function aclean(arr) {
	return Array.from(new Set(arr.map((str) => 
		Array.from(str.toLowerCase()).sort().join('')
	)));
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"