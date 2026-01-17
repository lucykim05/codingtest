function solution(s)
{
    const stack = []
    s.split('').forEach(x=>{
        if(stack.length === 0) {
            stack.push(x)
            return
        }
        const a = stack.pop()
        if(a===x) return
        stack.push(a,x)
    })
    return Number(stack.length === 0)
}