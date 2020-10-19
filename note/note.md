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

61.
