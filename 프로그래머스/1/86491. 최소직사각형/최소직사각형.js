function solution(sizes) {
    sizes.map(x=>x.sort((a,b)=>a-b))
    const a = Math.max(...sizes.map(x=>x[0]))
    const b = Math.max(...sizes.map(x=>x[1]))
    return a*b
}