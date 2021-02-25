roman number

```js
function convertToRoman(num) {
  let newArray = [];
  let romanNum = {
    1: "I",
    2: "II",
    3: "III",
    4: "IV",
    5: "V",
    6: "VI",
    7: "VII",
    8: "VIII",
    9: "IX",
    10: "X",
    20: "XX",
    30: "XXX",
    40: "XL",
    50: "L",
    60: "LX",
    70: "LXX",
    80: "LXXX",
    90: "XC",
  };
  if (num < 10) {
    return romanNum[num];
  }
  if (num > 10) {
    newArray.push(parseInt(num / 10) * 10, num % 10);
    return newArray.map((decimalPortion) => romanNum[decimalPortion]).join("");
  }
}

console.log(convertToRoman(29));
```

```js
function convertToRoman(num) {
  let lookup = 
  {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1}
  let roman = ''
  for (let i in lookup ) {
      console.log(i)
    while ( num >= lookup[i] ) {
      roman += i;
      num -= lookup[i];
    }
  }
  return roman;
}
console.log(convertToRoman(29));
```


# ceasar cypher

function rot13(str) {
  let ceasarsPair = {
      A:"N",
      B:"O",
      C:"P",
      D:"Q",
      E:"R",
      F:"S",
      G:"T",
      H:"U",
      I:"V",
      J:"W",
      K:"X",
      L:"Y",
      M:"Z",
      N:"A",
      O:"B",
      P:"C",
      Q:"D",
      R:"E",
      S:"F",
      T:"G",
      U:"H",
      V:"I",
      W:"J",
      X:"K",
      Y:"L",
      Z:"M"
  }



  let regexAlphabet = /[A-Z]/
  return str.split("").map(letter => regexAlphabet.test(letter)?ceasarsPair[letter]:letter).join("")

}
console.log(rot13("SERR PBQR PNZC"));

# Telephone Number Validator
I did not solve this. 
```js
function telephoneCheck(str) {
  var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
  return regex.test(str);
}
telephoneCheck("555-555-5555");

console.log(telephoneCheck("5555555"));
```