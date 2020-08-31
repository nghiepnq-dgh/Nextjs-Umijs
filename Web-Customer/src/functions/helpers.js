// import { SELECTED_INDEX } from './../modules/solutions/models';
import Router from 'next/router'

/* eslint-disable no-undef */

const Moment = require('moment');

export function unixToTime(unix) {
	Moment.locale('vi');
	return Moment(unix).format('Do MMMM YYYY, h:mm:ss');
}

export function formatTime(date) {
	Moment.locale('vi');
	return Moment(date).format("DD/MM/YYYY");
}

export function isJson(_string) {
	try {
		JSON.parse(_string);
	} catch (e) {
		return false;
	}
	return true;
}

export function isValidEmail(email) {
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}

export function parserSearchParams(searchParams = {}) {
	console.log('parserSearchParams', searchParams);
	const arr = [];
	Object.keys(searchParams).forEach(key => {
		let value = searchParams[key];
		if (value || value === 0) {
			if (Array.isArray(value)) {
				value = value.join(',');
			}
			arr.push(`${key}=${value}`);
		}
	});
	return arr.join('&');
}

//TODO:
export function toSlug(str) {
	str = str.toLowerCase();
	str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
	str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
	str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
	str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
	str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
	str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
	str = str.replace(/(đ)/g, 'd');
	str = str.replace(/([^0-9a-z-\s])/g, '');
	str = str.replace(/(\s+)/g, '-');
	str = str.replace(/^-+/g, '');
	str = str.replace(/-+$/g, '');
	return str;
}

// export function prettierObjectSearch(params = {}) {
// 	const obj = { ...params }
// 	Object.keys(obj).map(key => {
// 		const value = obj[key];
// 		if (isEmpty(value)) {
// 			delete obj[key];
// 		} else {
// 			if (Array.isArray(value)) {
// 				const index = value.indexOf(SELECTED_INDEX);
// 				if (index > -1) {
// 					value.splice(index, 1);
// 					obj[key] = value;
// 				}
// 			}
// 		}
// 	});
// 	return obj;
// }

export function isEmpty(x) {
	return x === null || x === undefined || x === '' || (Array.isArray(x) && !x.length);
}

export function removeNullSearchParams(params = {}) {
	const obj = { ...params }
	Object.keys(obj).forEach(key => {
		if (obj[key] === 'NaN' || obj[key] === null || obj[key] === '' || obj[key] === 'undefined') {
			delete obj[key];
		}
	})
	return obj
}

export const redirectTo = (destination, res) => {
	if (res) {
		/** Redicrect in server side */
		res.writeHead(302, { Location: destination })
		res.end()
	} else {
		/** Redicrect in client side when use <Link> tag */
		Router.push(destination)
	}
	return false
}

export function numberWithCommas(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function numberWithDots(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}