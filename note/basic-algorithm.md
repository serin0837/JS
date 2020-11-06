1. Convert Celsius to Fahrenheit

- The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.

```js
function convertToF(celsius) {
  let fahrenheit = (celsius * 9) / 5 + 32;

  return fahrenheit;
}

console.log(convertToF(-30));
```

2. Reverse a String

- Reverse the provided string.

```js
function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("hello"));
```

3. Factorialize a Number 다시
   Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation n!

For example: 5! = 1 _ 2 _ 3 _ 4 _ 5 = 120

Only integers greater than or equal to zero will be supplied to the function.

```js
// total 값을 한번에 내뱉는 방법
function factorialize(num, total = 1) {
  if (num <= 1) return total;
  else return factorialize(num - 1, total * num);
}

console.log(factorialize(5));
// unwinding return 값 1 나오면 그값을 뒤에서 앞으로 내뱉는 느낌
function factorialize(num) {
  if (num <= 1) return 1;
  else return num * factorialize(num - 1);
}

console.log(factorialize(5));
```

4. Find the Longest Word in a String

Return the length of the longest word in the provided sentence.

Your response should be a number.

```js
function findLongestWordLength(str) {
  const arrayOfNum = str.split(" ").map((element) => element.length);

  return Math.max(...arrayOfNum);
}

console.log(
  findLongestWordLength("The quick brown fox jumped over the lazy dog")
);
```

5. Return Largest Numbers in Arrays

Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

6. Confirm the Ending
   Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

```js
function confirmEnding(str, target) {
  if (str.slice(-target.length) === target) return true;
  else return false;
}

confirmEnding("Bastian", "stian");
```

slice method는 array도 되고, string도 된다. -도 된다.

7. Repeat a String Repeat a String
   Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.

```js
function repeatStringNumTimes(str, num) {
  let newArr = [];
  while (num >= 1) {
    newArr.push(str.split());
    num--;
  }
  return newArr.join("");
}

console.log(repeatStringNumTimes("abc", 3));
```

other

```js
function repeatStringNumTimes(str, num) {
  var accumulatedStr = "";

  while (num > 0) {
    accumulatedStr += str;
    num--;
  }

  return accumulatedStr;
}
```

8. Truncate a String
   Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

- substring method

```js
const str = "Mozilla";

console.log(str.substring(1, 3));
// expected output: "oz"

console.log(str.substring(2));
// expected output: "zilla"
```

my method

```js
function truncateString(str, num) {
  if (num < str.length) {
    return str.substring(0, num) + "...";
  } else return str.substring(0, num);
}

console.log(
  truncateString(
    "A-tisket a-tasket A green and yellow basket",
    "A-tisket a-tasket A green and yellow basket".length + 2
  )
);
```

```js
function truncateString(str, num) {
  // Clear out that junk in your trunk
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}

function truncateString(str, num) {
  return str.length > num ? str.slice(0, num) + "..." : str;
}
```

9. Finders Keepers

```js -serin
function findElement(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (func(num)) return num;
  }
}

console.log(
  findElement([1, 3, 5, 8, 9, 10], function (num) {
    return num % 2 === 0;
  })
);
```

```js
function findElement(arr, func) {
  let num = 0;

  for (var i = 0; i < arr.length; i++) {
    num = arr[i];
    if (func(num)) {
      return num;
    }
  }

  return undefined;
}
```

```js
function findElement(arr, func) {
  return arr.find(func);
}
```

- **find method**(이것도 하이어 올덜 펀션? 이겠지)
  The find() method returns the value of the first element in the provided array that satisfies the provided testing function.
  - If you need the index of the found element in the array, use findIndex().
  - If you need to find the index of a value, use Array.prototype.indexOf(). (It’s similar to findIndex(), but checks each element for equality with the value instead of using a testing function.)

```js
function findElement(arr, func) {
  return arr[arr.map(func).indexOf(true)];
}
```

10. Boo who
    Check if a value is classified as a boolean primitive. Return true or false.

```js serin
function booWho(bool) {
  if (bool === true || bool === false) return true;
  else {
    return false;
  }
}

booWho(null);
```

