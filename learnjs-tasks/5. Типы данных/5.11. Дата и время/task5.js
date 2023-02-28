'use strict';

function getLastDayOfMonth(year, month) {
	let dateIndex = 28;
	let dateSearch = new Date(year, month, dateIndex);
	while (dateSearch.getMonth() == month) {
		dateSearch.setDate(++dateIndex);
	}
	return dateIndex - 1;
}

console.log( getLastDayOfMonth(2012, 1) ); // = 29