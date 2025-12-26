function solution(s) {
    return s.split(' ')  // 공백 기준으로 단어를 나누고
        .map(word =>         // 각 단어에 대해 변환을 적용
            word.split('')    // 단어를 글자 배열로 나누고
                .map((char, index) => 
                    index % 2 === 0 
                        ? char.toUpperCase()  // 짝수 인덱스는 대문자
                        : char.toLowerCase()  // 홀수 인덱스는 소문자
                )
                .join('')           // 변환된 글자들을 다시 하나의 단어로 합침
        )
        .join(' ');            // 모든 단어를 공백으로 합쳐서 반환
}
