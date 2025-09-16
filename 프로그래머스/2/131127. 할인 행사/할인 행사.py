from collections import Counter

def solution(want, number, discount):
    need = {w: n for w, n in zip(want, number)}
    length = sum(number)
    
    count = 0
    for i in range(len(discount) - length + 1):
        window = discount[i:i+length]
        if Counter(window) == need:
            count += 1
    return count
