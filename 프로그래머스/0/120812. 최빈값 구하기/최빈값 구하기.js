function solution(array) {
    const freq = {};

    array.forEach((num) => {
        freq[num] = (freq[num] || 0) + 1;
    });

    const maxCount = Math.max(...Object.values(freq));

    const modes = Object.keys(freq).filter((key) => freq[key] === maxCount);

    if (modes.length > 1) return -1;

    return Number(modes[0]);
}
