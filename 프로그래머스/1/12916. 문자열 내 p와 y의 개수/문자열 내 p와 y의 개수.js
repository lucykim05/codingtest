function solution(s){
    const a = s.toUpperCase().split('').filter(x=>x==='P').length
    const b = s.toUpperCase().split('').filter(x=>x==='Y').length
    return a === b
}