/*  global UserProfile */
describe('Test for Correctness', function () {
  describe('UserProfile()', function () {
    const user1 = new UserProfile('Me', 'Password123');
    it('Created a user profile!', function () {
      chai.expect(UserProfile(user1)).to.deep.equal(user1);
    });
  });
});
