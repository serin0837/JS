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
