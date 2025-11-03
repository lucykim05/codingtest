function solution(a, b) {
    const gcd = (x, y) => y === 0 ? x : gcd(y, x % y);

    const g = gcd(a, b);
    const d = b / g;
    

    let temp = d
    
    while (temp % 2 === 0) {
        temp /= 2;
    }
    
    while (temp % 5 === 0) {
        temp /= 5;
    }
    
    return temp === 1 ? 1 : 2;
}