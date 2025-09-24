function solution(num_list) {
    let even = 0;
    let odd = 0;
    
    for(let i=0;i<Math.ceil(num_list.length/2);i++) {
        odd += num_list[2*i]
    }
    
    for(let i=0;i<Math.floor(num_list.length/2);i++) {
        even+= num_list[2*i+1]
    }
    
    return Math.max(odd, even)
}