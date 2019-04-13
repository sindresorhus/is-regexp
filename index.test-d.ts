import {expectType} from 'tsd';
import isRegexp = require('.');

const value: any = 'unicorn';

if (isRegexp(value)) {
	expectType<RegExp>(value);
}
