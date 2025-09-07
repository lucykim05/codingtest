function solution(a, b, c, d) {
  const numerator = a * d + c * b;
  const denominator = b * d;  
  function gcd(x, y) {
    return y === 0 ? x : gcd(y, x % y);
  }

  const g = gcd(numerator, denominator);

  return [numerator / g, denominator / g];
}