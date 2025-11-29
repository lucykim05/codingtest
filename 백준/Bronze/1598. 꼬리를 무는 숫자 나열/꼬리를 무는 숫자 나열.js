const fs = require('fs');
const [a, b] = fs.readFileSync(0, 'utf8').trim().split(' ').map(Number);

function solution(n) {
  return {
    row: Math.floor((n - 1) / 4),
    col: (n - 1) % 4
  };
}

const a_pos = solution(a);
const b_pos = solution(b);

const distance = Math.abs(a_pos.row - b_pos.row) + Math.abs(a_pos.col - b_pos.col);
console.log(distance);
