## 05.01.21

could not solve my self
find smallest positive integer

```js
function solution(A) {
  let min = 1;
  let sortedArr = [...A].sort((a, b) => a - b);
  for (var i of sortedArr) {
    if (i > -1 && i == min) {
      min++;
    }
  }
  return min;
}

console.log(solution([1, 2, 3, 6, 6, 0]));
```
