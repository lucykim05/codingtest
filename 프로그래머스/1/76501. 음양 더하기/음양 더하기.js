function solution(absolutes, signs) {
    const arr = signs.map(x=>{
        if(Number(x)===0) return -1
        return 1
    })
    let answer = 0;
    for(let i=0;i<absolutes.length;i++) {
        answer += arr[i]*absolutes[i]
    }
    return answer
}