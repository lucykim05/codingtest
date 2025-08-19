function solution(my_string) {
    return my_string.split('').filter(x=>!isNaN(Number(x))).map(Number).sort((a,b)=>a-b)
}