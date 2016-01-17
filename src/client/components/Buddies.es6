import '../styles/Buddies.css';
import view from '../views/buddies';
import Component from '../factories/Component';

export default function Buddies () {

  return function BuddiesComponent (element) {

    return Component({
      update(state) {
        element.innerHTML = view(state);
      }
    });

  };

}
