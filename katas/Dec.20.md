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