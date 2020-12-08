## Programming Paradigms

- Functional Programming - pure function
- Object-Oriented Programming- Objects can hold data in properties and hold behaviours(functions) as methods.
  - factory functions: This function can return a new object every time its called. but every time it create new function with a different reference in memory. The solution is to bring this method outside the scope of the factory function itself. but then no reference available outside of scope and we can use this.
  - We can replace newUser with this, which represents the context of the function. Whenever a function is called as a method of an object, the this inside of it gets implicitly bound to whatever object is calling the function (implicit binding)
  - (explicit binding) call, apply, bind
  - arrow functions: The this value in an arrow function is automatically bound to the this value of the enclosing context of the function at the point of creation - not invocation (i.e. lexically). Attempting to actively set the this value (via implicit or explicit binding) will not work. 에러우 펑션을 사용하는 경우 this가 함수가 만들어졌을때 이미 정의 된다, 함수가 불러졌을 때가 아니라 그리고 binding을 할 수가 없음. 에로우 펀션이 이미 우리를 위해 해두었다
    ... continue from here soon 19.11.20

## Ninja OOP

1. Window object methods
2. Object literal

```js
var userOne = {
  email: "ryu@ninjas.com",
  name: "Ryu",
};
```

- encapsulation? Encapsulation is one of the fundamentals of OOP (object-oriented programming). It refers to the bundling of data with the methods that operate on that data.
  - this object is the capsule
  - mixture is all of the different properties inside the capsule

```js
var userOne = {
  email: "ryu@ninjas.com",
  name: "Ryu",
  login() {
    console.log(this.email, "has login");
  },
  logout() {
    console.log(this.email, "has logout");
  },
};
```

- we can save function in the object, we don't have to use function keyword.
- `login: function(){}` to `login(){}`

3. Updating properties

- `UserOne.name = "Ryu"`
- `UserOne["name"]= "Serin"`/bracket notation need to use string
- []: dynamic access
- what if there are more users?
- we can copy the object and change value but.. what is the point???!!

4. classes

- syntactic sugar
- classes doing same thing as prototype(behind the scene)
- classes in JavaScript are like blueprints.
  ex) Car class -> red car, blue car ....
  ex) User class: email, name, status, login(),logout()
  -> userOne, userTwo

```js
class User {}
```

5. classes constructor

- constructor function
  - function that construct our object
  - so when user create new user, constructor function actually creating that new user object based on classes.
- constructor function going to be fired whenever we want to create a new user object.

```js
class User {
  constructor(email, name) {
    this.email = email;
    this.name = name;
  }
}

var userOne = new User("ryu@com@", "Ryu");
var userTwo = new User("Mario@", "Yoshi");
```

- the new keyword?
  - create a new empty object {}
  - sets the value of "this" to be the new empty object
  - calls the constructor method

6. classes methods

```js
class User {
  constructor(email, name) {
    this.email = email;
    this.name = name;
  } //( no comma here)
  login() {
    console.log(this.email, "just logged in");
  }
  logout() {
    console.log(this.email, "just logged out");
  }
}
var userOne = new User("ryu@com@", "Ryu");
var userTwo = new User("Mario@", "Yoshi");

userOne.login();
userTwo.logout();
```

- define methods outside of constructor function.

7. Method chaining

- how to do `useOne.login().logout()`
- userOne.login() is returned undefined
- create new method updateScore()
- do all the function and return score

```js
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
    console.log(this.email, "score is now", this.score);
    return this;
  }
}
var usrOne = new User("ryu@com@", "Ryu");
var userTwo = new User("Mario@", "Yoshi");

userOne.login().updateScore().updateScore().logout();
```

8. class inheritance

- create admin/ admin going to have extra methods
- create new admin classes
- but we still want users methods
- we don't need set constructor!!!!!!!!!!!
- if we don't have constructor in the class that extends form another class then use constructor in that another class!!!!!!

```js
class Admin extends User {
  //pass extra function
  deleteUser(user) {
    users = users.filter((u) => {
      return u.email != user.email;
    });
  }
}
//create array

var users = [userOne, userTwo, admin];

var admin = new Admin("shan@", "shaun"); // still need to put email  and name

admin.deleteUser(userOne);
console.log(users);
```

- in Admin **proto** deleteUser and another **proto** longin, logout

9. constructor

- JavaScript does not really have class, they just pretend like class

- Javascript prototype model // under the hood

- we still need constructor

```js
//constructor function
function User(email, name) {
  this.email = email;
  this.name = name;
  this.online = false;
  this.login = function () {
    console.log(this.email, "has logged in");
  };
}
var userOne = new User("ryu@com@", "Ryu");
var userTwo = new User("Mario@", "Yoshi");

console.log(userOne);
uerTwo.login();
```

- in console, login method directly in the new instance
- difference between classes and constructor
  - no longer use new keyword
  - when we want to attach methods in classes, we don't put those methods inside the constructor function
- we want use the prototype property on this constructor function.

10. Prototype

- **proto** : just call proto or proto property

- in proto we can see all the methods in object

- we don't have to `arr.**proto**.sort()` just `arr.sort()`

- now userOne method when we check there is not same **proto ** before when we used classes

- it's directly attached now

- put our methods to some kind of prototype property instead of directly on to our object

- prototype dictionary:
  a first or preliminary version of a device or vehicle form which other froms are develperd

- ex)
  - User prototype : login(), logout()
  - userOne : **proto**:user prototype
  - userTwo:**proto**:user prototype

why???

- every object has a prototype/ contain different methods in that object type

- any object that created of that type the proto property will point that prototype and know how to use that method

- so, this way the method is not repeated over and over in each different user instance
- instead difining once, single User prototype, when user object want to use that methods, they know how to do that
- kind of borrowing these methods from prototype instead of having them stored directly on the objects
- more efficient

```js
//constructor function
function User(email, name) {
  this.email = email;
  this.name = name;
  this.online = false;
}

//every object type has prototype property
//how to access?//constructor have prototype, not instance
//define login method in prototype
User.prototype.login = function () {
  this.online = true;
  console.log(this.email, "has logged in");
};

User.prototype.logout = function () {
  this.online = false;
  console.log(this.email, "has logged out");
};

//userOne will have __proto__
var usrOne = new User("ryu@com@", "Ryu");
var userTwo = new User("Mario@", "Yoshi");

console.log(userOne);
uerTwo.login();
```

- all of this stuff creating a prototype for our emulated user class, adding the method to that prototype etc... all going on background when we use class keyword

11. inheritance

```js
function User(email, name) {
  this.email = email;
  this.name = name;
  this.online = false;
}

User.prototype.login = function () {
  this.online = true;
  console.log(this.email, "has logged in");
};

User.prototype.logout = function () {
  this.online = false;
  console.log(this.email, "has logged out");
};
// Admin
function Admin(...args) {
  //want to inherit
  //how to call User// User.apply(call User function)
  User.apply(this, args); //this is just new object from User
  //args is array
  //new property that only admin have
  this.role = "super admin";
  //how to inherit methods?
}

Admin.prototype = Object.create(User.prototype); //create new object

Admin.deleteUser = function (u) {
  users = users.filter((user) => {
    return user.email != u.email;
  });
};
var usrOne = new User("ryu@com@", "Ryu");
var userTwo = new User("Mario@", "Yoshi");
var admin = new Admin("serin@", "serin");

console.log(admin);
```

- in userOne in proto there is funciton
  but not in adimin
- but nested proto

한번더 보기!
