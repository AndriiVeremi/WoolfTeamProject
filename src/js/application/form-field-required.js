const submitBtn = document.querySelector('.js-contact-form-submit');

submitBtn.addEventListener('click', e => {
  const fields = document.querySelectorAll('.js-required-field');

  fields.forEach(field => {
    field.classList.add('required');
  });
});
