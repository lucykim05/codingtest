function solution(my_string, index_list) {
    let ans = ''
    index_list.map(x=>{
        ans += my_string[x]
    })
    return ans
}