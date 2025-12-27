function solution(x) {
    const sum = String(x).split('').map(Number).reduce((a,b)=>a+b);
    return x%sum === 0
}