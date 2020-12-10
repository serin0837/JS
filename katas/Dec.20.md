- 01/12/20

An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

isIsogram("Dermatoglyphics") == true
isIsogram("aba") == false
isIsogram("moOse") == false // -- ignore letter case

```js mine
function isIsogram(str) {
  var i, j;
  str = str.toLowerCase();
  for (i = 0; i < str.length; ++i)
    for (j = i + 1; j < str.length; ++j) if (str[i] === str[j]) return false;
  return true;
}
```

- 02/12/20
  Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

```js mine
function DNAStrand(dna) {
  const newArr = dna.split("");
  const emptyArr = [];
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === "A") {
      emptyArr.push("T");
    } else if (newArr[i] === "T") {
      emptyArr.push("A");
    } else if (newArr[i] === "G") {
      emptyArr.push("C");
    } else if (newArr[i] === "C") {
      emptyArr.push("G");
    }
  }
  return emptyArr.join("");
}
```

```js other
var pairs = { A: "T", T: "A", C: "G", G: "C" };

function DNAStrand(dna) {
  return dna
    .split("")
    .map(function (v) {
      return pairs[v];
    })
    .join("");
}
```

## 03/12/20

- XO("ooxx") => true
  XO("xooxx") => false
  XO("ooxXm") => true
  XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
  XO("zzoo") => false

```js serin
function XO(str) {
  //code here
  const newArr = str.toLowerCase().split("");
  const arrOfO = newArr.filter((element) => element === "o");
  const arrOfX = newArr.filter((element) => element === "x");
  return arrOfO.length === arrOfX.length ? true : false;
}
```

```js popular
const XO = (str) => {
  str = str.toLowerCase().split("");
  return (
    str.filter((x) => x === "x").length === str.filter((x) => x === "o").length
  );
};
```

04.12.20

```js serin
String.prototype.toJadenCase = function () {
  //...
  return this.split(" ")
    .map((element) => element[0].toUpperCase() + element.slice(1))
    .join(" ");
};
```

## 07.12.20

Given two integers a and b, which can be positive or negative, find the sum of all the integers between including them too and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!

```js
function getSum(a, b) {
  // const newArr = []
  let sum = 0;
  if (a < b) {
    for (let i = a; i <= b; i++) {
      sum += i;
    }
    return sum;
  } else if (a > b) {
    for (let i = b; i <= a; i++) {
      sum += i;
    }
    return sum;
  } else {
    return a;
  }
  // return newArr.split("")
}
```

08.12.20

In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

Example
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

```js serin
function filter_list(l) {
  // Return a new array with the strings filtered out
  // Return a new
  return l.filter((element) => typeof element === "number");
}
```

```js
function filter_list(l) {
  return l.filter((e) => Number.isInteger(e));
}
```

## 09.12.20

- Growth of a Population

```js serin
function nbYear(p0, percent, aug, p) {
  // your code
  const newArr = [];
  while (p0 < p) {
    p0 = p0 + p0 * (percent * 0.01) + aug;
    console.log(p0);
    newArr.push(p0);
    if (p0 >= p) {
      return newArr.length;
    }
  }
}
```

```js other
function nbYear(p0, percent, aug, p) {
  for (var y = 0; p0 < p; y++) p0 = p0 * (1 + percent / 100) + aug;
  return y;
}
```

## 10.12.20

```js serin
function maskify(cc) {
  const lastString = cc.slice(-4);
  const firstString = cc.slice(0, -4);
  const regex = /[A-Za-z0-9]/g;
  return (
    firstString
      .split("")
      .map((element) => element.replace(regex, "#"))
      .join("") + lastString
  );
}
```

```js
function maskify(cc) {
  return cc.slice(0, -4).replace(/./g, "#") + cc.slice(-4);
}
```
