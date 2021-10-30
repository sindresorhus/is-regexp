var toString = {}.toString;

export default function isRegexp(value) {
	return toString.call(value) === '[object RegExp]';
}
