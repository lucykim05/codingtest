function solution(arr, queries) {
    queries.map(x=>{
        const [a,b] = x
        let temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
    })
    return arr
    
}