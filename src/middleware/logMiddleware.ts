import {Middleware} from 'redux';
import {Action} from '../utils/actions';

export default (): Middleware => {
  return () => (next: Function) => (action: Action) => {
    if (__TEST__) {
      return next(action);
    }
    console.log( // tslint:disable-line:no-console
      `%c[%cdispatching%c] %c[%c${action.type}%c]`,
      'color: #444;',
      'color: #888;',
      'color: #444;',
      'color: #372;',
      'color: #392;',
      'color: #372;',
      action.payload
    );
    let result = next(action);
    // log result?
    return result;
  };
};