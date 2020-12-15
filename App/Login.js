/*  global UserProfile, listOfUsers, signedInUser */

// link to another page
function traverse() { window.location.href = 'View.html'; }

// this deals with creating a new user
function confirmBox(inputName, inputPassword) {
  if (window.confirm('Would you like to make an account with the given information?')) {
    listOfUsers.addUser(new UserProfile(inputName, inputPassword));
    signedInUser.splice(0, 0, inputName);
    signedInUser.splice(1, 1, inputPassword);
    traverse();
  } else {
    window.location.reload();
  }
}

// This is a function that simulates how the controller will interact with the view.
function userInput(inputName, inputPassword) {
  const retProfile = listOfUsers.search(inputName);
  if (retProfile) { // If they are a known user
    if (retProfile.password === inputPassword && retProfile.name === inputName) { // check password
      // signal user as logged in.
      signedInUser.splice(0, 0, inputName);
      signedInUser.splice(1, 1, inputPassword);
      traverse(); // go to site page
    } else { // incorrect password
      alert('incorrect username or password');
    }
  } else if (inputName === '' || inputPassword === '') {
    alert('Please input a username or password');
  } else { // if they are not a known user, make an account for them.
    alert('You are not a known user. Create an account by inputting your information into the fields, and choose the '
      + '"Create Account" button');
  }
}

// This function deals with creating a new account
function createAccount(inputName, inputPassword) {
  const retProfile = listOfUsers.search(inputName); // returns account with given username
  if (retProfile) { // if there is a user with that username
    alert('Username is taken');
  } else if (inputName === '' || inputPassword === '') { // if the fields are empty
    alert('Please input a username or password');
  } else {
    confirmBox(inputName, inputPassword); // confirm that they want to create an account
  }
}

const loginForm = window.document.getElementById('login-form');
const loginButton = window.document.getElementById('login-form-submit');
const createButton = window.document.getElementById('create-account');

loginButton.addEventListener('click', (e) => {
  e.preventDefault();
  const username = loginForm.username.value;
  const password = loginForm.password.value;
  userInput(username, password);
});

createButton.addEventListener('click', (e) => {
  e.preventDefault();
  const username = loginForm.username.value;
  const password = loginForm.password.value;

  createAccount(username, password);
});
