import test from 'ava';
import m from '.';

const toStringRegex = () => '[object RegExp]';

test('main', t => {
	t.true(m(/unicorn/));
	t.true(m(new RegExp('unicorn')));
	t.false(m('unicorn'));
	t.false(m(1));
	t.false(m(null));
	t.false(m({}));
	t.false(m([]));
	t.false(m({toString: toStringRegex}));
	t.false(m({__proto__: {toString: toStringRegex}}));
});
