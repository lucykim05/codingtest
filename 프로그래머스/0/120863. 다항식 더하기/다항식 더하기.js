function solution(polynomial) {
    const arr = polynomial.split(' + ');

    let answer = [0, 0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes('x')) {
            const coef = arr[i].replace('x', '');
            answer[0] += coef === '' ? 1 : Number(coef);
        } else {
            answer[1] += Number(arr[i]);
        }
    }

    if (answer[0] !== 0 && answer[1] !== 0) {
        return `${answer[0] === 1 ? '' : answer[0]}x + ${answer[1]}`;
    } else if (answer[0] !== 0) {
        return `${answer[0] === 1 ? '' : answer[0]}x`;
    } else {
        return `${answer[1]}`;
    }
}
