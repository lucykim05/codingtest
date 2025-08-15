function solution(n) {
    let arr = String(n).split('').map(Number)
    return arr.reduce((a,b)=>a+b)
}