T = int(input())
TOTAL = sum(ord(c) for c in "ABCDEFGHIJKLMNOPQRSTUVWXYZ")

for _ in range(T):
    s = input().strip()
    used = sum(ord(c) for c in set(s))
    print(TOTAL - used)
