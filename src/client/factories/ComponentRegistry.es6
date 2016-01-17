import identity from '../utils/identity';

export default function ComponentRegistry (Store) {

  let registry = [];
  let instances = [];

  const register = (selector, factory) => {
    registry.push({selector, factory});
  };

  const instantiate = root => {
    instances = registry.map(({selector, factory}) => {
      let element = root.querySelector(selector);
      return element
        ? factory(element, Store.dispatch)
        : null;
    }).filter(identity);
  };

  const update = (nextState, prevState) => {
    instances.forEach(instance => {
      if (instance.shouldUpdate(nextState, prevState)) {
        instance.update(nextState, prevState);
      }
    });
  };

  return {
    register,
    instantiate,
    update
  };
}
