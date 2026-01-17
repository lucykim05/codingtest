const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((x) => x.split(' ').map(Number));

const arr = input.map((x) => x.indexOf(Math.max(...x)));
const max = input.map((x) => Math.max(...x));

const idx = max.indexOf(Math.max(...max));

console.log(Math.max(...max));
console.log(`${idx + 1} ${arr[idx] + 1}`);
