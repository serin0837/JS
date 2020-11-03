03.11.20

Data can be stored and accessed in many different ways, both in JavaScript and other languages.

- how to manipulate arrays, as well as access and copy the information within them
- how to manipulate and access the data within JavaScript objects,

- you should understand the basic properties and differences between arrays and objects, as well as how to choose which to use for a given purpose.

1. Use an Array to Store a Collection of Data

- the simplest implementation of an array data structure. This is known as a one-dimensional array, meaning it only has one level, or that it does not have any other arrays nested within it.

- Notice it contains booleans, strings, and numbers, among other valid JavaScript data types:

```js
let simpleArray = ["one", 2, "three", true, false, undefined, null];
console.log(simpleArray.length);
// logs 7
```

- All arrays have a length property,
- A more complex implementation of an array can be seen below. This is known as a multi-dimensional array, or an array that contains other arrays.
- Notice that this array also contains JavaScript objects,

```js
let complexArray = [
  [
    {
      one: 1,
      two: 2,
    },
    {
      three: 3,
      four: 4,
    },
  ],
  [
    {
      a: "a",
      b: "b",
    },
    {
      c: "c",
      d: "d",
    },
  ],
];
```

2. Access an Array's Contents Using Bracket Notation

- The fundamental feature of any data structure is, of course, the ability to not only store data, but to be able to retrieve that data on command.
- how we can access that array's information?
- When we define a simple array as seen below, there are 3 items in it:

```js
let ourArray = ["a", "b", "c"];
```

- This is known as bracket notation. For example, if we want to retrieve the "a" from ourArray and assign it to a variable, we can do so with the following code:

```js
let ourVariable = ourArray[0];
// ourVariable equals "a"
```

- In addition to accessing the value associated with an index, you can also set an index to a value using the same notation:

ourArray[1] = "not b anymore";
// ourArray now equals ["a", "not b anymore", "c"];

3. Add Items to an Array with push() and unshift()

- arrays are mutable
- In this challenge, we will look at two methods with which we can programmatically modify an array: Array.push() and Array.unshift().

- Both methods take one or more elements as parameters and add those elements to the array the method is being called on; the push() method adds elements to the end of an array, and unshift() adds elements to the beginning.

```js
let twentyThree = "XXIII";
let romanNumerals = ["XXI", "XXII"];

romanNumerals.unshift("XIX", "XX");
// now equals ['XIX', 'XX', 'XXI', 'XXII']

romanNumerals.push(twentyThree);
// now equals ['XIX', 'XX', 'XXI', 'XXII', 'XXIII']
//Notice that we can also pass variables, which allows us even greater flexibility in dynamically modifying our array's data
```

4. Remove Items from an Array with pop() and shift()

- pop() removes an element from the end of an array, while shift() removes an element from the beginning.
- **_The key difference between pop() and shift() and their cousins push() and unshift(), is that neither method takes parameters, and each only allows an array to be modified by a single element at a time._**

```js
let greetings = ["whats up?", "hello", "see ya!"];

greetings.pop();
// now equals ['whats up?', 'hello']

greetings.shift();
// now equals ['hello']
```

- We can also return the value of the removed element with either method like this:

```js
let popped = greetings.pop();
// returns 'hello'
// greetings now equals []
```

5. Remove Items Using splice()

- but what if we want to remove an element from somewhere in the middle?
- Or remove more than one element at once?
- Well, that's where splice() comes in. splice() allows us to do just that: remove any number of consecutive elements from anywhere in an array.
- splice() can take up to 3 parameters, but for now, we'll focus on just the first 2.

- The first two parameters of splice() are integers which represent indexes, or positions, of the array that splice() is being called upon.
- splice()'s first parameter represents the index on the array from which to begin removing elements, while the second parameter indicates the number of elements to delete. For example:

```js
let array = ["today", "was", "not", "so", "great"];

array.splice(2, 2);
// remove 2 elements beginning with the 3rd element
// array now equals ['today', 'was', 'great']
```

- splice() not only modifies the array it's being called on, but it also returns a new array containing the value of the removed elements:

```js
let array = ["I", "am", "feeling", "really", "happy"];

let newArray = array.splice(3, 2);
// newArray equals ['really', 'happy']
```

6. Add Items Using splice()

- Well, you can use the third parameter, comprised of one or more element(s), to add to the array.
- This can be incredibly useful for quickly switching out an element, or a set of elements, for another.

```js
const numbers = [10, 11, 12, 12, 15];
const startIndex = 3;
const amountToDelete = 1;

numbers.splice(startIndex, amountToDelete, 13, 14);
// the second entry of 12 is removed, and we add 13 and 14 at the same index
console.log(numbers);
// returns [ 10, 11, 12, 13, 14, 15 ]
```

- Here we begin with an array of numbers. We then pass the following to splice(). The index at which to begin deleting elements (3), the number of elements to be deleted (1), and the elements (13, 14) to be inserted at that same index.
- Note that there can be any number of elements (separated by commas) following amountToDelete, each of which gets inserted.

7. **Copy Array Items Using slice()**

- **_The next method we will cover is slice(). Rather than modifying an array, slice() copies or extracts a given number of elements to a new array, leaving the array it is called upon untouched. _**
- slice() takes only 2 parameters — the first is the index at which to begin extraction, and the second is the index at which to stop extraction (extraction will occur up to, but not including the element at this index). 2번째 알규머트는 내가 짜르고 싶은곳 +1

```js
let weatherConditions = ["rain", "snow", "sleet", "hail", "clear"];

let todaysWeather = weatherConditions.slice(1, 3);
// todaysWeather equals ['snow', 'sleet'];
// weatherConditions still equals ['rain', 'snow', 'sleet', 'hail', 'clear']
```

- In effect, we have created a new array by extracting elements from an existing array.
