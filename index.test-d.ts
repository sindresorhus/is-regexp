import {expectType} from 'tsd';
import isRegexp from './index.js';

const value: any = 'unicorn';

if (isRegexp(value)) {
	expectType<RegExp>(value);
}
