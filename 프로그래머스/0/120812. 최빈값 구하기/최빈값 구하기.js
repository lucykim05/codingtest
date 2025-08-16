function solution(array) {
    const arr = [...new Set(array)]
    let answer = Array(arr.length).fill(0)
    for(let i=0;i<arr.length;i++) {
        answer[i]=array.filter(x=>x===arr[i]).length
    }
    
    const max = Math.max(...answer)
    const a = answer.filter(x=>x===max).length
    return a === 1 ? arr[answer.indexOf(max)] : -1
}