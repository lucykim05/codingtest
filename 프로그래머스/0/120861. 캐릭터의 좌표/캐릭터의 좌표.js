function solution(keyinput, board) {
    let [x, y] = [0, 0];
    const [maxX, maxY] = [Math.floor(board[0] / 2), Math.floor(board[1] / 2)];
    
    const moves = {
        'up': [0, 1],
        'down': [0, -1],
        'left': [-1, 0],
        'right': [1, 0]
    };
    
    for (const key of keyinput) {
        const [dx, dy] = moves[key];
        x = Math.max(-maxX, Math.min(maxX, x + dx));
        y = Math.max(-maxY, Math.min(maxY, y + dy));
    }
    
    return [x, y];
}