export default function login () {
  return (`
    <form id="login_form" class="login-form">
      <div class="login-form__controls">
        <input type="text" name="username">
        <button type="submit">Join chat</button>
      </div>
      <div class="login-form__error"></div>
    </form>
  `);
}
