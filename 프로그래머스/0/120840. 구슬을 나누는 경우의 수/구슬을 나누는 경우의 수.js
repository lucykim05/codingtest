function solution(balls, share) {
    function fact(n) {
        let ans = 1n; // BigInt 사용
        for (let i = 1n; i <= n; i++) {
            ans *= i;
        }
        return ans;
    }

    balls = BigInt(balls);
    share = BigInt(share);

    if (balls === share) return 1;

    return fact(balls) / (fact(share) * fact(balls - share));
}
