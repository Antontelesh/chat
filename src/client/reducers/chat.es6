import {CHAT} from '../actions/chat';
import {LOGIN} from '../actions/chat';

export default function chat (state = {}, action) {
  switch (action.type) {

  case CHAT:
  case LOGIN:
    return action.chat;

  default:
    return state;
  }
}
