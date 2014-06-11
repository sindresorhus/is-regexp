'use strict';
var assert = require('assert');
var isRegexp = require('./');

it('should match RegExp', function () {
	assert(isRegexp(/unicorn/));
	assert(isRegexp(new RegExp('unicorn')));
	assert(!isRegexp('unicorn'));
	assert(!isRegexp(1));
	assert(!isRegexp(null));
	assert(!isRegexp({}));
	assert(!isRegexp([]));
});
