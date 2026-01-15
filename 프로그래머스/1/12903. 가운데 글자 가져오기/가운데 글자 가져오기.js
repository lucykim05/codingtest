function solution(s) {
    if(s.length%2===0) return s.slice(s.length/2-1,s.length/2+1)
    return s.slice(Math.floor(s.length/2),Math.floor(s.length/2) +1)
}