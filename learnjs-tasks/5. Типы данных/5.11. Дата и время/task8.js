'use strict';

function formatDate(date) {
	function formatZeroDigit(value) {
		let str = value.toString();
		return str.length - 1 ? str : '0' + str;
	}

	if (Date.now() - date < 1000)
		return 'Прямо сейчас';
	if (Date.now() - date < 60 * 1000)
		return Math.round((Date.now() - date) / 1000) + ' сек. назад';
	if (Date.now() - date < 60 * 60 * 1000)
		return Math.round((Date.now() - date) / 60 / 1000) + ' мин. назад';

	return `${formatZeroDigit( date.getDate() )}.\
		${formatZeroDigit( date.getMonth()+1 )}.\
		${date.getFullYear()} \
		${formatZeroDigit( date.getHours() )}:\
		${formatZeroDigit( date.getMinutes() )}`
		.replaceAll('\t', '');
}

console.log( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

console.log( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// вчерашняя дата
console.log( formatDate(new Date(new Date - 86400 * 1000)) );