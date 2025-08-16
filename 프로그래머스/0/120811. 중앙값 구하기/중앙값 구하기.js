function solution(array) {
    const x = Math.floor(array.length/2)
    return array.sort((a,b)=>a-b)[x];
}