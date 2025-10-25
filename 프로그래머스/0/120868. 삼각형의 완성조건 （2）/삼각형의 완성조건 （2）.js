function solution(sides) {
    const a = Math.max(sides[0],sides[1])-Math.min(sides[0],sides[1])
    return sides[0]+sides[1]-1-Math.max(sides[0],sides[1]) + Math.max(sides[0],sides[1])-a
}