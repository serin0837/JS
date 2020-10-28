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
- With the rest parameter, you can create functions that take a variable number of arguments. These arguments are stored in an array that can be accessed later from inside the function.

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
