export default function ViewRegistry () {

  let views = new Map();

  const register = (viewFn, condition) => {
    views.set(viewFn, condition);
  };

  const get = state => {
    for (let [viewFn, condition] of views) {
      if (condition(state)) {
        return viewFn;
      }
    }
  };

  return {register, get};
}
