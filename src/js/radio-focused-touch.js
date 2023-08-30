const submitBtn = document.querySelector('.js-contact-form-submit');

window.addEventListener('keydown', e => {
  const keyCode = e.code;

  if (keyCode !== 'Space' && keyCode !== 'Enter' && keyCode !== 'NumpadEnter') return;

  const focusedRadio = document.querySelector('.radio:focus, .radio:focus-visible');
  console.log(focusedRadio);
  if (!focusedRadio) return;

  const label = focusedRadio.closest('.js-radio-label');
  const input = label.querySelector('.js-contact-radio');
  input.checked = true;
  submitBtn.removeAttribute('disabled');
});
