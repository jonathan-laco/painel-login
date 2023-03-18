const form = document.querySelector('form');
const btnLogin = document.querySelector('.btn-login');

form.addEventListener('input', () => {
  if (form.checkValidity()) {
    btnLogin.style.left = '0px';
  }
});
