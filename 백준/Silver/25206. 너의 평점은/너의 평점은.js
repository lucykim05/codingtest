const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// const input = fs.readFileSync('./input.txt').toString().trim().split('\n');

const scoreMap = {
  'A+': 4.5,
  A0: 4,
  'B+': 3.5,
  B0: 3,
  'C+': 2.5,
  C0: 2,
  'D+': 1.5,
  D0: 1,
  F: 0,
};

let total = 0;
let count = 0;

input.forEach((x) => {
  const [name, score, grade] = x.split(' ').map((x) => x.trim());
  if (grade !== 'P') {
    total += Number(score) * scoreMap[grade];
    count += Number(score);
  }
});

console.log(total / count);
