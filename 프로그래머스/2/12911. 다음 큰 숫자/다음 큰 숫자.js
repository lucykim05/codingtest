function solution(n) {
    const len = n.toString(2).split('').filter(x=>x==='1').length
    let x = n+1
    while(x.toString(2).split('').filter(x=>x==='1').length !== len) x++
    return x
}