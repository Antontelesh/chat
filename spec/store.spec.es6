import test from 'tape';
import noop from '../src/client/utils/noop.es6';
import Store from '../src/client/factories/Store.es6';

test('is function', t => {
  t.ok(typeof Store === 'function'
  , 'should be a function');

  t.end();
});

test('methods', t => {
  let store = Store(noop);

  t.ok(typeof store.dispatch === 'function'
  , 'should have `dispatch` method');

  t.ok(typeof store.subscribe === 'function'
  , 'should have `subscribe` method');

  t.ok(typeof store.getState === 'function'
  , 'should have `getState` method');

  t.ok(typeof store.removeListeners === 'function'
  , 'should have `removeListeners` method');

  t.end();
});

test('dispatching', t => {
  let store = Store(noop);
  let count = 0;

  let unsubscribe = store.subscribe(() => {count++;});

  store.dispatch({});

  t.ok(count === 1
  , 'should call listeners');

  unsubscribe();
  store.dispatch({});

  t.ok(count === 1
  , 'should unsubscribe');

  t.end();
});

test('getState', t => {

  let store = Store(() => 42);

  t.ok(store.getState() === 42
  , 'should return current state');

  t.end();
});

test('removeListeners', t => {

  let store = Store(noop);
  let count1 = 0;
  let count2 = 0;

  store.subscribe(() => {count1++;});
  store.subscribe(() => {count2++;});

  store.removeListeners();
  store.dispatch({});

  t.ok(count1 === 0 && count2 === 0
  , 'should unsubscribe all listeners');

  t.end();
});
