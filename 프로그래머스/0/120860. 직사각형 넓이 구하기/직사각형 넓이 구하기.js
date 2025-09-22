function solution(dots) {
    let x_dot = [];
    let y_dot = [];

    for (let i = 0; i < dots.length; i++) {
        if (!x_dot.includes(dots[i][0])) {
            x_dot.push(dots[i][0]);
        }
        if (!y_dot.includes(dots[i][1])) {
            y_dot.push(dots[i][1]);
        }
    }

    const x_arr = x_dot.sort((a, b) => a - b);
    const y_arr = y_dot.sort((a, b) => a - b);

    return (x_arr[1] - x_arr[0]) * (y_arr[1] - y_arr[0]);
}
