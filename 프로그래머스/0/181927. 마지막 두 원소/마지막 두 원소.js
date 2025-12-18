function solution(num_list) {
    const len = num_list.length;
    const last = num_list[len-1];
    const num = num_list[len-2];
    let l = 2*last
    if(last>num) {
        l = last-num
    } 
    num_list.push(l)
    return num_list
}