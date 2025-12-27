function solution(n) {
    const a = Math.sqrt(n);
    if(Math.floor(a)===a) {
        return (a+1)*(a+1)
    } else {
        return -1
    }
}