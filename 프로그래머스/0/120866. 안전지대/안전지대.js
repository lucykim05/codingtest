function solution(board) {
    const n = board.length;
    const zone = Array.from(Array(n),()=>Array(n).fill(0));
    
    const dx = [-1,-1,-1,0,1,1,1,0];
    const dy = [-1,0,1,1,1,0,-1,-1,-1];
    
    for(let i=0;i<n;i++) {
        for(let j=0;j<n;j++) {
            if(board[i][j]===1) {
                zone[i][j]=1;
                for(let d=0;d<8;d++) {
                    const nx = dx[d]+i
                    const ny = dy[d]+j
                    
                    if(nx>=0&&nx<n&&ny>=0&&ny<n) {
                        zone[nx][ny]=1
                    }
                }
            }
        }
    }
    
    let count = 0;
    for(let i=0;i<n;i++) {
        for(let j=0;j<n;j++) {
            if(zone[i][j]===0) {
                count++
            }
        }
    }
    return count
}