export const CHAT = 'CHAT';
export const LOGIN = 'LOGIN';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export function receiveChat (chat) {
  return {
    type: CHAT,
    chat
  };
}

export function login (username, chat) {
  return {
    type: LOGIN,
    username,
    chat
  };
}

export function loginError (error) {
  return {
    type: LOGIN_ERROR,
    error
  };
}
