import without from '../utils/without';

const Store = (reducer) => {

  let state = reducer(undefined, {type: '@init@'})
    , prevState
    , listeners = [];

  const dispatch = (action) => {
    prevState = state;
    state = reducer(prevState, action);

    // console.groupCollapsed(action.type);
    // console.log('prevState', prevState);
    // console.log('action', action);
    // console.log('nextState', state);
    // console.groupEnd();

    listeners.forEach(fn => fn(state, prevState));
  };

  const subscribe = (listener) => {
    listeners.push(listener);
    return function unsubscribe () {
      listeners = without(listener, listeners);
    };
  };

  const removeListeners = () => {
    listeners = [];
  };

  const getState = () => state;

  return {
    dispatch,
    subscribe,
    removeListeners,
    getState
  };

};

export default Store;
