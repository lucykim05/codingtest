function solution(rsp){
    const x = {
        '2':'0',
        '0':'5',
        '5':'2',
    }
    return rsp.split('').map(String).map(a=>x[a]).join('')
}