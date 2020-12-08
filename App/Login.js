/*  global UserProfile, UserList */

function confirmBox(listOfUsers, inputName, inputPassword) {
  if (window.confirm('Would you like to make an account?')) {
    listOfUsers.addUser(new UserProfile(inputName, inputPassword));
    alert('We made an account for you!');
    console.log(listOfUsers);
  } else {
    window.location.reload();
  }
}

// This is a function that simulates how the controller will interact with the view.
function userInput(inputName, inputPassword) {
  // create a static list of users
  const listOfUsers = new UserList();
  listOfUsers.addUser(new UserProfile('Laurel', 'qwerty'));
  listOfUsers.addUser(new UserProfile('Irina', 'password123'));

  const retProfile = listOfUsers.search(inputName);
  if (retProfile) { // If they are a known user
    alert('you are a user.');
    if (retProfile.password === inputPassword && retProfile.name === inputName) { // check password
      alert('you are signed in!');
      console.log(listOfUsers);
    } else { // incorrect password
      alert('incorrect username or password');
      console.log(listOfUsers);
    }
  } else if (inputName === '' || inputPassword === '') {
    alert('Please input a username or password');
  } else { // if they are not a known user, ask them if they want to sign up.
    confirmBox(listOfUsers, inputName, inputPassword);// do a confirm here.
  }
}

const loginForm = window.document.getElementById('login-form');
const loginButton = window.document.getElementById('login-form-submit');

loginButton.addEventListener('click', (e) => {
  e.preventDefault();
  const username = loginForm.username.value;
  const password = loginForm.password.value;

  userInput(username, password);
});
