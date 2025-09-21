function solution(keyinput, board) {
    let answer = [0, 0];
    const xLimit = Math.floor(board[0] / 2);
    const yLimit = Math.floor(board[1] / 2);

    for (let i = 0; i < keyinput.length; i++) {
        if (keyinput[i] === 'left') {
            answer[0] = Math.max(-xLimit, answer[0] - 1);
        } else if (keyinput[i] === 'right') {
            answer[0] = Math.min(xLimit, answer[0] + 1);
        } else if (keyinput[i] === 'up') {
            answer[1] = Math.min(yLimit, answer[1] + 1);
        } else if (keyinput[i] === 'down') {
            answer[1] = Math.max(-yLimit, answer[1] - 1);
        }
    }
    return answer;
}
