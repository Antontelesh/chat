export function combineReducers (reducers) {
  return function reducer (state = {}, action) {
    return Object.keys(reducers).reduce((_state, key) => {
      return Object.assign({}, _state, {
        [key]: reducers[key](_state[key], action)
      });
    }, state);
  };
}
