'use strict';

function getDateAgo(date, days) {
	let newDate = new Date(date);
	let offset = date.getDate() - days;
	newDate.setDate(offset);
	return newDate.getDate();
}

let date = new Date(2015, 0, 2);

console.log( getDateAgo(date, 1).toString() ); // 1, (1 Jan 2015)
console.log( getDateAgo(date, 2).toString() ); // 31, (31 Dec 2014)
console.log( getDateAgo(date, 365).toString() ); // 2, (2 Jan 2014)