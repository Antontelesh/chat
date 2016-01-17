import Component from '../factories/Component';

export default function LoginError () {

  return function LoginErrorComponent (element) {
    return Component({
      update(state) {
        let text = state.login_error;
        element.textContent = text;
        element.style.display = text
          ? 'block'
          : 'none';
      }
    });
  };

}
