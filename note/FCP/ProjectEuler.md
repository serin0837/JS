1. Project Euler: Problem 1: Multiples of 3 and 5
   If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below the provided parameter value number.

```js serin
function multiplesOf3and5(number) {
  let sum = 0;
  for (let currentNum = 1; currentNum < number; currentNum++) {
    if (currentNum % 3 == 0 || currentNum % 5 == 0) {
      sum += currentNum;
    }
  }
  return sum;
}

console.log(multiplesOf3and5(10));
```
