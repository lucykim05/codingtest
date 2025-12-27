function solution(phone_number) {
    const arr = phone_number.split('');
    const len = arr.length;
    for(let i=0;i<len-4;i++) {
        arr[i]='*'
    }
    return arr.join('')
}
