import sys
input = sys.stdin.readline

t = int(input())
for _ in range(t):
    n = int(input())
    clothes = {}
    for _ in range(n):
        name, kind = input().split()
        clothes[kind] = clothes.get(kind, 0) + 1

    result = 1
    for cnt in clothes.values():
        result *= (cnt + 1)
    print(result - 1)
