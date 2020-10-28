# Freecodecamp

## Js basic

12.10.20

1. intro
2. comment
3. Declare
4. Storing
5. Assigning
6. Initializing
7. Understanding uninitialized variables
   - When JavaScript variables are declared, they have an initial value of undefined. If you do a mathematical operation on an undefined variable your result will be NaN which means "Not a Number". If you concatenate a string with an undefined variable, you will get a literal string of "undefined".
8. Case sensitive variables
   - Camel case
9. add two number
10. substract two number

13.10.20

11. Increment
12. decrement
13. Decimal num
14. Multiply Two Decimals with JavaScript
15. devide decimals
16. Finding a Remainder in JavaScript

- Usage
  In mathematics, a number can be checked to be even or odd by checking the remainder of the division of the number by 2.

17 % 2 = 1 (17 is Odd)
48 % 2 = 0 (48 is Even)

17. Compound Assignment With Augmented Addition

- += operator

```js
var myVar = 1;
myVar += 5; //myVar = myVar+5
console.log(myVar); // Returns 6
```

18. Compound Assignment With Augmented Subtraction

- -= operator

19. Compound Assignment With Augmented Multiplication

- \*= operator

20. Compound Assignment With Augmented Division

- /= operator

  14.10.20

21. Declare String Variables

- var myName = "your name";

"your name" is called a string literal. It is a string because it is a series of zero or more characters enclosed in single or double quotes.

22. Escaping Literal Quotes in StringsPassed
    var sampleStr = "Alan said, \"Peter is learning JavaScript\".";
23. Quoting Strings with Single Quotes
    goodStr = 'Jake asks Finn, "Hey, let\'s go on an adventure?"';
    badStr = 'Finn responds, "Let's go!"'; // Throws an error
24. Escape Sequences in StringsPassed
    Quotes are not the only characters that can be escaped inside a string. There are two reasons to use escaping characters:

To allow you to use characters you may not otherwise be able to type out, such as a carriage return.
To allow you to represent multiple quotes in a string without JavaScript misinterpreting what you mean.
We learned this in the previous challenge.
Code Output
\' single quote
\" double quote
\\ backslash
\n newline
\r carriage return
\t tab
\b word boundary
\f form feed

Note that the backslash itself must be escaped in order to display as a backslash.

25. Concatenating Strings with Plus Operator
    var ourStr = "I come first. " + "I come second.";
26. Concatenating Strings with the Plus Equals OperatorPassed

```js
var ourStr = "I come first. ";
ourStr += "I come second.";
// ourStr is now "I come first. I come second."
```

**\_ I can not do it with - it will say NAN**

27. Constructing Strings with VariablesPassed

```js
var ourName = "freeCodeCamp";
var ourStr = "Hello, our name is " + ourName + ", how are you?";
// ourStr is now "Hello, our name is freeCodeCamp, how are you?"
```

28. Appending Variables to Strings

```js
var anAdjective = "awesome!";
var ourStr = "freeCodeCamp is ";
ourStr += anAdjective;
// ourStr is now "freeCodeCamp is awesome!"
```

29. Find the Length of a StringPassed

```js
"Alan Peter".length; // 10
```

For example, if we created a variable var firstName = "Charles", we could find out how long the string "Charles" is by using the firstName.length property.

30. Use Bracket Notation to Find the First Character in a String

- Bracket notation is a way to get a character at a specific index within a string.

```js
var firstName = "Charles";
var firstLetter = firstName[0]; // firstLetter is "C"
```

20.10.15 31. Understand String ImmutabilityPassed
not with bracket notation, with reassign

32. Use Bracket Notation to Find the Nth Character in a String

```js
var firstName = "Ada";
var secondLetterOfFirstName = firstName[1];
```

33. **Use Bracket Notation to Find the Last Character in a StringPassed**

- For example, if var firstName = "Charles", you can get the value of the last letter of the string by using firstName[firstName.length - 1].

34. Use Bracket Notation to Find the Nth-to-Last Character in a StringPassed

- For example, you can get the value of the third-to-last letter of the var firstName = "Charles" string by using firstName[firstName.length - 3]

35. Word BlanksPassed

- In a "Mad Libs" game, you are provided sentences with some missing words, like nouns, verbs, adjectives and adverbs. You then fill in the missing pieces with words of your choice in a way that the completed sentence makes sense.

