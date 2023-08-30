const form = document.querySelector('form.js-contact-form');
const submitBtn = document.querySelector('.js-contact-form-submit');

form.addEventListener('submit', e => {
  e.preventDefault();

  submitBtn.classList.add('spinner');

  setTimeout(() => {
    submitBtn.classList.remove('spinner');
  }, 2000);
});
