function solution(array) {
    return array
        .map(x => x.toString().split('').filter(i => i === '7').length) 
        .reduce((a, b) => a + b);
}
