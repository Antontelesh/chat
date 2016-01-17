export default function form () {
  return (`
    <form id="message_form" class="message-form">
      <textarea class="message-form__message"></textarea>
      <button type="submit" class="message-form__submit">Send</button>
    </form>
  `);
}
