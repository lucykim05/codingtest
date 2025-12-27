function solution(num) {
    let t = 0;
    while(num!==1) {
        if(num%2===0) {
            num = num/2
            t += 1
        } else {
            num = num*3 + 1
            t +=1
        }
        if(t>=500)  {
            return -1
            continue;
        }
    }
    return t
}