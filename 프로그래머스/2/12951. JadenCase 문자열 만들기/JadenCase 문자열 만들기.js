function solution(s) {
    let answer = []
    s.split(' ').forEach(x=>{
        let arr = x.split('')
        arr = arr.map((letter, i)=>{
            if(i===0) return letter.toUpperCase()
            return letter.toLowerCase()
    })
        answer.push(arr.join(''))})
    return answer.join(' ')
}