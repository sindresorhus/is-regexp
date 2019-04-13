import test from 'ava';
import isRegexp from '.';

const toStringRegex = () => '[object RegExp]';

test('main', t => {
	t.true(isRegexp(/unicorn/));
	t.true(isRegexp(new RegExp('unicorn')));
	t.false(isRegexp('unicorn'));
	t.false(isRegexp(1));
	t.false(isRegexp(null));
	t.false(isRegexp({}));
	t.false(isRegexp([]));
	t.false(isRegexp({toString: toStringRegex}));
	t.false(isRegexp({__proto__: {toString: toStringRegex}}));
});
