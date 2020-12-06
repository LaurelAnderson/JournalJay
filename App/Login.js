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

// This is a function that simulates how the controller will interact with the view.
function userInput(listOfUsers, profile) {
  const retProfile = listOfUsers.search(profile.name);
  if (retProfile) { // If they are a known user
    console.log('you are a user.');
    if (retProfile.password === profile.password && retProfile.username === profile.username) { // check password
      console.log('you are signed in!');
    } else { // incorrect password
      console.log('incorrect username or password');
    }
  } else { // if they are not a known user, make an account for them.
    console.log('we made an account for you.');
    listOfUsers.addUser(profile);
    console.log(listOfUsers);
  }
}

const user1 = new UserProfile('Me', 'Password123');
const user2 = new UserProfile('Laurel', 'Giveiturall');
const user3 = new UserProfile('Irina', 'CoolestCat');
const user4 = new UserProfile('Me', 'notpassword123');
const listOfUsers = new UserList();
listOfUsers.addUser(user1);
listOfUsers.addUser(user2);
listOfUsers.addUser(user3);
console.log(listOfUsers);
userInput(listOfUsers, user4);

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
