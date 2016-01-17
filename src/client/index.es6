import './styles/app.css';
import Store from './factories/Store';
import View from './factories/View';
import Chat from './factories/Chat';
import ViewRegistry from './factories/ViewRegistry';
import ComponentRegistry from './factories/ComponentRegistry';
import App from './factories/App';
import reducer from './reducers/index';

import LoginForm from './components/LoginForm';
import LoginError from './components/LoginError';
import MessageForm from './components/MessageForm';
import Buddies from './components/Buddies';
import Messages from './components/Messages';

import chatView from './views/chat';
import loginView from './views/login';

const store = Store(reducer);
const view = View(store.getState);
const view_registry = ViewRegistry();
const component_registry = ComponentRegistry(store);
const chat = Chat('ws://localhost:8081', store.dispatch);

const app = App(view, store, view_registry, component_registry)
  .component('.login-form', LoginForm(chat))
  .component('.login-form__error', LoginError())
  .component('chat-form', MessageForm(chat))
  .component('.chat__buddies', Buddies())
  .component('.chat__messages', Messages())
  .shouldRender((prevState, nextState) => prevState.login !== nextState.login)
  .view(chatView, state => !!state.login)
  .view(loginView, state => !state.login)
  ;

app.bootstrap(document.getElementById('app'));
