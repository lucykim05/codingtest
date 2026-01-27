function solution(s){
    let count = 0;
    
    for(const a of s) {
        if(a==='(') count ++
        if(a!=='(') count --;
        if(count<0) return false //시작이 ')'
    }
    return count === 0
}