Consider this sentence - "It was really \_**\_, and we \_\_** ourselves \_\_\_\_". This sentence has three missing pieces- an adjective, a verb and an adverb, and we can add words of our choice to complete it. We can then assign the completed sentence to a variable as follows:

- just about concatenating

36. Store Multiple Values in one Variable using JavaScript Arrays

37. Nest one Array within Another ArrayPassed

```js
[
  ["Bulls", 23],
  ["White Sox", 45],
];
```

38. Access Array Data with IndexesPassed

```js
var array = [50, 60, 70];
array[0]; // equals 50
var data = array[1];
```

39. Modify Array Data With Indexes

```js
var ourArray = [50, 40, 30];
ourArray[0] = 15; // equals [15,40,30]
```

40. Access Multi-Dimensional Arrays With Indexes

- One way to think of a multi-dimensional array, is as an array of arrays.
- the first set of brackets refers to the entries in the outer-most (the first level) array, and each additional pair of brackets refers to the next level of entries inside.

41. Manipulate Arrays With push()

- An easy way to append data to the end of an array is via the push() function.
- .push() takes **one or more parameters** and "pushes" them onto the end of the array.

```js
var arr1 = [1, 2, 3];
arr1.push(4);
// arr1 is now [1,2,3,4]

var arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]);
// arr2 now equals ["Stimpson", "J", "cat", ["happy", "joy"]]
```

42. Manipulate Arrays With pop()

- Another way to change the data in an array is with the .pop() function.
- .pop() is used to "pop" a value off of the end of an array.
- **We can store this "popped off" value by assigning it to a variable. In other words, .pop() removes the last element from an array and returns that element.**

```js
var threeArr = [1, 4, 6];
var oneDown = threeArr.pop();
console.log(oneDown); // Returns 6
console.log(threeArr); // Returns [1, 4]
```

43. Manipulate Arrays With shift()

- pop() always removes the last element of an array. What if you want to remove the first?
- That's where .shift() comes in. It works just like .pop(), except **it removes the first element instead of the last.**

```js
var ourArray = ["Stimpson", "J", ["cat"]];
var removedFromOurArray = ourArray.shift();
// removedFromOurArray now equals "Stimpson" and ourArray now equals ["J", ["cat"]].
```

44. Manipulate Arrays With unshift()Passed

- you can also unshift elements to the beginning of an array i.e. add elements in front of the array.
- .unshift() works exactly like .push(), but instead of adding the element at the end of the array, unshift() adds the element at the beginning of the array.

```js
var ourArray = ["Stimpson", "J", "cat"];
ourArray.shift(); // ourArray now equals ["J", "cat"]
ourArray.unshift("Happy");
// ourArray now equals ["Happy", "J", "cat"]
```

pop이랑 shift는 없애고 없앤것을 따로 저장도 함.
push랑 unshift는 앞뒤로 엘리멘트를 더한다.

45. Shopping List

- just make subarrays

46. Write Reusable JavaScript with FunctionsPassed

- function functionName() {
  console.log("Hello World");
  }
- **You can call or invoke this function by using its name followed by parentheses, like this: functionName();**
- All of the code between the curly braces will be executed every time the function is called.

47. Passing Values to Functions with Arguments

- Parameters are variables that act as placeholders for the values that are to be input to a function when it is called.
- The actual values that are input (or "passed") into a function when it is called are known as arguments.

```js
function testFun(param1, param2) {
  console.log(param1, param2);
}
```

- Then we can call testFun: testFun("Hello", "World"); We have passed two arguments, "Hello" and "World"

48. Global Scope and Functions

- In JavaScript, scope refers to the visibility of variables.
- Variables which are defined outside of a function block have Global scope. This means, they can be seen everywhere in your JavaScript code.
- Variables which are used without the var keyword are automatically created in the global scope. This can create unintended consequences elsewhere in your code or when running a function again. You should always declare your variables with var.

49. Local Scope and Functions
    Variables which are declared within a function, as well as the function parameters have local scope. That means, they are only visible within that function.

```js
function myTest() {
  var loc = "foo";
  console.log(loc);
}
myTest(); // logs "foo"
console.log(loc);
```

50. Global vs. Local Scope in Functions

- It is possible to have both local and global variables with the same name. When you do this, the local variable takes precedence over the global variable.

```js
var someVar = "Hat";
function myFun() {
  var someVar = "Head";
  return someVar;
}
```

51. Return a Value from a Function with Return

- We can pass values into a function with arguments. You can use a return statement to send a value back out of a function.

