import {toNumber} from './../../helper/number';
import {ERROR_DIV_ZERO, ERROR_VALUE} from './../../error';

export const SYMBOL = '/';

export default function func(first, ...rest) {
  const result = rest.reduce((acc, value) => acc / toNumber(value), toNumber(first));

  // previously if (result === Infinity) {
  if (result === Infinity  || result === -Infinity || isNaN(result) && first === 0) {
    throw Error(ERROR_DIV_ZERO);
  }
  if (isNaN(result)) {
    throw Error(ERROR_VALUE);
  }

  return result;
}

func.SYMBOL = SYMBOL;
