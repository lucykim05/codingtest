function solution(n) {
    const arr = Array.from({length: n-1}, (_, i)=> 1+i)
    return Math.min(...arr.filter(x=>n%x===1))
}