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