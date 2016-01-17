import noop from '../utils/noop';

export default function Component (methods) {
  return Object.assign({
    shouldUpdate() { return true; },
    update: noop
  }, methods);
}
