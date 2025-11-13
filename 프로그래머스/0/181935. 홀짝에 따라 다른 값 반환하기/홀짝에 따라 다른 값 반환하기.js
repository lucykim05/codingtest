function solution(n) {
    if(n%2===1) {
        return Math.ceil(n/2)**2
    } else {
        let ans = 0
        for(let i=1;i<=(n/2);i++) {
            ans += 4*(i**2)
        }
        return ans
    }
}