function solution(spell, dic) {
    for (let i = 0; i < dic.length; i++) {
        let word = dic[i];
        let isMatch = true;
        for (let j = 0; j < spell.length; j++) {
            if (!word.includes(spell[j])) {
                isMatch = false;
                break;
            }
        }
        if (isMatch && word.length === spell.length) {
            return 1;
        }
    }
    return 2;
}
