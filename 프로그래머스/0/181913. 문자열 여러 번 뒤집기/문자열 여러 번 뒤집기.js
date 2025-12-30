function solution(my_string, queries) {
    let answer = my_string;
    for(const query of queries) {
        const [a,b] = query;
        const arr = answer.split('');
        const temp = arr.slice(a, b+1).reverse();
        const ans = arr.slice(0,a).join('') + temp.join('') + arr.slice(b+1, arr.length).join('')
        answer = ans
    }
    return answer

}