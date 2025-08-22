import sys
input = sys.stdin.readline

N = int(input())

T, P = [0]*(N+1), [0]*(N+1)

for i in range(1, N+1):
    t, p = map(int, input().split())
    T[i], P[i] = t, p

dp = [0] * (N+2)

for i in range(N, 0, -1):  
    if i + T[i] <= N + 1:  
        dp[i] = max(dp[i+1], P[i] + dp[i+T[i]]) # 오늘 상담함 vs 오늘 상담 안함 
    else:
        dp[i] = dp[i+1]

print(dp[1])
