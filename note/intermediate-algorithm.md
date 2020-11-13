1. Sum All Numbers in a RangePassed
   We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

what i did
for loop push element from 1 to for and use reduce method

2. Diff Two Arrays

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
