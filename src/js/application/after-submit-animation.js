const form = document.querySelector('form.js-contact-form');
const submitBtn = document.querySelector('.js-contact-form-submit');

const tooltip = document.querySelector('.js-tooltip');

const actionBeforeSubmit = () => {
  tooltip.classList.toggle('hidden', false);
  setTimeout(() => {
    tooltip.classList.toggle('hidden', true);
    form.submit();
  }, 2000);
};

form.addEventListener('submit', e => {
  e.preventDefault();

  submitBtn.classList.add('spinner');

  setTimeout(() => {
    submitBtn.classList.remove('spinner');
    actionBeforeSubmit();
  }, 2000);
});
