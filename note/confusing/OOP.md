1. Programming Paradigms
   - Functional Programming - pure function
   - Object-Oriented Programming- Objects can hold data in properties and hold behaviours(functions) as methods.
     - factory functions: This function can return a new object every time its called. but every time it create new function with a different reference in memory. The solution is to bring this method outside the scope of the factory function itself. but then no reference available outside of scope and we can use this.
     - We can replace newUser with this, which represents the context of the function. Whenever a function is called as a method of an object, the this inside of it gets implicitly bound to whatever object is calling the function (implicit binding)
     - (explicit binding) call, apply, bind
     - arrow functions: The this value in an arrow function is automatically bound to the this value of the enclosing context of the function at the point of creation - not invocation (i.e. lexically). Attempting to actively set the this value (via implicit or explicit binding) will not work. 에러우 펑션을 사용하는 경우 this가 함수가 만들어졌을때 이미 정의 된다, 함수가 불러졌을 때가 아니라 그리고 binding을 할 수가 없음. 에로우 펀션이 이미 우리를 위해 해두었다

Ninja OOP

1. window object methods
2. Object literal

```js
var userOne = {
  email: "ryu@ninjas.com",
  name: "Ryu",
};
```

- encapsulation?
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

- we can save function in the object but we don't have to use function key word.
- `login: function(){}` to `login(){}`

3. updating properties
   `UserOne.name = "Ryu"`
   `UserOne["name"]= "Serin"`
   ( bracket notation need to use string)

- []: dynamic access

- what if there are more users?
- we can copy the object and change value but.. what is the point???!!!
  (we just copy, repeat a lot )

4. classes
   - syntactic sugar
   - classes doing same thing as prototype(behind the secne)

- Classes in JavaScript are like blueprints.
  ex) Car class -> red car, blue car ....
  ex) User class: email, name, status, login(),logout()
  -> userOne, userTwo

```js
class User {}
```

5. classes constructor

- create constructor function
  function that construct our object
  so when user create new user, constructor function actually creating
  that new user object based on classes.
- constructor function going to be fired whenever we want to create a new user object

```js
class User {
  constructor(email, name) {
    this.email = email;
    this.name = name;
  }
}

var usrOne = new User("ryu@com@", "Ryu");
var userTwo = new User("Mario@", "Yoshi");
```

- the new keyword
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
var usrOne = new User("ryu@com@", "Ryu");
var userTwo = new User("Mario@", "Yoshi");

userOne.login();
UserTwo.logout();
```

- define methods outside of constructor

7. Method chaining
   `useOne.login().logout()`
   userOne.login() is returned undefined
   (we do call function but return undefined)

- how to combat?
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
    console.log(this.email, "score is not", this.score);
    return this;
  }
}
var usrOne = new User("ryu@com@", "Ryu");
var userTwo = new User("Mario@", "Yoshi");

userOne.login().updateScore().updateScore().logout();
```

8. class inheritance

- create admin
  admin going to have extra methods
- create new admin classes
- but we still want users methods

- we don't need constructor!!!!!!!!!!!
- if we don't have constructor in the class that extends
  form another class then use consructor in another class!!!!!!

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

admin.deleteUser(userOn);
console.log(users);
```

- in Admin **proto** deleteUser and anotehr **proto)**

9. constructor

Javascirpt does not really have class
they juet pretend like class

Javascript prototype model

under the hood

not everyone want to use classses!

we still need constructor

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
var usrOne = new User("ryu@com@", "Ryu");
var userTwo = new User("Mario@", "Yoshi");

console.log(userOne);
uerTwo.login();
```

- difference claases and constructor
- no longer use new keyword
- when we want to attach methods in classes
  we dont put those methods inside the constructor fucnction
- instead we use the prototype property on this constructor funciton