```js
function plusThree(num) {
  return num + 3;
}
var answer = plusThree(5); // 8
```

( 왜 그래서 어쩌라는 겨?) 52. Understanding Undefined Value returned from a FunctionPassed

- A function can include the return statement but it does not have to.
- In the case that the function doesn't have a return statement, when you call it, the function processes the inner code but the returned value is undefined.

```js
var sum = 0;
function addSum(num) {
  sum = sum + num;
}
addSum(3); // sum will be modified but returned value is undefined*****
```

53. Assignment with a Returned Value\*\*\*

- everything to the right of the equal sign is resolved before the value is assigned.
- This means we can take the return value of a function and assign it to a variable.
- Assume we have pre-defined a function sum which adds two numbers together, then:

ourSum = sum(5, 12);

will call sum function, which returns a value of 17 and assigns it to ourSum variable.

54. Stand in Line(그냥 로직 짜는거 with pop, and shift)

- In Computer Science a queue is an abstract Data Structure where items are kept in order.
- New items can be added at the back of the queue and old items are taken off from the front of the queue.

55. Understanding Boolean Values

- Another data type is the Boolean. Booleans may only be one of two values: true or false. They are basically little on-off switches, where true is "on" and false is "off." These two states are mutually exclusive.

- **_Boolean values are never written with quotes. The strings "true" and "false" are not Boolean and have no special meaning in JavaScript._**

56. **_Use Conditional Logic with If Statements_**

- If statements are used to make decisions in code.
- The keyword if tells JavaScript to execute the code in the curly braces under certain conditions, defined in the parentheses.
- These conditions are known as Boolean conditions and they may only be true or false.
- When the condition evaluates to true, the program executes the statement inside the curly braces. When the Boolean condition evaluates to false, the statement inside the curly braces will not execute.
-

```js
if (condition is true) {
  statement is executed
}

function test (myCondition) {
  if (myCondition) {
     return "It was true";
  }
  return "It was false";
}
test(true);  // returns "It was true"
test(false); // returns "It was false"
```

- When test is called with a value of true, the if statement evaluates myCondition to see if it is true or not. Since it is true, the function returns "It was true". When we call test with a value of false, myCondition is not true and the statement in the curly braces is not executed and the function returns "It was false".

57. Comparison with the Equality Operator

- There are many comparison operators in JavaScript. **_All of these operators return a boolean true or false value._**
- The most basic operator is the equality operator ==
- The equality operator compares two values and returns true if they're equivalent or false if they are not.
-

```js
function equalityTest(myVal) {
  if (myVal == 10) {
    return "Equal";
  }
  return "Not Equal";
}
```

- If myVal is equal to 10, the equality operator returns true, so the code in the curly braces will execute, and the function will return "Equal". Otherwise, the function will return "Not Equal"

- **_In order for JavaScript to compare two different data types (for example, numbers and strings), it must convert one type to another. This is known as "Type Coercion". Once it does, however, it can compare terms as follows_**

```js
1 == 1; // true
1 == 2; // false
1 == "1"; // true
"3" == 3; // true
```

58. Comparison with the Strict Equality Operator

- Strict equality (===) is the counterpart to the equality operator (==).
- However, unlike the equality operator, which attempts to convert both values being compared to a common type, the strict equality operator does not perform a type conversion.
- If the values being compared have different types, they are considered unequal, and the strict equality operator will return false.
-

```js
3 === 3; // true
3 === "3"; // false
```

59. Practice comparing different valuesPassed

- In JavaScript, you can determine the type of a variable or a value with the typeof operator
-

```js
typeof 3; // returns 'number'
typeof "3"; // returns 'string'
```

60. Comparison with the Inequality Operator

- The inequality operator (!=) is the opposite of the equality operator.
- It means "Not Equal" and returns false where equality would return true and vice versa.
- Like the equality operator, the inequality operator will convert data types of values while comparing.

```js
1 != 2; // true
1 != "1"; // false
1 != "1"; // false
1 != true; // false
0 != false; // false
```

61. Comparison with the Strict Inequality OperatorPassed

- The strict inequality operator (!==) is the logical opposite of the strict equality operator. It means "Strictly Not Equal" and returns false where strict equality would return true and vice versa.

```js
3 !== 3; // false
3 !== "3"; // true
4 !== 3; // true
```

62. Comparison with the Greater Than Operator

