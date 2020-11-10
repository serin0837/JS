# difference between map and forEach

1. Definitions

- The map method receives a function as a parameter. Then it applies it on each element and returns an entirely new array populated with the results of calling the provided function.
- This means that it returns a new array that contains an image of each element of the array. It will always return the same number of items.

```js
const myAwesomeArray = [5, 4, 3, 2, 1];

myAwesomeArray.map((x) => x * x);

// >>>>>>>>>>>>>>>>> Output: [25, 16, 9, 4, 1]
```

- Like map , the forEach() method receives a function as an argument and executes it once for each array element.
- However, instead of returning a new array like map, it returns undefined.(그냥 print out만 가능 하다)

```js
const myAwesomeArray = [
  { id: 1, name: "john" },
  { id: 2, name: "Ali" },
  { id: 3, name: "Mass" },
];

myAwesomeArray.forEach((element) => console.log(element.name));
// >>>>>>>>> Output : john
//                    Ali
//                    Mass
```

2. The returning value

```js
const myAwesomeArray = [1, 2, 3, 4, 5];
myAwesomeArray.forEach((x) => x * x);
//>>>>>>>>>>>>>return value: undefined

myAwesomeArray.map((x) => x * x);
//>>>>>>>>>>>>>return value: [1, 4, 9, 16, 25]
```

3. Ability to chain other methods

- The second difference between these array methods is the fact that map() is chainable. This means that you can attach reduce(), sort(), filter() and so on after performing a map() method on an array.

- That's something you can't do with forEach() because, as you might guess, it returns undefined.

```js
const myAwesomeArray = [1, 2, 3, 4, 5];
myAwesomeArray.forEach((x) => x * x).reduce((total, value) => total + value);
//>>>>>>>>>>>>> Uncaught TypeError: Cannot read property 'reduce' of undefined
myAwesomeArray.map((x) => x * x).reduce((total, value) => total + value);
//>>>>>>>>>>>>>return value: 55
```

## reduce????

```js
const numbers = [1, -1, 2, 3];
let sum = 0;
for (let n of numbers) {
  sum += n;
}
console.log(sum); //5

//use with reduce
const sum = numbers.reduce((accumulator, currentValue) => {
  //accumulator=sum
  //currentvalue=each element
  return accumulator + currentValue;
  //first call a=0/ c=1 a=1
  //second call a=1/c=-1/a=0....
}, 0);
//accumulator initially 0
//we can exclude 0 and its going to be first value of array
```

## difference between for of / for in

- for..in is a method for iterating over "enumerable" properties of an object
- for..in and Objects: The for..in method provides us the most straightforward way to loop over Object keys and values, since Objects do not have access to the forEach method that Arrays do.
- what is enumerable property?

  - There is Object Property types: data properties and accessor properties.
  - he enumerable attribute of all the properties defined on an object are true. It means that you can iterate over all properties using the for...in loop as

- for..in and Arrays
  The "key" for values in an Array are the numerical indexes. Therefore, these indexes are essentially just enumerable properties, like Object keys, except they are integers instead of strings.

  ```js
  const array = ["a", "b", "c", "d"];

  for (const index in array) {
    console.log(array[index]);
  }

  // Result: a, b, c, d
  ```

- However, it is generally advised that for..in not be used with Arrays, particularly because it cannot be guaranteed that the iteration happens in sequence, which is usually important for Arrays.

- for..in and Strings
  Each character in a string has an index. Therefore, similar to Arrays, the indexes are enumerable properties that just happen to be integers.

```js
const string = "Ire Aderinokun";

for (const index in string) {
  console.log(string[index]);
}

// Result: I, r, e, , A, d, e, r, i, n, o, k, u, n
```

- The for..of Statement

  - for..of is a method, introduced in ES2015, for iterating over "iterable collections". These are objects that have a [Symbol.iterator] property.
  - The [Symbol.iterator] property allows us to manually iterate over the collection by calling the [Symbol.iterator]().next() method to retrieve the next item in the collection.
  - for..of and Objects: The for..of loop doesn't work with Objects because they are not "iterable", and therefore don't have a [Symbol.iterator] property.
  - for..of and Arrays/Strings: The for..of loop works well with Arrays and Strings, as they are iterable. This method is a more reliable way of looping through an Array in sequence.

  ```js
  const array = ["a", "b", "c", "d"];
  for (const item of array) {
    console.log(item);
  }
  // Result: a, b, c, d

  const string = "Ire Aderinokun";
  for (const character of string) {
    console.log(character);
  }
  // Result: I, r, e, , A, d, e, r, i, n, o, k, u, n
  ```

  - 결론: for ..in은 object랑 같이쓰는게 좋다 (순서가 안정해져있어 그냥 키를 내뱉아)
    근데 for..in은 object에 쓸수 없고, 순서가 정해져 있기 때문에 array에 쓰는게 좋다

- let's back to difference between foreach and map

3. Mutability

- forEach() does not mutate the array on which it is called. (However, callback may do so).

- map() does not mutate the array on which it is called (although callback, if invoked, may do so).
- but, we see clearly that map() relies on immutability and forEach() is a mutator method.

4. conclusion

- As always, the choice between map() and forEach() will depend on your use case. If you plan to change, alternate, or use the data, you should pick map(), because it returns a new array with the transformed data.
- But, if you won't need the returned array, don't use map() - instead use forE- ach() or even a for loop.

# Export and Import(again)

정리 해야함

- node.js - module.exports and require()
- node.js give us global object.
- and one of the object is module object
- which contains an exports property
  forEach
- but also have export global object?

````js
require "./file.js" sayHi()

module.exports.sayHi= function(){
  console.log("Hola!")
}
exports.sayHi= function(){
  console.log("Hola!")
}

```js
let ratings = [5, 4, 5];
let sum = 0;

let sumFunction = async function (a, b) {
  return a + b;
};

ratings.forEach(async function (rating) {
  sum = await sumFunction(sum, rating);
});

console.log(sum);
// Naively expected output: 14
// Actual output: 0
````

- async, await,promises
- callback
- arrow function / normal function
- apply(), call(), bind()
- classes in general /OOP
- queryselector and getelementId, className differences
- regex
- export, import
- promt( 어떻게 읽더라? 그거를 어떻게 보는지도 공부 하자 )
