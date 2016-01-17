import form from './form';

export default function chat () {

  return (`
    <div class="chat">
      <div class="chat__columns">
        <div class="chat__sidebar">
          <div class="chat__buddies"></div>
        </div>
        <div class="chat__content">
          <div class="chat__messages"></div>
          <div class="chat__form">
            <chat-form>${form()}</chat-form>
          </div>
        </div>
      </div>
    </div>
  `);

}
