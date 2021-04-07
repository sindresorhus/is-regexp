export default function isRegexp(value) {
	return Object.prototype.toString.call(value) === '[object RegExp]';
}
