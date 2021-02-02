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
