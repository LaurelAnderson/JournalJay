// eslint-disable-next-line max-classes-per-file
class UserProfile {
  constructor(name, password) {
    this.name = name;
    this.password = password;
  }
}

class UserList {
  constructor() {
    this.listArr = [];
  }

  addUser(user) {
    this.listArr.push(user);
  }

  search(user) {
    return this.listArr.find((element) => element === user);
  }
}
// User input

const loginForm = window.document.getElementById('login-form');
const loginButton = window.document.getElementById('login-form-submit');

loginButton.addEventListener('click', (e) => {
  e.preventDefault();
  const username = loginForm.username.value;
  const password = loginForm.password.value;

  // make a user list object
  const listOfUsers = new UserList();

  // make a user profile object
  const user = new UserProfile(username, password);

  if (listOfUsers.search(user)) {
    alert('you are a user.');
  } else {
    alert('we made an account for you.');
    listOfUsers.addUser(user);
  }

  // if (username === 'lil_laurel' && password === 'password123') {
  //   alert('You have successfully logged in.');
  //   window.location.reload();
  // } else {
  //   alert('Invalid username and/or password');
  // }
});

// const user1 = new UserProfile('Me', 'Password123');
// const user2 = new UserProfile('Laurel', 'Giveiturall');
// const user3 = new UserProfile('Irina', 'CoolestCat');
//
// console.log(user1 + user2);
// const listOfUsers = new UserList();
// listOfUsers.addUser(user1);
// listOfUsers.addUser(user2);
// console.log(listOfUsers);
// console.log(listOfUsers.search(user2).password);
