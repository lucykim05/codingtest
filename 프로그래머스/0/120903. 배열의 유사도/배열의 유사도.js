function solution(s1, s2) {
    let answer = 0
    for(let i=0;i<s1.length;i++) {
        answer += s2.filter(x=>x===s1[i]).length
    }
    return answer
}