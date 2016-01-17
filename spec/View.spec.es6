import test from 'tape';
import noop from '../src/client/utils/noop.es6';
import View from '../src/client/factories/View.es6';


test('methods', t => {
  let instance = View(noop);

  t.ok(typeof instance.render === 'function'
  , 'should have `render` method');

  t.end();
});

test('render', t => {

  let instance = View(noop);
  let view = () => 'hello!';
  let element = {};

  instance.render(view, element);

  t.ok(element.innerHTML === 'hello!'
  , 'should set `innerHTML` property of element');

  t.end();
});
