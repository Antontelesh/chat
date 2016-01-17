import '../styles/LoginForm.css';
import {login} from '../actions/chat';
import {loginError} from '../actions/chat';
import Component from '../factories/Component';

export default function LoginForm (Chat) {

  return function LoginFormComponent (element, dispatch) {

    let input = element.querySelector('input');

    const onSubmit = event => {
      event.preventDefault();

      let username = input.value;

      Chat.connect(username)
        .then(
          chat => dispatch(login(username, chat)),
          error => dispatch(loginError(error))
        );
    };


    element.addEventListener('submit', onSubmit);
    input.focus();

    return Component();
  };

}
