import '../styles/MessageForm.css';
import Component from '../factories/Component';

const ENTER = 13;

export default function MessageForm (Chat) {

  return function MessageFormComponent (element) {

    let input = element.querySelector('textarea');

    const onSubmit = event => {
      event.preventDefault();
      submit();
    };

    const submit = () => {
      let message = input.value;

      Chat.sendMessage(message);
      input.value = '';
    };

    const onKeyDown = event => {
      let modificator = event.shiftKey || event.ctrlKey || event.metaKey;

      if (event.keyCode === ENTER && modificator) {
        submit();
      }
    };


    element.addEventListener('submit', onSubmit);
    input.addEventListener('keydown', onKeyDown);
    input.focus();

    return Component();

  };

}
