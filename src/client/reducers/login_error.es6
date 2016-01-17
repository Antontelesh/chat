import {LOGIN} from '../actions/chat';
import {LOGIN_ERROR} from '../actions/chat';

export default function login_error (state = null, action) {
  switch (action.type) {

  case LOGIN:
    return null;

  case LOGIN_ERROR:
    return action.error;

  default:
    return state;
  }
}