- The greater than operator (>) compares the values of two numbers
- If the number to the left is greater than the number to the right, it returns true. Otherwise, it returns false.
- **_Like the equality operator, greater than operator will convert data types of values while comparing._**

```js
5 > 3; // true
7 > "3"; // true
2 > 3; // false
"1" > 9; // false
```

63. Comparison with the Greater Than Or Equal To Operator

- The greater than or equal to operator (>=) compares the values of two numbers. If the number to the left is greater than or equal to the number to the right, it returns true. Otherwise, it returns false.
- **Like the equality operator, greater than or equal to operator will convert data types while comparing.**

```js
6 >= 6; // true
7 >= "3"; // true
2 >= 3; // false
"7" >= 9; // false
```

64. Comparison with the Less Than OperatorPassed

- The less than operator (<) compares the values of two numbers. If the number to the left is less than the number to the right, it returns true. Otherwise, it returns false. Like the equality operator, less than operator converts data types while comparing.

```js
2 < 5; // true
"3" < 7; // true
5 < 5; // false
3 < 2; // false
"8" < 4; // false
```

65. Comparison with the Less Than Or Equal To Operator

- The less than or equal to operator (<=) compares the values of two numbers. If the number to the left is less than or equal to the number to the right, it returns true. If the number on the left is greater than the number on the right, it returns false. Like the equality operator, less than or equal to converts data types.

```js
4 <= 5; // true
"7" <= 7; // true
5 <= 5; // true
3 <= 2; // false
"8" <= 4; // false
```

66. Comparisons with the Logical And Operator

- The logical and operator (&&) returns true if and only if the operands to the left and right of it are true.
- The same effect could be achieved by nesting an if statement inside another if:

```js
if (num > 5) {
  if (num < 10) {
    return "Yes";
  }
}
return "No";
```

will only return "Yes" if num is greater than 5 and less than 10

- same with &&

```js
if (num > 5 && num < 10) {
  return "Yes";
}
return "No";
```

67. **_Comparisons with the Logical Or Operator_**(여전히 조금 헷갈)

- The logical or operator (||) returns true if either of the operands is true. Otherwise, it returns false.
- The pattern below should look familiar from prior waypoints:

```js
if (num > 10) {
  return "No";
}
if (num < 5) {
  return "No";
}
return "Yes";
```

will return "Yes" only if num is between 5 and 10 (5 and 10 included). The same logic can be written as:

```js
if (num > 10 || num < 5) {
  return "No";
}
return "Yes";
```

- 하기와 같은 방법으로도 사용이 가능하다

```js
function A() {
  console.log("called A");
  return false;
}
function B() {
  console.log("called B");
  return true;
}

console.log(B() || A());
```

68. Introducing Else Statements

- When a condition for an if statement is true, the block of code following it is executed. What about when that condition is false? Normally nothing would happen. With an else statement, an alternate block of code can be executed.

```js
if (num > 10) {
  return "Bigger than 10";
} else {
  return "10 or Less";
}
```

69. Introducing Else If Statements

- If you have multiple conditions that need to be addressed, you can chain if statements together with else if statements.

```js
if (num > 15) {
  return "Bigger than 15";
} else if (num < 5) {
  return "Smaller than 5";
} else {
  return "Between 5 and 15";
}
```

70. Logical Order in If Else Statements

- Order is important in if, else if statements.
- The function is executed from top to bottom so you will want to be careful of what statement comes first.
- Here's the first:

function foo(x) {
if (x < 1) {
return "Less than one";
} else if (x < 2) {
return "Less than two";
} else {
return "Greater than or equal to two";
}
}
And the second just switches the order of the statements:

function bar(x) {
if (x < 2) {
return "Less than two";
} else if (x < 1) {
return "Less than one";
} else {
return "Greater than or equal to two";
}
}
While these two functions look nearly identical if we pass a number to both we get different outputs.

foo(0) // "Less than one"
bar(0) // "Less than two"

71. Chaining If Else Statements

- if/else statements can be chained together for complex logic.
- Here is pseudocode of multiple chained if / else if statements:

```js
if (condition1) {
  statement1
} else if (condition2) {
  statement2
} else if (condition3) {
  statement3
. . .
} else {
  statementN
}
```

72. Golf Code
73. Selecting from Many Options with Switch Statements

- If you have many options to choose from, use a switch statement. A switch statement tests a value and can have many case statements which define various possible values. Statements are executed from the first matched case value until a break is encountered.

