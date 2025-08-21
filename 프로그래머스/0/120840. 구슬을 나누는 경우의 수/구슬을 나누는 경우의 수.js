function solution(balls, share) {
  if (share > balls) return 0;

  let n = balls;
  let r = Math.min(share, n - share); // 대칭성 이용
  let res = 1;

  for (let i = 1; i <= r; i++) {
    res = (res * (n - r + i)) / i; // (nCr) = (nC(i-1)) * (n - i + 1) / i
  }

  return Math.round(res); // 이 문제 범위에선 정수로 정확히 떨어짐
}
