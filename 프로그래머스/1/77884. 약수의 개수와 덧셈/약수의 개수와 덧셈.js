function solution(left, right) {
    let answer = 0
    for(let i=left;i<=right;i++) {
        if(Math.floor(Math.sqrt(i)) === Math.sqrt(i)) answer -= i
        if(Math.floor(Math.sqrt(i))!== Math.sqrt(i))answer += i
        
    }
    return answer
}