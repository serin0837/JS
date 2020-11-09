https://www.youtube.com/watch?v=syhNj7X0Vvk

# this

1. “this” Refers to a Global Object

```js
function foo() {
  console.log("Simple function call");
  console.log(this === window);
}

foo(); //prints true on console
console.log(this === window); //Prints true on console.
```

```js
function foo() {
  "use strict";
  console.log("Simple function call");
  console.log(this === window);
}

foo(); //prints false on console as in “strict mode” value of “this” in global execution context is undefined
```

2. “this” Refers to a New Instance

- When a function is invoked with the new keyword, then the function is known as a constructor function and returns a new instance. In such cases, the value of this refers to a newly created instance.

```js
function Person(fn, ln) {
  this.first_name = fn;
  this.last_name = ln;

  this.displayName = function () {
    console.log(`Name: ${this.first_name} ${this.last_name}`);
  };
}

let person = new Person("John", "Reed");
person.displayName(); // Prints Name: John Reed
let person2 = new Person("Paul", "Adams");
person2.displayName(); // Prints Name: Paul Adams
```

3. “this” Refers to an Invoker Object (Parent Object)

- In JavaScript, the property of an object can be a method or a simple value. When an object’s method is invoked, then this refers to the object which contains the method being invoked.

```js
function foo() {
  "use strict";
  console.log("Simple function call");
  console.log(this === window);
}

let user = {
  count: 10,
  foo: foo,
  foo1: function () {
    console.log(this === window);
  },
};

user.foo(); // Prints false because now “this” refers to user object instead of global object.
let fun1 = user.foo1;
fun1(); // Prints true as this method is invoked as a simple function.
user.foo1(); // Prints false on console as foo1 is invoked as a object’s method
```

함수가 옵젝트 안에서 불려지면 옵젝트가 this이고 함수가 글로벌 컨텍스트에서 불려지면 옵젝트가 윈도우(chrome에서)

4. “this” With the Call and Apply Methods

- These methods can be used to set a custom value to this in the execution context of the function.
- We’re going to use the second example defined above to explain the use of call:

```js
function Person(fn, ln) {
  this.first_name = fn;
  this.last_name = ln;

  this.displayName = function () {
    console.log(`Name: ${this.first_name} ${this.last_name}`);
  };
}

let person = new Person("John", "Reed");
person.displayName(); // Prints Name: John Reed
let person2 = new Person("Paul", "Adams");
person2.displayName(); // Prints Name: Paul Adams

person.displayName.call(person2); // Here we are setting value of this to be person2 object
//Prints Name: Paul Adams
```

- The only difference between the call and apply methods is the way an argument is passed. In the case of apply, the second argument is an array of arguments, whereas in the case of the call method, the arguments are passed individually.
  차이
  ex)

```js
const book = {
  title: "Brave New World",
  author: "Aldous Huxley",
};

function longerSummary(genre, year) {
  console.log(
    `${this.title} was written by ${this.author}. It is a ${genre} novel written in ${year}.`
  );
}

longerSummary.call(book, "dystopian", 1932);

longerSummary.apply(book, ["dystopian", 1932]);
```

5. “this” With the Bind Method

- The bind method returns a new method with this referring to the first argument passed. We’re going to use the above example to explain the bind method.
  새로운 함수를 생성한다.

```js
function Person(fn, ln) {
  this.first_name = fn;
  this.last_name = ln;

  this.displayName = function () {
    console.log(`Name: ${this.first_name} ${this.last_name}`);
  };
}

let person = new Person("John", "Reed");
person.displayName(); // Prints Name: John Reed
let person2 = new Person("Paul", "Adams");
person2.displayName(); // Prints Name: Paul Adams

let person2Display = person.displayName.bind(person2); // Creates new function with value of “this” equals to person2 object
person2Display(); // Prints Name: Paul Adams
```

6. “this” With the Fat-Arrow Function

- When a fat arrow is used, it doesn’t create a new value for this. this keeps on referring to the same object it’s referring to outside of the function.

and more example

```js
function multiply(p, q, callback) {
  callback(p * q);
}

let user = {
  a: 2,
  b: 3,
  findMultiply: function () {
    multiply(this.a, this.b, function (total) {
      console.log(total);
      console.log(this === window);
    });
  },
};

user.findMultiply();
//Prints 6
//Prints true
```

- Since the callback is invoked as a simple function call inside a multiple function, this refers to the global object windows inside the execution context of the callback method.

```js
var count = 5;
function test() {
  console.log(this.count === 5);
}

test(); // Prints true as “count” variable declaration happened in global execution context so count will become part of global object.
```

more about this and arrow func

```js
var bunny = {
  name: "Usagi",
  tasks: ["transform", "eat cake", "blow kisses"],
  showTasks: function () {
    this.tasks.forEach(function (task) {
      alert(this.name + " wants to " + task);
    });
  },
};

bunny.showTasks();
// [object Window] wants to transform
// [object Window] wants to eat cake
// [object Window] wants to blow kisses
```

- Why does ‘this’ bind to the window object? Because ‘this’, always references the owner of the function it is in, for this case — since it is now out of scope — the window/global object.

- When it is inside of an object’s method — the function’s owner is the object. Thus the ‘this’ keyword is bound to the object. Yet when it is inside of a function, either stand alone or within another method, it will always refer to the window/global object.

- it’s important to be aware of two clever ways programmers solve the ‘this’ problem within ES5 code, especially since you will continue to run into ES5 for awhile (not every browser has fully migrated to ES6 yet):

  1.

```js
var bunny = {
  name: "Usagi",
  tasks: ["transform", "eat cake", "blow kisses"],
  showTasks: function () {
    var _this = this;
    this.tasks.forEach(function (task) {
      alert(_this.name + " wants to " + task);
    });
  },
};

bunny.showTasks();
// Usagi wants to transform
// Usagi wants to eat cake
// Usagi wants to blow kisses
```

2.

```js
var bunny = {
  name: "Usagi",
  tasks: ["transform", "eat cake", "blow kisses"],
  showTasks: function () {
    this.tasks.forEach(
      function (task) {
        alert(this.name + " wants to " + task);
      }.bind(this)
    );
  },
};

bunny.showTasks();
// Usagi wants to transform
// Usagi wants to eat cake
// Usagi wants to blow kisses
```

```js
var bunny = {
  name: "Usagi",
  tasks: ["transform", "eat cake", "blow kisses"],
  showTasks() {
    this.tasks.forEach((task) => {
      alert(this.name + " wants to " + task);
    });
  },
};

bunny.showTasks();
// Usagi wants to transform
// Usagi wants to eat cake
// Usagi wants to blow kisses
```

- While in ES5 ‘this’ referred to the parent of the function, in ES6, arrow functions use lexical scoping — ‘this’ refers to it’s current surrounding scope and no further.
