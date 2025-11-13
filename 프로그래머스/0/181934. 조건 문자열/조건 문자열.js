function solution(ineq, eq, n, m) {
    if(ineq==='>' && eq === '=') return Number(n>=m)
    if(ineq==='<' && eq === '=') return Number(n<=m)
    if(ineq==='>') return Number(n>m)
    if(ineq === '<') return Number(n<m)
}