function solution(arr) {
    return arr.filter((x, i) => i === 0 || x !== arr[i-1]);
}