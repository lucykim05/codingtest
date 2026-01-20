function solution(nums) {
    const unique = [...new Set(nums)]
    return Math.min(nums.length/2, unique.length)
}