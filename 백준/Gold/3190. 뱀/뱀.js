const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((x) => x.trim());

const N = Number(input.shift());
const K = Number(input.shift());
const appleSet = new Set(
  input.splice(0, K).map((x) => {
    const [r, c] = x.split(' ').map(Number);
    return `${r},${c}`;
  }),
);
const M = Number(input.shift());
const moveInfo = new Map(
  input.map((x) => {
    const [key, value] = x.split(' ');
    return [Number(key) + 1, value];
  }),
);

const snake = [[1, 1]];
let nowDirection = 'R';
let time = 0;

while (true) {
  time++;

  const letter = moveInfo.get(time);
  if (letter) {
    nowDirection = turn(nowDirection, letter);
  }

  const head = snake[snake.length - 1];
  const newHead = moveSnake(head, nowDirection);

  if (
    newHead[0] < 1 ||
    newHead[0] > N ||
    newHead[1] < 1 ||
    newHead[1] > N ||
    snake.some(([r, c]) => r === newHead[0] && c === newHead[1])
  ) {
    console.log(time);
    break;
  }

  snake.push(newHead);

  if (!appleSet.has(`${newHead[0]},${newHead[1]}`)) {
    snake.shift();
  } else {
    appleSet.delete(`${newHead[0]},${newHead[1]}`);
  }
}

function moveSnake([row, col], direction) {
  if (direction === 'R') return [row, col + 1];
  if (direction === 'D') return [row + 1, col];
  if (direction === 'L') return [row, col - 1];
  if (direction === 'U') return [row - 1, col];
}

function turn(direction, letter) {
  const directions = ['U', 'R', 'D', 'L'];
  const idx = directions.indexOf(direction);

  if (letter === 'D') return directions[(idx + 1) % 4];
  return directions[(idx + 3) % 4];
}
