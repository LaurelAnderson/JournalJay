// This is what makes the user profile objects.
// eslint-disable-next-line max-classes-per-file
class UserProfile {
  constructor(name, password) {
    this.name = name;
    this.password = password;
  }
}

// This class makes an array of users and can add a user and search the array using a username.
class UserList {
  constructor() {
    this.listArr = [];
  }

  addUser(user) {
    this.listArr.push(user);
  }

  search(username) {
    return this.listArr.find((element) => element.name === username);
  }
}

function setCookie(name, value) {
  document.cookie = `${name}=${value || ''}; path=/`;
}

function getCookie(name) {
  const nameEQ = `${name}=`;
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

// This is a function that simulates how the controller will interact with the view.
function userInput() {
  const username = prompt('input your username');
  const password = prompt('input your password');

  // setCookie(username, password);
  const string = getCookie(username);
  if (string) { // If they are a known user
    alert(`${'you are a user.'} ${string} ${password}`);
    if (string === password) { // check password
      alert('you are signed in!');
    } else { // incorrect password
      alert('incorrect password');
    }
  } else { // if they are not a known user, make an account for them.
    alert('we made an account for you.');
    setCookie(username, password);
  }
}

// const user1 = new UserProfile('Me', 'Password123');
// const user2 = new UserProfile('Laurel', 'Giveiturall');
// const user3 = new UserProfile('Irina', 'CoolestCat');
// const user4 = new UserProfile('Me', 'notpassword123');
// const listOfUsers = new UserList();
// listOfUsers.addUser(user1);
// listOfUsers.addUser(user2);
// listOfUsers.addUser(user3);
// console.log(listOfUsers);
userInput();

// const loginForm = window.document.getElementById('login-form');
// const loginButton = window.document.getElementById('login-form-submit');
//
// loginButton.addEventListener('click', (e) => {
//   e.preventDefault();
//   const username = loginForm.username.value;
//   const password = loginForm.password.value;
//
//   if (username === 'lil_laurel' && password === 'password123') {
//     alert('You have successfully logged in.');
//     window.location.reload();
//   } else {
//     alert('Invalid username and/or password');
//   }
// });
