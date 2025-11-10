function solution(score) {

  const averages = score.map(([eng, math]) => (eng + math) / 2);

  const sorted = [...averages].sort((a, b) => b - a);

  return averages.map(x => sorted.indexOf(x) + 1);
}