```js
switch (lowercaseLetter) {
  case "a":
    console.log("A");
    break;
  case "b":
    console.log("B");
    break;
}
```

- case values are tested with strict equality (===). The break tells JavaScript to stop executing statements. If the break is omitted, the next statement will be executed.

74. Adding a Default Option in Switch Statements

- In a switch statement you may not be able to specify all possible values as case statements. Instead, you can add the default statement which will be executed if no matching case statements are found. Think of it like the final else statement in an if/else chain.

```js
switch (num) {
  case value1:
    statement1;
    break;
  case value2:
    statement2;
    break;
...
  default:
    defaultStatement;
    break;
}
```

75. Multiple Identical Options in Switch Statements

- If the break statement is omitted from a switch statement's case, the following case statement(s) are executed until a break is encountered. If you have multiple inputs with the same output, you can represent them in a switch statement like this:

  ```js
  switch (val) {
    case 1:
    case 2:
    case 3:
      result = "1, 2, or 3";
      break;
    case 4:
      result = "4 alone";
  }
  ```

76. Replacing If Else Chains with Switch

- If you have many options to choose from, a switch statement can be easier to write than many chained if/else if statements. The following:

```js
if (val === 1) {
  answer = "a";
} else if (val === 2) {
  answer = "b";
} else {
  answer = "c";
}

switch (val) {
  case 1:
    answer = "a";
    break;
  case 2:
    answer = "b";
    break;
  default:
    answer = "c";
}
```

77. Returning Boolean Values from Functions

Sometimes people use an if/else statement to do a comparison, like this:

```js
function isEqual(a, b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}

//But there's a better way to do this. Since === returns true or false, we can return the result of the comparison:
function isEqual(a, b) {
  return a === b;
}
```

78. Return Early Pattern for Functions

- When a return statement is reached, the execution of the current function stops and control returns to the calling location.

```js
function myFun() {
  console.log("Hello");
  return "World";
  console.log("byebye");
}
myFun();
```

- The above outputs "Hello" to the console, returns "World", but "byebye" is never output, because the function exits at the return statement.

79. Counting Cards
    pass!!

80. Build JavaScript Objects (23.10.20)

- Objects are similar to arrays, except that instead of using indexes to access and modify their data, you access the data in objects through what are called properties.

- Objects are useful for storing data in a structured way, and can represent real world objects, like a cat.

```js
var cat = {
  name: "Whiskers",
  legs: 4,
  tails: 1,
  enemies: ["Water", "Dogs"],
};
```

- all the properties are stored as strings, such as - "name", "legs", and "tails". However, you can also use numbers as properties.
- **_However, if your object has any non-string properties, JavaScript will automatically typecast them as strings._**
- 프로퍼티는 왼쪽에 있는거

81. Accessing Object Properties with Dot Notation

- There are two ways to access the properties of an object: dot notation (.) and bracket notation ([]), similar to an array.
- **_Dot notation is what you use when you know the name of the property you're trying to access ahead of time._**
- Here is a sample of using dot notation (.) to read an object's property:

```js
var myObj = {
  prop1: "val1",
  prop2: "val2",
};
var prop1val = myObj.prop1; // val1
var prop2val = myObj.prop2; // val2
```

82. Accessing Object Properties with Bracket Notation

- If the property of the object you are trying to access has a space in its name, you will need to use bracket notation.
- However, you can still use bracket notation on object properties without spaces.

```js
var myObj = {
  "Space Name": "Kirk",
  "More Space": "Spock",
  NoSpace: "USS Enterprise",
};
myObj["Space Name"]; // Kirk
myObj["More Space"]; // Spock
myObj["NoSpace"]; // USS Enterprise
```

- Note that property names with spaces in them must be in quotes (single or double).

83. **_Accessing Object Properties with Variables_**

- Another use of bracket notation on objects is to access a property which is stored as the value of a variable.
- This can be very useful for iterating through an object's properties or when accessing a lookup table.
- **_Here is an example of using a variable to access a property_**
  (not use property name directly)

```js
var dogs = {
  Fido: "Mutt",
  Hunter: "Doberman",
  Snoopie: "Beagle",
};
var myDog = "Hunter";
var myBreed = dogs[myDog];
console.log(myBreed); // "Doberman"
```

- Another way you can use this concept is when the property's name is collected dynamically during the program execution, as follows:

