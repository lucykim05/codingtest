const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((x) => x.split(' ').map(Number));

const [N, M, x, y, K] = input[0];

const map = [];
for (let i = 1; i <= N; i++) {
  map.push(input[i]);
}

const commands = input[input.length - 1];

let curX = x;
let curY = y;
let dice = Array(6).fill(0);

const arrX = [0, 0, 0, -1, 1];
const arrY = [0, 1, -1, 0, 0];

commands.forEach((x) => {
  const nowX = curX + arrX[x];
  const nowY = curY + arrY[x];
  if (nowX < 0 || nowX >= N || nowY < 0 || nowY >= M) return;

  curX = nowX;
  curY = nowY;

  dice = changeDice(dice, x);

  if (map[curX][curY] === 0) {
    map[curX][curY] = dice[5];
  } else {
    dice[5] = map[curX][curY];
    map[curX][curY] = 0;
  }

  console.log(dice[0]);
});

function changeDice(dice, command) {
  const [a, b, c, d, e, f] = dice;

  if (command === 1) return [d, b, a, f, e, c];
  if (command === 2) return [c, b, f, a, e, d];
  if (command === 3) return [e, a, c, d, f, b];
  if (command === 4) return [b, f, c, d, a, e];
}
