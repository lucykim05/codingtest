function solution(s) {
    const arr = s.split('')
    const upper = arr.filter(x=>x===x.toUpperCase())
    const lower = arr.filter(x=>x===x.toLowerCase())
    return lower.sort((a,b)=>b.charCodeAt()-a.charCodeAt()).join('') + upper.sort((a,b)=>b.charCodeAt()-a.charCodeAt()).join('')
}