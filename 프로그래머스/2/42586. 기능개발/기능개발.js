function solution(progresses, speeds) {
    const answer = [];
    
    const map = progresses.map((a,b)=>{
        const remain=100-a;
        return Math.ceil(remain/speeds[b])
    })
    
    let count = 1;
    let max = map[0]
    
    for(let i=1;i<map.length;i++) {
        if(map[i]<=max) count ++
        if(map[i]>max) {
            answer.push(count)
            count = 1;
            max = map[i]
        }
    }
    answer.push(count)
    return answer
}