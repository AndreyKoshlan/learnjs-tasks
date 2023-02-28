'use strict';

function getSecondsToTomorrow() {
	let tomorrowDate = new Date();
	tomorrowDate.setDate(tomorrowDate.getDate() + 1);
	tomorrowDate.setHours(0);
	tomorrowDate.setMinutes(0);
	tomorrowDate.setSeconds(0);
	tomorrowDate.setMilliseconds(0);
	return Math.round((tomorrowDate - Date.now()) / 1000);
}

console.log( getSecondsToTomorrow() );