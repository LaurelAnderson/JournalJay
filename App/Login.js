const loginForm = document.getElementById('login-form');
const loginButton = document.getElementById('login-form-submit');

loginButton.addEventListener('click', (e) => {
  e.preventDefault();
  const username = loginForm.username.value;
  const password = loginForm.password.value;

  if (username === 'lil_laurel' && password === 'password123') {
    alert('You have successfully logged in.');
    window.location.reload();
  } else {
    alert('Invalid username and/or password');
  }
});