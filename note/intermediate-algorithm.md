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
