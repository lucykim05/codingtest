function solution(s, n) {
    return s.split('').map(x => {
        if(x === ' ') return ' ';
        
        const isUpper = x === x.toUpperCase();
        const base = isUpper ? 65 : 97;
        
        return String.fromCharCode((x.charCodeAt() - base + n) % 26 + base);
    }).join('');
}