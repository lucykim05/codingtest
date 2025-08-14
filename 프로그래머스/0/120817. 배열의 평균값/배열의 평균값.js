function solution(numbers) {
    const sum = numbers.reduce((a,b)=>a+b)
    return sum/numbers.length
}