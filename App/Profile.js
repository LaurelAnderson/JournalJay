/*  global UserProfile, listOfUsers */

const updateForm = window.document.getElementById('update-form');
const updateButton = window.document.getElementById('update-profile');

updateButton.addEventListener('click', (e) => {
    e.preventDefault();
    const username = updateForm.username.value;
    const password = updateForm.password.value;
  
    createAccount(username, password);
  });
  