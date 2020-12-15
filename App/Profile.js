/*  global signedIn */

window.document.getElementById('username-field').placeholder = 'temp';
const updateForm = window.document.getElementById('update-form');
const updateButton = window.document.getElementById('update-profile');

updateButton.addEventListener('click', (e) => {
  e.preventDefault();
  alert(signedIn.retSignedName());
  // const username = updateForm.username.value;
  // const password = updateForm.password.value;

  // createAccount(username, password);
});
