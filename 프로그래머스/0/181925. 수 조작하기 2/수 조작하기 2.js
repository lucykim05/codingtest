function solution(numLog) {
    const move = {
        '1' : 'w',
        '-1' : 's',
        '10' : 'd',
        '-10' : 'a'
    }
    
    const arr = [];
    for(let i=0;i<numLog.length-1;i++) {
        arr.push(numLog[i+1]-numLog[i])
    }
    return arr.map(x=>move[String(x)]).join('')
    
}