import classNames from '../utils/classNames';

const senderClassName = (msg, username) => {
  return classNames({
    'message__sender': true,
    'message__sender--system': !!msg.is_system,
    'message__sender--my': msg.sender === username
  });
};

function message (msg, username) {
  return (`
    <li class="messages__message message">
      <div class="${senderClassName(msg, username)}">${msg.sender}:</div>
      <div class="message__content">${msg.content}</div>
    </li>
  `);
}

export default function messages (state) {

  let content = state.chat.messages
    .map(msg => message(msg, state.login))
    .join('');

  return `<ul class="messages">${content}</ul>`;
}
