function solution(n) {
    let number = 0
    let first = 0
    let next = 1;
    for(let i=2;i<=n;i++) {
        number = (first+next) % 1234567
        first = next
        next = number
    }
    return number
}