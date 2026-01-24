const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const N = Number(input[0]);
const S = input[2];

let answer = 0;
let count = 0;

for (let i = 1; i < S.length - 1; i++) {
  if (S[i - 1] === 'I' && S[i] === 'O' && S[i + 1] === 'I') {
    count++;
    if (count >= N) answer++;
    i++;
  } else {
    count = 0;
  }
}

console.log(answer);
