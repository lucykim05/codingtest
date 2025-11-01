function solution(dots) {
  const [a, b, c, d] = dots;

  const slope1 = (b[1] - a[1]) / (b[0] - a[0]);
  const slope2 = (d[1] - c[1]) / (d[0] - c[0]);
  if (slope1 === slope2) return 1;

  const slope3 = (c[1] - a[1]) / (c[0] - a[0]);
  const slope4 = (d[1] - b[1]) / (d[0] - b[0]);
  if (slope3 === slope4) return 1;

  const slope5 = (d[1] - a[1]) / (d[0] - a[0]);
  const slope6 = (c[1] - b[1]) / (c[0] - b[0]);
  if (slope5 === slope6) return 1;

  return 0;
}
