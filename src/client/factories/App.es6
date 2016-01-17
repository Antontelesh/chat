import noop from '../utils/noop';

const App = (View, Store, ViewRegistry, ComponentRegistry) => {

  let shouldRender = noop;
  let root;

  const tryRender = (nextState, prevState) => {
    if (shouldRender(prevState, nextState)) {
      bootstrap(root);
    }
  };

  const update = (nextState, prevState) => {
    tryRender(nextState, prevState);
    ComponentRegistry.update(nextState, prevState);
  };

  const render = state => {
    let view = ViewRegistry.get(state) || noop;
    View.render(view, root);
  };

  const bootstrap = element => {
    root = element;

    render(Store.getState());
    ComponentRegistry.instantiate(element);
    Store.removeListeners();
    Store.subscribe(update);
  };

  const app = {
    view(...args) {
      ViewRegistry.register(...args);
      return this;
    },

    shouldRender(fn) {
      shouldRender = fn;
      return this;
    },

    component(...args) {
      ComponentRegistry.register(...args);
      return this;
    },

    bootstrap
  };

  return app;

};


export default App;
