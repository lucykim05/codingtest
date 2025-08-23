function solution(s) {
    const arr = s.split(' ')
    let answer = 0
    for(let i=0;i<arr.length;i++) {
        if(arr[i]!=='Z') answer +=Number(arr[i])
        else answer -= arr[i-1]
    }
    return answer
}