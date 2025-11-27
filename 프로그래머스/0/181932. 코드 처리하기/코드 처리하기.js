function solution(code) {
    let mode = 0;
    let ret = '';
    for(let i=0;i<code.length;i++) {
        if(code[i]==='1') {
            mode = mode === 0 ? 1 :0;
            continue
        }
        if(i%2===0 && mode === 0) ret += code[i];
        if(i%2===1 && mode === 1) ret += code[i]
        
    }
    const ans = ret.length === 0 ? 'EMPTY' : ret;
    return ans
}