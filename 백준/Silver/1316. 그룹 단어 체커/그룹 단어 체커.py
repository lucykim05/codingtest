import sys
input = sys.stdin.readline

N = int(input())
answer = 0

for _ in range(N):
    words = input().strip()
    arr = set()
    prev = ''
    ans = True

    for word in words:
        if word != prev:
            if word in arr:
                ans = False
                break
            arr.add(word)
        prev = word

    if ans:
        answer += 1

print(answer)
