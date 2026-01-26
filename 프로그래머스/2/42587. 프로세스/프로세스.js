function solution(priorities, location) {
    const count = Array(10).fill(0)
    for(const p of priorities) count[p]++
    
    let currentMax = 9;
    while(count[currentMax]===0) currentMax --
    
    const queue = priorities.map((priority,idx)=>({priority,idx}))
    
    let deleted = 0;
    
    while(queue.length>0) {
        const curr = queue.shift()
        if(curr.priority === currentMax) {
            deleted ++
            count[curr.priority] --
            //현재 중요도에 해당되는거 제거
            
            if(curr.idx === location) return deleted
            //location인 애가 나오면 순서(제거된 개수) return
            
            if(count[currentMax]===0) {
                while(currentMax>0 && count[currentMax]===0) currentMax--
                //다음 max 중요도 찾기
            }
        } else {
            queue.push(curr)
            //우선순위 낮으면 뒤로 넣기
        } 
    }
}