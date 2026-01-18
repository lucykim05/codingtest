const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [number, students, amount] = input;
const [main, sub] = amount.split(' ').map(Number);

const answer =
  Number(number) +
  students
    .split(' ')
    .map(Number)
    .filter((x) => x > main)
    .reduce((a, b) => a + Math.ceil((b - main) / sub), 0);

console.log(answer);
