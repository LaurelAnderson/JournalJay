// This is the basic logic of the profile page

window.document.getElementById('username-field').placeholder = 'current username';
window.document.getElementById('password-field').placeholder = 'current password';

const updateForm = window.document.getElementById('update-form');
const updateButton = window.document.getElementById('update-profile');

updateButton.addEventListener('click', (e) => {
  e.preventDefault();
  const username = updateForm.username.value;
  const password = updateForm.password.value;

  // check to make sure the user has inputs
  if (username !== '' && password !== '') {
    if (window.confirm('Are you sure you want to change your account info?')) {
      updateForm.reset();
      updateForm.username.placeholder = username;
      updateForm.password.placeholder = password;
    } else {
      updateForm.reset();
    }
  } else {
    alert('Please input a new username and password');
  }
});
