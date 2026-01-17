function solution(s) {
    const answer = []
    const lastIdx = new Map()
    
    for(let i=0;i<s.length;i++) {
        const letter = s[i]
        
        if(lastIdx.has(letter)) {
            answer.push(i-lastIdx.get(letter))
        } else {
            answer.push(-1)
        }
    lastIdx.set(letter, i)
    }
    
    return answer
    
}