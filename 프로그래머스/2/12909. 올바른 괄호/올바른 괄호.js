function solution(s){
    const stack = [];
    
    for(const a of s.split('')) {
        if(a==='(') stack.push(a)
        if(a===')' && stack.length === 0) return false
        if(a===')') stack.pop()
    }
    
    return stack.length === 0
}