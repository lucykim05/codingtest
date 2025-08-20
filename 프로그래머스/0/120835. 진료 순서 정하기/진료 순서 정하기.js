function solution(emergency) {
    const origin = [...emergency]
    const arr = emergency.sort((a,b)=>b-a)
    const answer = [];
    for(let i=0;i<arr.length;i++) {
        answer.push(arr.indexOf(origin[i])+1)
    }
    return answer
}