function solution(age) {
    return String(age).split('').map(x=>String.fromCharCode(Number(x)+65).toLowerCase()).join('')
}