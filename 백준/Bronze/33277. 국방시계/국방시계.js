const fs = require('fs');

// const input = fs
//   .readFileSync('input.txt', 'utf8')
//   .trim()
//   .split(' ')
//   .map(Number);
// const [a, b] = input;

const [a, b] = fs.readFileSync(0, 'utf8').trim().split(' ').map(Number);

if (a === b) {
  console.log('24:00');
  process.exit(0);
}

const total = Math.floor((b * 1440) / a);
const hour = Math.floor(total / 60);
const min = total % 60;

console.log(`${String(hour).padStart(2, '0')}:${String(min).padStart(2, '0')}`);
