// This is what makes the user profile objects.
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

// create a global static list of users to simulate a database
const listOfUsers = new UserList();
listOfUsers.addUser(new UserProfile('Laurel', 'qwerty'));
listOfUsers.addUser(new UserProfile('Irina', 'html'));
listOfUsers.addUser(new UserProfile('Newton', 'CalcRocks'));
