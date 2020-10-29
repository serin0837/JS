- forEach

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
```

- async, await
- callback
- arrow function / normal function
- apply(), call(), bind()
- classes in general /OOP
