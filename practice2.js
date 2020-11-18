class User {
  constructor(email, name) {
    this.email = email;
    this.name = name;
    this.score = 0;
  } //( no comma here)
  login() {
    console.log(this.email, "just logged in");
    return this;
  }
  logout() {
    console.log(this.email, "just logged out");
    return this;
  }
  //create new method
  updateScore() {
    this.score++;
    console.log(this.email, "score is not", this.score);
    return this;
  }
}
let userOne = new User("ryu@com@", "Ryu");
let userTwo = new User("Mario@", "Yoshi");
let users = [userOne, userTwo];

class Admin extends User {
  //pass extra function
  deleteUser(user) {
      user = users.filter((u) => {
      return u.email !== user.email;
    });
  }
}
//create array

var admin = new Admin("shan@", "shaun"); // still need to put email  and name

admin.deleteUser(userOne);
console.log(users);