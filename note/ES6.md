1. general

- the term ECMAScript is interchangeable with the term JavaScript.
- ECMAScript 6 (ES6), released in 2015.
- Arrow functions
  Classes
  Modules
  Promises
  Generators
  let and const

2. Explore Differences Between the var and let Keywords

- One of the biggest problems with declaring variables with the var keyword is that you can overwrite variable declarations without an error.
-

```js
var camper = "James";
var camper = "David";
console.log(camper);
// logs 'David'
```

- you might accidentally overwrite a variable that you did not intend to overwrite. Because this behavior does not throw an error, searching and fixing bugs becomes more difficult.
- A new keyword called let was introduced in ES6 to solve this potential issue with the var keyword. If you were to replace var with let in the variable declarations of the code above, the result would be an error.

```js
let camper = "James";
let camper = "David"; // throws an error
```

- So unlike var, when using let, a variable with the same name can only be declared once.
- Note the "use strict". This enables Strict Mode, which catches common coding mistakes and "unsafe" actions. For instance:

3.  Compare Scopes of the var and let Keywords

- When you declare a variable with the var keyword, it is declared globally, **_or locally if declared inside a function._**
- The let keyword behaves similarly, but with some extra features.
- When you declare a variable with the let keyword inside **_a block, statement, or expression, its scope is limited to that block, statement, or expression._**

```js
var printNumTwo;
for (var i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function () {
      return i;
    };
  }
}
console.log(printNumTwo());
// returns 3
```

- This is because the value assigned to i was updated and the printNumTwo() returns the global i and not the value i had when the function was created in the for loop. ?????글쎄다...흠..
- The let keyword does not follow this behavior:

```js
"use strict";
let printNumTwo;
for (let i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function () {
      return i;
    };
  }
}
console.log(printNumTwo());
// returns 2
console.log(i);
// returns "i is not defined"
```

- i is not defined because it was not declared in the global scope. It is only declared within the for loop statement.
- printNumTwo() returned the correct value because three different i variables with unique values (0, 1, and 2) were created by the let keyword within the loop statement.

```js
function checkScope() {
  "use strict";
  let i = "function scope";
  if (true) {
    let i = "block scope";
    console.log("Block scope i is: ", i);
  }
  console.log("Function scope i is: ", i);
  return i;
}

checkScope(); //Block scope i is:  block scope
//Function scope i is:  function scope
```

4. Declare a Read-Only Variable with the const Keyword

- const has all the awesome features that let has, with the added bonus that variables declared using const are read-only. They are a constant value, which means that once a variable is assigned with const, it cannot be reassigned.
- **_A common practice when naming constants is to use all uppercase letters, with words separated by an underscore._**
- It is common for developers to use uppercase variable identifiers for immutable values and lowercase or camelCase for mutable values (objects and arrays). In a later challenge you will see an example of a lowercase variable identifier being used for an array.

5. Mutate an Array Declared with const

- However, it is important to understand that objects (including arrays and functions) assigned to a variable using const are still mutable. Using the const declaration only prevents reassignment of the variable identifier.

```js
"use strict";
const s = [5, 6, 7];
s = [1, 2, 3]; // throws error, trying to assign a const
s[2] = 45; // works just as it would with an array declared with var or let
console.log(s); // returns [5, 6, 45]
```

6. Prevent Object Mutation

- const declaration alone doesn't really protect your data from mutation. To ensure your data doesn't change, JavaScript provides a function `Object.freeze` to prevent data mutation.
- Once the object is frozen, you can no longer add, update, or delete properties from it. Any attempt at changing the object will be rejected without an error.

```js
let obj = {
  name: "FreeCodeCamp",
  review: "Awesome",
};
Object.freeze(obj);
obj.review = "bad"; // will be ignored. Mutation not allowed
obj.newProp = "Test"; // will be ignored. Mutation not allowed
console.log(obj);
// { name: "FreeCodeCamp", review:"Awesome"}
```

7. Use Arrow Functions to Write Concise Anonymous Functions

- In JavaScript, we often don't need to name our functions, especially when passing a function as an argument to another function.
- Instead, we create inline functions. We don't need to name these functions because we do not reuse them anywhere else.

```js
const myFunc = function () {
  const myVar = "value";
  return myVar;
};

// ES6 provides us with the syntactic sugar to not have to write anonymous functions this way. Instead, you can use arrow function syntax:

const myFunc = () => {
  const myVar = "value";
  return myVar;
};

//When there is no function body, and only a return value, arrow function syntax allows you to omit the keyword return as well as the brackets surrounding the code.
//This helps simplify smaller functions into one-line statements:
const myFunc = () => "value";
```

8. Write Arrow Functions with Parameters

```js
//, you can pass arguments into an arrow function.
const doubler = (item) => item * 2;
//If an arrow function has a single argument, the parentheses enclosing the argument may be omitted.
const doubler = (item) => item * 2;
//It is possible to pass more than one argument into an arrow function.
const multiplier = (item, multi) => item * multi;
```

9. **_Set Default Parameters for Your Functions_**

- ES6 introduces default parameters for functions.

```js
const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John")); // Hello John
console.log(greeting()); // Hello Anonymous
```

