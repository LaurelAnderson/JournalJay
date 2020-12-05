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

function userInput(listOfUsers, profile) {
  const retProfile = listOfUsers.search(profile);
  if (retProfile) {
    console.log('you are a user.');
    console.log(listOfUsers);
    if (retProfile.password === profile.password && retProfile.username === profile.username) {
      console.log('you are signed in!');
    } else {
      console.log('incorrect username or password');
    }
  } else {
    console.log('we made an account for you.');
    listOfUsers.addUser(profile);
    console.log(listOfUsers);
  }
}

const user1 = new UserProfile('Me', 'Password123');
const user2 = new UserProfile('Laurel', 'Giveiturall');
const user3 = new UserProfile('Irina', 'CoolestCat');
const listOfUsers = new UserList();
listOfUsers.addUser(user1);
listOfUsers.addUser(user2);

userInput(listOfUsers, user2);

// console.log(listOfUsers);
// console.log(listOfUsers.search(user3).password);

//

// const loginForm = window.document.getElementById('login-form');
// const loginButton = window.document.getElementById('login-form-submit');

// loginButton.addEventListener('click', (e) => {
//   e.preventDefault();
//   const username = loginForm.username.value;
//   const password = loginForm.password.value;

// if (username === 'lil_laurel' && password === 'password123') {
//   alert('You have successfully logged in.');
//   window.location.reload();
// } else {
//   alert('Invalid username and/or password');
// }
// });
