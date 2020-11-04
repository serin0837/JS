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
