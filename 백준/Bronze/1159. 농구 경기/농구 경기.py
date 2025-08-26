n = int(input())
names = [input().strip() for _ in range(n)]

ans = {}
for name in names:
    first = name[0]
    ans[first] = ans.get(first, 0) + 1

result = [ch for ch, cnt in ans.items() if cnt >= 5]

if result:
    print(''.join(sorted(result)))
else:
    print("PREDAJA")
