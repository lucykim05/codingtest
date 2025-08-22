function solution(n) {
    let answer = 0

    function find(x) {
        let arr = [];
        for(let i=1;i<=x;i++) {
            if(x%i===0) {
                arr.push(i)
            }
        }
        if(arr.length>=3) {
            answer+=1
        }
    }
        for(let i=1;i<=n;i++) {
        find(i)
    }
    return answer
}