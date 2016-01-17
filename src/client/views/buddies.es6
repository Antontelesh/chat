import classNames from '../utils/classNames';

function buddyClassname (name, username) {
  return classNames({
    'buddies__buddy': true,
    'buddies__buddy--me': name === username
  });
}

function buddy (name, username) {
  return (`
    <li class="${buddyClassname(name, username)}">${name}</li>
  `);
}

export default function buddies (state) {
  let content = state.chat.buddies.map(name => buddy(name, state.login)).join('');

  return `<ul class="buddies">${content}</ul>`;
}
