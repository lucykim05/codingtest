const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const [A, B, V] = input;

const day = Math.ceil((V - A) / (A - B)) + 1;

console.log(day);
