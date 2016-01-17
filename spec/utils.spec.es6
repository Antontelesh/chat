import test from 'tape';
import classNames from '../src/client/utils/classNames.es6';
import without from '../src/client/utils/without.es6';
import {combineReducers} from '../src/client/utils/reducers.es6';

test('classNames', t => {

  let cls = classNames({
    class1: true,
    class2: 1,
    class3: false,
    class4: 0
  });

  t.ok(cls === 'class1 class2');

  t.end();
});


test('without', t => {

  let arr = [5,4,3,2,1];

  t.deepEqual(without(3, arr), [5,4,2,1]
  , 'should return new array with remove item');

  t.deepEqual(arr, [5,4,3,2,1]
  , 'should not mutate original array');

  t.end();
});


test('combineReducers', t => {

  let reducer = combineReducers({
    prop1: () => 1,
    prop2: () => 2,
    prop3: () => 3
  });

  t.ok(typeof reducer === 'function'
  , 'should return reducer function');

  t.deepEqual(reducer(), {prop1: 1, prop2: 2, prop3: 3});

  t.deepEqual(reducer({prop4: 4}), {prop1: 1, prop2: 2, prop3: 3, prop4: 4});


  t.end();
});
