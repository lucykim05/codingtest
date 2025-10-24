function solution(polynomial) {
    const arr = polynomial.split(' + ')
    let a = 0;
    let b = 0;
    for(let letter of arr) {
        if(letter.includes('x')) {
            const re = letter.replace('x', '')
            a += re === ''? 1 : Number(re)
        } else {
            b += Number(letter)
        }
    }
    
    const result = [];
    
    if (a !== 0) {
        result.push(a === 1 ? 'x' : `${a}x`);
    }
    
    if (b !== 0) {
        result.push(b);
    }
    
    return result.join(' + ');
}