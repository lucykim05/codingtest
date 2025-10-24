function solution(my_string) {
    let stack = '';
    let ans = 0;
    
    for (let char of my_string) {
        if (char >= '0' && char <= '9') {
            stack += char;
        } else {
            if (stack) {
                ans += Number(stack);
                stack = '';
            }
        }
    }

    if (stack) {
        ans += Number(stack);
    }
    
    return ans;
}