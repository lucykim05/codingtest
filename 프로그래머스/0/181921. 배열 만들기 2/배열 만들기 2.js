function solution(l, r) {
    const result = [];

    for(let i = 1; ; i++) {
        const num = parseInt(i.toString(2)) * 5;
        
        if(num > r) break;
        if(num >= l) result.push(num);
    }
    
    return result.length === 0 ? [-1] : result;
}