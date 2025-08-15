function solution(numbers) {
    const x = numbers.sort((a,b)=>a-b)
    const n = numbers.length
    return Math.max((x[n-1]*x[n-2]),(x[0]*x[1]))
}