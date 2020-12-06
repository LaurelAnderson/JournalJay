/*  global UserProfile, UserList */
describe('Test for Correctness', function () {
  describe('UserProfile()', function () {
    const user1 = new UserProfile('Me', 'Password123');

    it('Created a user profile!', function () {
      chai.expect(new UserProfile('Me', 'Password123')).to.deep.equal(user1);
    });
  });
  describe('UserList()', function () {
    const user1 = new UserProfile('Me', 'Password123');
    const user2 = new UserProfile('Laurel', 'Giveiturall');
    const user3 = new UserProfile('Irina', 'CoolestCat');
    const listOfUsers = new UserList();
    const listOfUsers2 = new UserList();
    listOfUsers.addUser(user1);
    listOfUsers.addUser(user2);
    listOfUsers2.addUser(user1);
    listOfUsers2.addUser(user2);

    it('Added users to the user list!', function () {
      chai.expect(listOfUsers).to.deep.equal(listOfUsers2);
    });

    it('Searched a user by username!', function () {
      chai.expect(listOfUsers.search(user1.name)).to.deep.equal(user1);
    });
  });
});
