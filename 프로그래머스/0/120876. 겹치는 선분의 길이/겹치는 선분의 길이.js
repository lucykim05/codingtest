function solution(lines) {
    const arr = new Set();
    for (const [start, end] of lines) {
        arr.add(start);
        arr.add(end);
    }
    const sorted = [...arr].sort((a, b) => a - b);
    
    let result = 0;
    

    for (let i = 0; i < sorted.length - 1; i++) {
        const left = sorted[i];
        const right = sorted[i + 1];
        const mid = (left + right) / 2;

        let count = 0;
        for (const [start, end] of lines) {
            if (start <= mid && mid < end) {
                count++;
            }
        }
        
        if (count >= 2) {
            result += right - left;
        }
    }
    
    return result;
}