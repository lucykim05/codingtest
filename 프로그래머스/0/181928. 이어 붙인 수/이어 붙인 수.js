function solution(num_list) {
    let odd = '';
    let even = '';
    num_list.map(x=>{if(Number(x)%2===0) {
        even += String(x)
    } else {
        odd += String(x)
    }
    })
    return Number(odd) + Number(even)
}