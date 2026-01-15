function solution(n, m) {
    for(let i=Math.min(n,m);i>=1;i--) {
        if(n%i===0 && m%i===0) return [i, n*m/i]
    }
}