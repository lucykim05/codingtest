const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

function solution(str) {
  const stack = [];
  let result = 0;
  let temp = 1;

  for (let i = 0; i < str.length; i++) {
    const letter = str[i];

    if (letter === '(') {
      stack.push(letter);
      temp *= 2;
    }
    if (letter === '[') {
      stack.push(letter);
      temp *= 3;
    }
    if (letter === ')') {
      if (stack.length === 0 || stack[stack.length - 1] !== '(') return 0;

      if (str[i - 1] === '(') result += temp;

      stack.pop();
      temp /= 2;
    }
    if (letter === ']') {
      if (stack.length === 0 || stack[stack.length - 1] !== '[') return 0;

      if (str[i - 1] === '[') result += temp;

      stack.pop();
      temp /= 3;
    }
  }

  return stack.length === 0 ? result : 0;
}

console.log(solution(input));
