function solution(s) {
    const arr = s.split('');
    const unique = [...new Set(arr)];
    let result = '';
    
    for (const a of unique) {
        if (arr.filter(ch => ch === a).length === 1) {
            result += a;
        }
    }
    return result.split('').sort().join('');
}