```js
function booWho(bool) {
  return typeof bool === "boolean";
}

// test here
booWho(null);
```

11. Title Case a Sentence
    Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

```js serin
function titleCase(str) {
  let arrOfWord = str.split(" ");
  let newArr = [];
  for (let i = 0; i < arrOfWord.length; i++) {
    let upper = arrOfWord[i].slice(0, 1).toUpperCase();
    let lower = arrOfWord[i].slice(1).toLowerCase();
    newArr.push(upper + lower);
  }
  return newArr.join(" ");
}

console.log(titleCase("I'm a little tea pot"));
```

다른 사람이 한것 보기

```js
function titleCase(str) {
  var convertToArray = str.toLowerCase().split(" ");
  var result = convertToArray.map(function (val) {
    return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
  });
  return result.join(" ");
}

titleCase("I'm a little tea pot");
```

# replace method

The replace() method returns a new string with some or all matches of a pattern replaced by a replacement.

replace(바꾸고 싶은것, 뭘로 바꿀지 )
`const newStr = str.replace(regexp|substr, newSubstr|function)`

# charAt()

The String object's charAt() method returns a new string consisting of the single UTF-16 code unit located at the specified offset into the string.
`let character = str.charAt(index)` 12. Slice and Splice
You are given two arrays and an index.

Copy each element of the first array into the second array, in order.

Begin inserting elements at index n of the second array.

Return the resulting array. The input arrays should remain the same after the function runs.

못풀었음, 내가 한것

```js
function frankenSplice(arr1, arr2, n) {
  let newArr = [];
  let frontOfArr2 = arr2.slice(0, n);
  let endOfArr2 = arr2.slice(n);
  let string = frontOfArr2 + "," + arr1 + "," + endOfArr2;
  return string.toString();
}

console.log(
  frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)
);
```

답

```js
function frankenSplice(arr1, arr2, n) {
  let copyArr2 = arr2.slice();
  copyArr2.splice(n, 0, ...arr1);
  return copyArr2;
}

console.log(
  frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)
);
```

13. Falsy Bouncer
    Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Hint: Try converting each value to a Boolean.

힌트 보고 나서 풀수 있었음.
if statement 에 이거는 false다 이러고 있었는데 그럴필요가 없네 그냥 element를 넣으면 되네 /

```js
function bouncer(arr) {
  let newArr = [];
  for (let element of arr) {
    if (element) {
      newArr.push(element);
    }
  }
  return newArr;
}

console.log(bouncer([7, "ate", "", false, 9]));
```

```js
//이렇게도
function bouncer(arr) {
  return arr.filter(Boolean);
}
```

- The Array.prototype.filter method expects a function that returns a Boolean value which takes a single argument and returns true for truthy value or false for falsy value. Hence we pass the built-in Boolean function.

# filter method

Map/filter/reduce in a tweet:

map([🌽, 🐮, 🐔], cook)
=> [🍿, 🍔, 🍳]

filter([🍿, 🍔, 🍳], isVegetarian)
=> [🍿, 🍳]

reduce([🍿, 🍳], eat)
=> 💩

```js
const students = [
  { name: "Quincy", grade: 96 },
  { name: "Jason", grade: 84 },
  { name: "Alexis", grade: 100 },
  { name: "Sam", grade: 65 },
  { name: "Katie", grade: 90 },
];

const studentGrades = students.filter((student) => student.grade >= 90);
return studentGrades; // [ { name: 'Quincy', grade: 96 }, { name: 'Alexis', grade: 100 }, { name: 'Katie', grade: 90 } ]
```

14. Where do I Belong
    Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

```js serin
function getIndexToIns(arr, num) {
  let newArr = [];
  newArr.push(...arr, num);
  // .sort((a,b)=>a-b)
  newArr.sort((a, b) => a - b);
  return newArr.indexOf(num);
}

console.log(getIndexToIns([3, 10, 5], 50));
```

```js
function getIndexToIns(arr, num) {
  arr.push(num);
  arr.sort(function (a, b) {
    return a - b;
  });
  return arr.indexOf(num);
}
```
