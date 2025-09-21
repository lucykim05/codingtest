function solution(quiz) {
    let result = [];
    for (let i = 0; i < quiz.length; i++) {
        const [a, op, b, , c] = quiz[i].split(" ");
        const left = op === "+" ? Number(a) + Number(b) : Number(a) - Number(b);
        if (left === Number(c)) {
            result.push("O");
        } else {
            result.push("X");
        }
    }
    return result;
}
