function solution(numer1, denom1, numer2, denom2) {
  const num = numer1 * denom2 + numer2 * denom1;
  const den = denom1 * denom2;                 

  const gcd = (a, b) => {
    a = Math.abs(a); b = Math.abs(b);
    while (b !== 0) [a, b] = [b, a % b];
    return a;
  };

  const g = gcd(num, den);
  return [num / g, den / g];
}
