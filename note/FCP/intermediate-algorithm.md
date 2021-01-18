1. Sum All Numbers in a RangePassed
   We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

what i did
for loop push element from 1 to for and use reduce method

2. Diff Two Arrays

- Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

```js serin
function diffArray(arr1, arr2) {
  let arrOne = arr1.filter((el) => !arr2.includes(el));
  let arrTwo = arr2.filter((el) => !arr1.includes(el));
  if (arrTwo.length > 0) {
    return arrOne.concat(arrTwo);
  } else return arrOne;
}

console.log(
  diffArray(
    ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
    ["diorite", "andesite", "grass", "dirt", "dead shrub"]
  )
);
```

(imperative solution)

```js
function diffArray(arr1, arr2) {
  var newArr = [];

  function onlyInFirst(first, second) {
    // Looping through an array to find elements that don't exist in another array
    for (var i = 0; i < first.length; i++) {
      if (second.indexOf(first[i]) === -1) {
        // Pushing the elements unique to first to newArr
        newArr.push(first[i]);
      }
    }
  }

  onlyInFirst(arr1, arr2);
  onlyInFirst(arr2, arr1);

  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
```

(another solution)

```js
function diffArray(arr1, arr2) {
  return arr1
    .concat(arr2)
    .filter((item) => !arr1.includes(item) || !arr2.includes(item));
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
```

- The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array
- string also can use concat

```js
const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
const array3 = array1.concat(array2);

console.log(array3);
// expected output: Array ["a", "b", "c", "d", "e", "f"]
```

3. Seek and Destroy
   You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
   -include method!!!!//
   I can use with String and Array - Array

   ```js
   [1, 2, 3]
     .includes(2) // true
     [(1, 2, 3)].includes(4) // false
     [(1, 2, 3)].includes(3, 3) // false
     [(1, 2, 3)].includes(3, -1) // true
     [(1, 2, NaN)].includes(NaN); // true
   ```

   - String

   ```js
   const sentence = "The quick brown fox jumps over the lazy dog.";

   const word = "fox";

   console.log(
     `The word "${word}" ${
       sentence.includes(word) ? "is" : "is not"
     } in the sentence`
   );
   // expected output: "The word "fox" is in the sentence"
   ```

   indexOf method!!!

   - Array: method returns the first index at which a given element can be found in the array, or -1 if it is not present.

   ```js
   const beasts = ["ant", "bison", "camel", "duck", "bison"];

   console.log(beasts.indexOf("bison"));
   // expected output: 1
   ```

   - String

   ```js
   const paragraph =
     "The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?";

   const searchTerm = "dog";
   const indexOfFirst = paragraph.indexOf(searchTerm);

   console.log(
     `The index of the first "${searchTerm}" from the beginning is ${indexOfFirst}`
   );
   // expected output: "The index of the first "dog" from the beginning is 40"
   ```

```js
function destroyer(arr, ...arrTwo) {
  return arr.filter((el) => !arrTwo.includes(el));
}
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
```

- codeWars mumbling (바로 못품)
  his time no story, no theory. The examples below show you how to write function accum:

Examples:

accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"

```js
function accum(s) {
  return s
    .split("")
    .map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i))
    .join("-");
}
```

- Wherefore art thou
  어려워.. 바로 못품

```js
function whatIsInAName(collection, source) {
  // Only change code below this line
  var srcKeys = Object.keys(source);
  console.log(srcKeys);
  return collection.filter((obj) => {
    for (var i = 0; i < srcKeys.length; i++) {
      if (
        !obj.hasOwnProperty(srcKeys[i]) ||
        obj[srcKeys[i]] !== source[srcKeys[i]]
      ) {
        return false;
      }
    }
    return true;
  });
}

// Only change code above this line

console.log(
  whatIsInAName(
    [
      { first: "Romeo", last: "Montague" },
      { first: "Mercutio", last: null },
      { first: "Tybalt", last: "Capulet" },
    ],
    { last: "Capulet" }
  )
);
```

# 05.01.21

Pig LatinPassed
Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.

- If a word begins with a vowel, just add "way" at the end.

