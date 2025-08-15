import sys

N, a, b = map(int, sys.stdin.read().split())
rounds = 0

while a != b:
    a = (a + 1) // 2
    b = (b + 1) // 2
    rounds += 1

print(rounds)