```js
var someObj = {
  propName: "John",
};
function propPrefix(str) {
  var s = "prop";
  return s + str;
}
var someProp = propPrefix("Name"); // someProp now holds the value 'propName'
console.log(someObj[someProp]); // "John"
```

- Note that we do not use quotes around the variable name when using it to access the property because we are using the value of the variable, not the name.

84. Updating Object Properties

- After you've created a JavaScript object, you can update its properties at any time just like you would update any other variable.
- You can use either dot or bracket notation to update.

```js
var ourDog = {
  name: "Camper",
  legs: 4,
  tails: 1,
  friends: ["everything!"],
};
```

- Here's how we update his object's name property: ourDog.name = "Happy Camper"; or ourDog["name"] = "Happy Camper";

85. Add New Properties to a JavaScript Object

- You can add new properties to existing JavaScript objects the same way you would modify them.
- Here's how we would add a "bark" property to ourDog:

ourDog.bark = "bow-wow";

or

ourDog["bark"] = "bow-wow";

```js
var ourDog = {
  name: "Camper",
  legs: 4,
  tails: 1,
  friends: ["everything!"],
};

ourDog.bark = "bow-wow";
```

86. **_Delete Properties from a JavaScript Object_**

- We can also delete properties from objects like this:

`delete ourDog.bark;`

```js
var ourDog = {
  name: "Camper",
  legs: 4,
  tails: 1,
  friends: ["everything!"],
  bark: "bow-wow",
};

delete ourDog.bark;
```

87. Using Objects for Lookups

- Objects can be thought of as a key/value storage, like a dictionary. If you have tabular data, you can use an object to "lookup" values rather than a switch statement or an if/else chain. This is most useful when you know that your input data is limited to a certain range.
- Here is an example of a simple reverse alphabet lookup:

```js
var alpha = {
  1:"Z",
  2:"Y",
  3:"X",
  4:"W",
  ...
  24:"C",
  25:"B",
  26:"A"
};
alpha[2]; // "Y"
alpha[24]; // "C"

var value = 2;
alpha[value]; // "Y"
```

88. Testing Objects for Properties

- Sometimes it is useful to check if the property of a given object exists or not. We can use the .hasOwnProperty(propname) method of objects to determine if that object has the given property name.
- .hasOwnProperty() returns true or false if the property is found or not.

```js
var myObj = {
  top: "hat",
  bottom: "pants",
};
myObj.hasOwnProperty("top"); // true
myObj.hasOwnProperty("middle"); // false
```

89. Manipulating Complex Objects

- Sometimes you may want to store data in a flexible Data Structure. A JavaScript object is one way to handle flexible data. They allow for arbitrary combinations of strings, numbers, booleans, arrays, functions, and objects.

```js
var ourMusic = [
  {
    artist: "Daft Punk",
    title: "Homework",
    release_year: 1997,
    formats: ["CD", "Cassette", "LP"],
    gold: true,
  },
];
```

- This is an array which contains one object inside. The object has various pieces of metadata about an album. It also has a nested "formats" array. If you want to add more album records, you can do this by adding records to the top level array. Objects hold data in a property, which has a key-value format. In the example above, "artist": "Daft Punk" is a property that has a key of "artist" and a value of "Daft Punk"

- JSON (JavaScript Object Notation) is a lightweight data-interchange format. It is easy for humans to read and write. It is easy for machines to parse and generate

{
"artist": "Daft Punk",
"title": "Homework",
"release_year": 1997,
"formats": [
"CD",
"Cassette",
"LP"
],
"gold": true
}

90. Accessing Nested Objects

- The sub-properties of objects can be accessed by chaining together the dot or bracket notation.

Here is a nested object:

```js
var ourStorage = {
  desk: {
    drawer: "stapler",
  },
  cabinet: {
    "top drawer": {
      folder1: "a file",
      folder2: "secrets",
    },
    "bottom drawer": "soda",
  },
};
ourStorage.cabinet["top drawer"].folder2; // "secrets"
ourStorage.desk.drawer; // "stapler"
```

91. Accessing Nested Arrays

```js
var ourPets = [
  {
    animalType: "cat",
    names: ["Meowzer", "Fluffy", "Kit-Cat"],
  },
  {
    animalType: "dog",
    names: ["Spot", "Bowser", "Frankie"],
  },
];
ourPets[0].names[1]; // "Fluffy"
ourPets[1].names[0]; // "Spot"
//go to object and then using bracket
```

