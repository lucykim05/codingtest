function solution(spell, dic) {
    const a = spell.sort().join('')
    
    for(let word of dic) {
        const sortedWord = [...word].sort().join('')
        if(sortedWord === a) {
            return 1
        }
    }
    return 2
}