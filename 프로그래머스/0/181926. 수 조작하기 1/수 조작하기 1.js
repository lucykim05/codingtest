function solution(n, control) {
    const add = {
        'w': 1,
        's': -1,
        'd': 10,
        'a': -10
    }
    let ans = n;
    control.split('').map(x=>{
        ans += add[x]
    })
    return ans
}