function solution(arr)
{
    const answer = [arr[0]];
    let prev = arr[0]
    arr.forEach(x=>{
        if(prev ===x) return;
        answer.push(x)
        prev = x
    })
    return answer
}