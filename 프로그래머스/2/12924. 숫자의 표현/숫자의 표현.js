function solution(n) {
    let answer = 1
    if(n%2===1) {
        for(let i=3;i<=n;i+=2) {
            if(n%i===0) answer +=1
        }
    }
    if(n%2===0) {
        for(let i=2;i<=n;i+=2) {
            const a = i
            const b = i*(i-1)/2
            if((n-b)%a === 0) answer += 1
        }
    }
    
    return answer
}