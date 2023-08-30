const select = document.querySelector('.js-contact-radio-select');
const submitBtn = document.querySelector('.js-contact-form-submit');

let count = 0;

select.addEventListener('click', e => {
  const isCheked = document.querySelector('.js-contact-radio:checked');
  if (isCheked) {
    submitBtn.removeAttribute('disabled');
  }
});
