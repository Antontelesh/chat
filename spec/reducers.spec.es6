import test from 'tape';
import reducer from '../src/client/reducers/index.es6';
import {login} from '../src/client/actions/chat.es6';
import {loginError} from '../src/client/actions/chat.es6';
import {receiveChat} from '../src/client/actions/chat.es6';

test('initialState', t => {
  let state = reducer(undefined, {type: 'some nonexistent action'});
  t.deepEqual(state, {chat: {}, login: null, login_error: null});
  t.end();
});

test('login', t => {
  let state = reducer(undefined, login('dev', {prop: 'value'}));
  t.deepEqual(state, {chat: {prop: 'value'}, login: 'dev', login_error: null});
  t.end();
});

test('loginError', t => {
  let state = reducer(undefined, loginError('error!!!'));
  t.deepEqual(state, {chat: {}, login: null, login_error: 'error!!!'});
  t.end();
});

test('receiveChat', t => {
  let state = reducer(undefined, receiveChat({prop: 'value'}));
  t.deepEqual(state.chat, {prop: 'value'});
  t.end();
});