- The default parameter kicks in when the argument is not specified (it is undefined). As you can see in the example above, the parameter name will receive its default value "Anonymous" when you do not provide a value for the parameter. You can add default values for as many parameters as you want.

```js
const increment = (number, value = 1) => number + value;
console.log(increment(1)); //2
```

10. Use the Rest Parameter with Function Parameters (다시 !)

- In order to help us create more flexible functions, ES6 introduces the rest parameter for function parameters.
- **_With the rest parameter, you can create functions that take a variable number of arguments. These arguments are stored in an array that can be accessed later from inside the function._**(array로 저장되어서 array method 가 사용이 가능하다)

```js
function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2)); // You have passed 3 arguments.
console.log(howMany("string", null, [1, 2, 3], {})); // You have passed 4 arguments.
```

- The rest parameter eliminates the need to check the args array and allows us to apply map(), filter() and reduce() on the parameters array.
- 파라미터가 variable이고 알규먼트는 실제 value 이다
  (reduce공부 하기 )
  _reduce/ for of_
  The for...of statement creates a loop iterating over iterable objects, including: built-in String, Array, array-like objects (e.g., arguments or NodeList), TypedArray, Map, Set, and user-defined iterables. It invokes a custom iteration hook with statements to be executed for the value of each distinct property of the object.

for (variable of iterable) {
statement
}
variable
On each iteration a value of a different property is assigned to variable. variable may be declared with const, let, or var.
iterable
Object whose iterable properties are iterated.

reduce:https://www.youtube.com/watch?v=g1C40tDP0Bk

11. Use the Spread Operator to Evaluate Arrays In-Place

- which allows us to expand arrays and other expressions in places where multiple parameters or elements are expected.

```js
var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr); // returns 89
```

- We had to use Math.max.apply(null, arr) because Math.max(arr) returns NaN. Math.max() expects comma-separated arguments, but not an array.
- The spread operator makes this syntax much better to read and maintain.

```js
const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr);
```

- ...arr returns an unpacked array. In other words, it spreads the array.

- However, the spread operator only works in-place, like in an argument to a function or in an array literal. The following code will not work:

```js
const spreaded = ...arr; // will throw a syntax error
```

apply()가 헷갈리네 또..

12. Use Destructuring Assignment to Extract Values from Objects

```js
///Consider the following ES5 code:
const user = { name: "John Doe", age: 34 };

const name = user.name; // name = 'John Doe'
const age = user.age; // age = 34

///Here's an equivalent assignment statement using the ES6 destructuring syntax:
const { name, age } = user;
// name = 'John Doe', age = 34
```

- Here, the name and age variables will be created and assigned the values of their respective values from the user object. You can see how much cleaner this is.
- You can extract as many or few values from the object as you want.

13. **_Use Destructuring Assignment to Assign Variables from Objects_**

- Destructuring allows you to assign a new variable name when extracting values.

- You can do this by putting the new name after a colon when assigning the value.
- Using the same object from the last example:

```js
const user = { name: "John Doe", age: 34 };
// Here's how you can give new variable names in the assignment:

const { name: userName, age: userAge } = user;
// userName = 'John Doe', userAge = 34
```

- You may read it as "get the value of user.name and assign it to a new variable named userName" and so on.

14. Use Destructuring Assignment to Assign Variables from Nested Objects

- You can use the same principles from the previous two lessons to destructure values from nested objects.

```js
const user = {
  johnDoe: {
    age: 34,
    email: "johnDoe@freeCodeCamp.com",
  },
};
//Here's how to extract the values of object properties and assign them to variables with the same name:
const {
  johnDoe: { age, email },
} = user;

//And here's how you can assign an object properties' values to variables with different names:
const {
  johnDoe: { age: userAge, email: userEmail },
} = user;
```

15. Use Destructuring Assignment to Assign Variables from Arrays

- One key difference between the spread operator and array destructuring is that the spread operator unpacks all contents of an array into a comma-separated list. Consequently, you cannot pick or choose which elements you want to assign to variables.

- Destructuring an array lets us do exactly that:

```js
const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b); // 1, 2
```

- The variable a is assigned the first value of the array, and b is assigned the second value of the array. We can also access the value at any index in an array with destructuring by using commas to reach the desired index:

```js
const [a, b, , , c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c); // 1, 2, 5
```

16. Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements

- In some situations involving array destructuring, we might want to collect the rest of the elements into a separate array.
- The result is similar to Array.prototype.slice()

```js
const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b); // 1, 2
console.log(arr); // [3, 4, 5, 7]
```

- The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

17. **_Use Destructuring Assignment to Pass an Object as a Function's Parameters_**

- In some cases, you can destructure the object in a function argument itself.

```js
const profileUpdate = (profileData) => {
  const { name, age, nationality, location } = profileData;
  // do something with these variables
};
```

This effectively destructures the object sent into the function. This can also be done in-place:

```js
const profileUpdate = ({ name, age, nationality, location }) => {
  /* do something with these fields */
};
```

- When profileData is passed to the above function, the values are destructured from the function parameter for use within the function.
  근데 내가 이 옵젝트를 가지고 왔는지 이름도 없는데 어떻게 알지?!

18. Create Strings using Template Literals

- A new feature of ES6 is the template literal. This is a special type of string that makes creating complex strings easier.
- Template literals allow you to create multi-line strings and to use string interpolation features to create strings.
