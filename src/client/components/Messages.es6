import '../styles/Messages.css';
import Component from '../factories/Component';
import view from '../views/messages';

function isAutoscrollEnabled (element) {
  let at_bottom = (element.clientHeight + element.scrollTop) >= element.scrollHeight;
  return at_bottom || !element.innerHTML.trim().length;
}

export default function Messages () {

  return function MessagesComponent (element) {

    return Component({
      update(state) {
        let autoscroll = isAutoscrollEnabled(element);
        element.innerHTML = view(state);

        if (autoscroll) {
          element.scrollTop = element.scrollHeight - element.clientHeight;
        }
      }
    });

  };

}
