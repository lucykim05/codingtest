L = int(input())
S = sorted(map(int, input().split()))
n = int(input())

# n이 이미 집합 S에 있으면 0
if n in S:
    print(0)
else:
    # n보다 작은 수 중 최댓값
    low = 0
    for x in S:
        if x < n:
            low = x
        else:
            break

    # n보다 큰 수 중 최솟값
    high = max(S) + 1
    for x in S:
        if x > n:
            high = x
            break

    # (n-L) * (R-n) - 1
    result = (n - low) * (high - n) - 1
    print(result)