92. Record Collection
    (could not solve)
    object[id][prop] = collection[id][prop] || []; 완벽하게 이해가 안됨

93. Iterate with JavaScript While Loops

- The first type of loop we will learn is called a while loop because it runs "while" a specified condition is true and stops once that condition is no longer true.

```js
var ourArray = [];
var i = 0;
while (i < 5) {
  ourArray.push(i);
  i++;
}
```

- In the code example above, the while loop will execute 5 times and append the numbers 0 through 4 to ourArray.
- **\*append 뜻:add (something) to the end of a written document.ex) "the results of the survey are appended to this chapter"\_**

94. Iterate with JavaScript For Loops

- The most common type of JavaScript loop is called a for loop because it runs "for" a specific number of times.
- For loops are declared with three optional expressions separated by semicolons:
  for ([initialization]; [condition]; [final-expression])
- The initialization statement is executed one time only before the loop starts. It is typically used to define and setup your loop variable.
- The condition statement is evaluated at the beginning of every loop iteration and will continue as long as it evaluates to true. When condition is false at the start of the iteration, the loop will stop executing. This means if condition starts as false, your loop will never execute.
- The final-expression is executed at the end of each loop iteration, prior to the next condition check and is usually used to increment or decrement your loop counter.

95. Iterate Odd Numbers With a For Loop

- For loops don't have to iterate one at a time. By changing our final-expression, we can count by even numbers.
- We'll start at i = 0 and loop while i < 10. We'll increment i by 2 each loop with i += 2.

```js
var ourArray = [];
for (var i = 0; i < 10; i += 2) {
  ourArray.push(i);
}
```

96. Count Backwards With a For Loop

- We'll start at i = 10 and loop while i > 0. We'll decrement i by 2 each loop with i -= 2.

```js
var ourArray = [];
for (var i = 10; i > 0; i -= 2) {
  ourArray.push(i);
}
```

97. Iterate Through an Array with a For Loop

- A common task in JavaScript is to iterate through the contents of an array.
- One way to do that is with a for loop. This code will output each element of the array arr to the console:

```js
var arr = [10, 9, 8, 7, 6];
for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
```

쉽네

98. Nesting For Loops
    If you have a multi-dimensional array, you can use the same logic as the prior waypoint to loop through both the array and any sub-arrays.

```js
var arr = [
  [1, 2],
  [3, 4],
  [5, 6],
];
for (var i = 0; i < arr.length; i++) {
  for (var j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}
```

This outputs each sub-element in arr one at a time. Note that for the inner loop, we are checking the .length of arr[i], since arr[i] is itself an array.

99. Iterate with JavaScript Do...While Loops

- It is called a do...while loop because it will first do one pass of the code inside the loop no matter what, and then continue to run the loop while the specified condition evaluates to true.

```js
var ourArray = [];
var i = 0;
do {
  ourArray.push(i);
  i++;
} while (i < 5);
```

- However, what makes the do...while different from other loops is how it behaves when the condition fails on the first check.

- Essentially, a do...while loop ensures that the code inside the loop will run at least once.

- difference

```js
var ourArray = [];
var i = 5;
while (i < 5) {
  ourArray.push(i);
  i++;
}
//The result is that ourArray will end up with no values added to it, and it will still look like [] when all of the code in the example above has completed running.
var ourArray = [];
var i = 5;
do {
  ourArray.push(i);
  i++;
} while (i < 5);
//We will add a single element to the array and then increment i before we get to the condition check. When we finally evaluate the condition i < 5 on the last line, we see that i is now 6, which fails the conditional check, so we exit the loop and are done. At the end of the above example, the value of ourArray is [5]
```

100. Replace Loops using Recursion (20.10.27)

- Recursion is the concept that a function can be expressed in terms of itself. To help understand this, start by thinking about the following task: multiply the first n elements of an array to create the product of those elements. Using a for loop, you could do this:

```js
function multiply(arr, n) {
  var product = 1;
  for (var i = 0; i < n; i++) {
    product *= arr[i];
  }
  return product;
}
```

- However, notice that multiply(arr, n) == multiply(arr, n - 1) \* arr[n - 1]
- That means you can rewrite multiply in terms of itself and never need to use a loop.

```js
function multiply(arr, n) {
  if (n <= 0) {
    return 1;
  } else {
    return multiply(arr, n - 1) * arr[n - 1];
  }
}
```

