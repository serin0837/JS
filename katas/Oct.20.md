## 19.10.20

1. remove space of string
   function noSpace(x){return x.split(' ').join('')}
2. Find the smallest integer in the array

- 포루프 쓰다가 어떻게 하는건지 검색하니까 Math.min 방법을 쓰면 된다.
  그리고 스프레드 오퍼레이터를 사용하는데 왜 사용하는지는 모르겠음.
- The static function Math.min() returns the lowest-valued number passed into it, or NaN if any parameter isn't a number and can't be converted into one.

- serin solution

  ```js
  class SmallestIntegerFinder {
    findSmallestInt(args) {
      let min = Math.min(...args);
      return min;
    }
  }
  ```

## 20.10.20

Grasshopper - Summation

```js
var summation = function (num) {
  let result = 0;
  for (var i = 1; i <= num; i++) {
    result += i;
  }

  return result;
};

const summation = (n) => (n * (n + 1)) / 2;
```

- 21.10.20

Reversed Strings

```js
function solution(str) {
  return str.split("").reverse().join("");
}

const solution = (s) => [...s].reverse().join("");
```

## 23.10.20

### Convert a Number to a String!

```js
function numberToString(num) {
  return num.toString();
  // Return a string of the number here!
}
```

## 26.10.20

function isDivisible(n, x, y) {
return n % x === 0 && n % y === 0
}

mine
function isDivisible(n, x, y) {
if(n%x===0 && n%y===0) return true;
else return false
}

## 27.10.20

Century From Year

const century = year => Math.ceil(year/100)

function century(year) {
if (year % 100 === 0){
return Math.floor(year / 100);
}else{
return Math.floor(year / 100 + 1);
}
}

- The Math.ceil() function always rounds a number up to the next largest integer.

Note: Math.ceil(null) returns integer 0 and does not give a NaN error.

Basic Mathematical Operations
-serin
function basicOp(operation, value1, value2){
if (operation === '+') {
return value1 + value2;

} else if (operation === '-') {
return value1 - value2;
} else if (operation === "_") {
return value1 _ value2;
} else if (operation === "/") {
return value1 / value2;
}
}

- other
  function basicOp(operation, value1, value2) {
  switch (operation) {
  case '+':
  return value1 + value2;
  case '-':
  return value1 - value2;
  case '_':
  return value1 _ value2;
  case '/':
  return value1 / value2;
  default:
  return 0;
  }
  }

## 28.10.20

Nathan loves cycling.

Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

For example:

time = 3 ----> litres = 1

time = 6.7---> litres = 3

time = 11.8--> litres = 5

```js
function litres(time) {
  return Math.floor(time * 0.5);
}
```

느무 쉬워용

## 29.10.20

Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example:
348597 => [7,9,5,8,4,3]

- mine (바로 못품 )

```js
function digitize(n) {
  let arrString = n.toString().split("").reverse().map(Number);
  return arrString;
}

console.log(digitize(35231));
```

- other

```js
function digitize(n) {
  return String(n).split("").map(Number).reverse();
}
```

\*\*\*mau(Number) change string element to number element!!!
