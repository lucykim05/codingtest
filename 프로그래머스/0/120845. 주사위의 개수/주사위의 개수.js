function solution(box, n) {
    let ans = 1;
    for(let i=0;i<box.length;i++) {
        ans*=Math.floor(box[i]/n)
    }
    return ans
}