- In the base case, where n <= 0, it returns 1
- For larger values of n, it calls itself, but with n - 1. That function call is evaluated in the same way, calling multiply again until n <= 0.
- At this point, all the functions can return and the original multiply returns the answer.
- Recursive functions must have a base case when they return without calling the function again (in this example, when n <= 0), otherwise they can never finish executing.
  - 1. condition to stop(base case)
  - 2. must call it self
  - 3. move toward base case

101. Profile Lookup did not pass at first
     nest if

```js
// Setup
var contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Only change code below this line

  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      if (contacts[i].hasOwnProperty(prop)) {
        return contacts[i][prop];
      } else return "No such property";
    }
  }
  return "No such contact";
  // Only change code above this line
}

console.log(lookUpProfile("Kristian", "lastName"));
```

102. Generate Random Fractions with JavaScript

- JavaScript has a Math.random() function that generates a random decimal number between 0 (inclusive) and not quite up to 1 (exclusive). Thus Math.random() can return a 0 but never quite return a 1
- `Math.random()` 0~1

103. Generate Random Whole Numbers with JavaScript

- 1. Use Math.random() to generate a random decimal.
- 2. Multiply that random decimal by 20.
- 3. Use another function, Math.floor() to round the number down to its nearest whole number.
- This technique will give us a whole number between 0 and 19.
- `Math.floor(Math.random() * 20);`

104. Generate Random Whole Numbers within a Range

- we can generate a random whole number that falls within a range of two specific numbers.
- To do this, we'll define a minimum number min and a maximum number max.
- `Math.floor(Math.random() * (max - min + 1)) + min`
- Math.random() gives us a random number between 0 and 1.

But we don’t want a random decimal; we want a random number. We can get that by multiplying our Math.random() result by the size of the range. For example, if we want a random number between 0 and 10, we need to multiply by 10. A result of 0.4 would become 4. If we want random numbers from 7 to 11, that is 5 possible numbers (7, 8, 9, 10, 11).
This is where we get Math.random() \* (max - min + 1)

We don’t want decimal numbers though, we want whole numbers. Math.floor() just chops off the decimal. 3.14159 becomes 3.
That’s where we get Math.floor(Math.random() \* (max - min + 1)).

Now we’re getting a number from 0 to whatever our range size was. If we wanted a number from 7 to 11, it’s a random number from 0 to 5. To make that be a number from 7 to 11, we just need to add 7 to whatever number we got. 7 is our minimum value.
This leads us to Math.floor(Math.random() \* (max - min + 1)) + min

105. Use the parseInt Function

- The parseInt() function parses a string and returns an integer.
- any number that is not a fraction or decimal : any whole number or its negative.
- If the first character in the string can't be converted into a number, then it returns NaN.

106. Use the parseInt Function with a Radix

- The parseInt() function parses a string and returns an integer. It takes a second argument for the radix, which specifies the base of the number in the string. The radix can be an integer between 2 and 36.

- var a = parseInt("11", 2);
- 12진법 16진법 등등 radix 이상해\*\*

107. **_Use the Conditional (Ternary) Operator_**

- The conditional operator, also called the ternary operator, can be used as a one line if-else expression.

- condition ? expression-if-true : expression-if-false;
-

```js
function findGreater(a, b) {
  if (a > b) {
    return "a is greater";
  } else {
    return "b is greater";
  }
}
///This can be re-written using the conditional operator:

function findGreater(a, b) {
  return a > b ? "a is greater" : "b is greater";
}
```

108. **_Use Multiple Conditional (Ternary) Operators_**

- You can also chain them together to check for multiple conditions.

```js
function findGreaterOrEqual(a, b) {
  if (a === b) {
    return "a and b are equal";
  } else if (a > b) {
    return "a is greater";
  } else {
    return "b is greater";
  }
}

//The above function can be re-written using multiple conditional operators:

function findGreaterOrEqual(a, b) {
  return a === b
    ? "a and b are equal"
    : a > b
    ? "a is greater"
    : "b is greater";
}
```

- It is considered best practice to format multiple conditional operators such that each condition is on a separate line,

109. Use Recursion to Create a Countdown 다시 !!!!1

```js
function countup(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countup(n - 1);
    countArray.push(n);
    return countArray;
  }
}
console.log(countup(5)); // [ 1, 2, 3, 4, 5]
```

- recursion call it self function until not calling
- every loop we can make recursion but there is things that recursion can do which loop can not do!!!

110. Use Recursion to Create a Range of Numbers 다시 !!!!!
