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

// Class to define Journal Entry object
class Entry {
  constructor(title, body, date, mood, color) {
    this.title = title;
    this.body = body;
    this.date = date;
    this.mood = mood;
    this.color = color;
  }
}

// this is a dummy class that keeps track of the current user as a proof of concept.
class CurrentUser {
  constructor(currentName, currentPassword) {
    this.currentName = currentName;
    this.currentPassword = currentPassword;
  }

  // set name and password of current user
  setSignedIn(name, password) {
    this.currentName = name;
    this.currentPassword = password;
  }

  // return name and password of current user
  retSignedName() {
    return this.currentName;
  }
}

// create a global static list of users to simulate a database
const listOfUsers = new UserList();
const signedIn = new CurrentUser();
listOfUsers.addUser(new UserProfile('Laurel', 'qwerty'));
listOfUsers.addUser(new UserProfile('Irina', 'html'));
listOfUsers.addUser(new UserProfile('Newton', 'CalcRocks'));

// signedIn.setSignedIn('tempName', 'tempPassword');
