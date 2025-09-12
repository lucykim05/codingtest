def solution(s: str) -> int:
    def is_valid(brackets: str) -> bool:
        stack = []
        pair = {')': '(', ']': '[', '}': '{'}
        for ch in brackets:
            if ch in "([{":
                stack.append(ch)
            else:
                if not stack or stack[-1] != pair.get(ch, ''):
                    return False
                stack.pop()
        return not stack

    n = len(s)
    count = 0
    for i in range(n):
        rotated = s[i:] + s[:i]
        if is_valid(rotated):
            count += 1
    return count