```js serin
function translatePigLatin(str) {
  let vowelRegex = /[aeiou]/g;
  let firstMatch = str.match(vowelRegex) || 0;
  if (vowelRegex.test(str[0])) {
    return str + "way";
  } else if (firstMatch.length > 0) {
    let matchVowel = str.indexOf(firstMatch[0]);
    return str.slice(matchVowel) + str.slice(0, matchVowel) + "ay";
  } else if (firstMatch === 0) {
    return str + "ay";
  }
}

translatePigLatin("consonant");
```

# 06.01.21

```js
function myReplace(str, before, after) {
  if (before[0].match(/[A-Z]/)) {
    let newAfter = after[0].toUpperCase() + after.slice(1);
    return str.replace(before, newAfter);
  } else if (before[0].match(/[a-z]/)) {
    let newAfter2 = after[0].toLowerCase() + after.slice(1);
    console.log(newAfter2);
    return str.replace(before, newAfter2);
  } else {
    return str.replace(before, after);
  }
}

console.log(myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped"));`
```

## Intermediate Algorithm Scripting: DNA Pairing

The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

```js serin
function pairElement(str) {
  let pairData = {
    A: ["A", "T"],
    T: ["T", "A"],
    G: ["G", "C"],
    C: ["C", "G"],
  };
  return str.split("").map((element) => pairData[element]);
}
```

```js answer
function pairElement(str) {
  //create object for pair lookup
  var pairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C",
  };
  //split string into array of characters
  var arr = str.split("");
  //map character to array of character and matching pair
  return arr.map((x) => [x, pairs[x]]);
}

//test here
pairElement("GCG");
```

## Intermediate Algorithm Scripting: Missing letters

```js mine
function fearNotLetter(str) {
  let alpabet = "abcdefghijklmnopqrstuvwxyz";
  let startIndex = alpabet.indexOf(str[0]);
  for (let i = startIndex; i <= str.length; i++) {
    return alpabet[
      alpabet.indexOf(
        str
          .split("")
          .filter((element) => element === alpabet[i])
          .join("")
      ) + 1
    ];
  }
}

console.log(fearNotLetter("abce"));
```

```js answer
function fearNotLetter(str) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let startingPoint = alphabet.indexOf(str[0]);

  for (let i = 0; i < str.length + 1; i++) {
    if (str[i] !== alphabet[startingPoint + i]) {
      return alphabet[startingPoint + i];
    }
  }
  return undefined;
}
```

## Intermediate Algorithm Scripting: Sorted Union

```js answer
function uniteUnique(...arr) {
  const flatArr = [].concat(...arr);
  return [...new Set(flatArr)];
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
```

## Intermediate Algorithm Scripting: Convert HTML Entities

Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
almost here

```js not serin
function convertHTML(str) {
  // Use Object Lookup to declare as many HTML entities as needed.
  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;",
  };
  //Use map function to return a filtered str with all entities changed automatically.
  return str
    .split("")
    .map((entity) => htmlEntities[entity] || entity)
    .join("");
}

// test here
convertHTML("Dolce & Gabbana");
```

## Sum All Odd Fibonacci Numbers

Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.
-> could not solve

```js answer
function sumFibs(num) {
  let previousNum = 0;
  let currentNum = 1;
  let sum = 0;
  while (currentNum <= num) {
    if (currentNum % 2 !== 0) {
      sum += currentNum;
    }
    currentNum += previousNum;
    previousNum = currentNum - previousNum;
  }
  return sum;
}

sumFibs(4);
// round 1 sum 1 current num 1 previous num 1
// round 2 sum 2 current num 2 previous num 1
// round 3 sum current num 3 previous num 2
```

## Sum All Primes

A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.

(I could not solve)

```js
function sumPrimes(num) {
  // Check all numbers for primality
  let primes = [];
  for (let i = 2; i <= num; i++) {
    if (primes.every((prime) => i % prime !== 0)) primes.push(i);
  }
  return primes.reduce((sum, prime) => sum + prime, 0);
}
```

## Drop it

Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.

Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.

find index method!!!\*\*\*
The findIndex() method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.

```js could not solve myself
function dropElements(arr, func) {
  let index = arr.findIndex(func);
  return index === -1 ? [] : arr.slice(index);
}

console.log(
  dropElements([1, 2, 3, 4], function (n) {
    return n > 5;
  })
);
```
