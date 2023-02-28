'use strict';

function checkSpam(str) {
	let lowerCaseStr = str.toLowerCase();
	return (lowerCaseStr.includes('xxx') || lowerCaseStr.includes('viagra'));
}

console.log( checkSpam('buy ViAgRA now') ); //== true
console.log( checkSpam('free xxxxx') ); //== true
console.log( checkSpam("innocent rabbit") ); //== false