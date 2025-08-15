function solution(my_string, n) {
    var answer = '';
    return my_string.split('').map(x=>x.repeat(n)).join('')

}