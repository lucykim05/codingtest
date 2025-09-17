const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const arr = input.split('');

let starIndex = -1;
let sum = 0;

for (let i = 0; i < 13; i++) {
  if (arr[i] === '*') {
    starIndex = i;
    continue;
  }
  const num = Number(arr[i]);
  if (i % 2 === 0) {
    sum += num;    
  } else {
    sum += num * 3;  
  }
}

for (let d = 0; d <= 9; d++) {
  let check = sum;
  if (starIndex % 2 === 0) {
    check += d; 
  } else {
    check += d * 3;
  }
  if (check % 10 === 0) {
    console.log(d);
    break;
  }
}
