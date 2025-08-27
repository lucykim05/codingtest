import sys
input = sys.stdin.readline

N = int(input().strip())
positions = list(map(int, input().split()))

if N > 1:
    throws = list(map(int, input().split()))
else:
    throws = []

max_reach = positions[0] + (throws[0] if N > 1 else 0)

for i in range(1, N - 1):
    if positions[i] <= max_reach:
        max_reach = max(max_reach, positions[i] + throws[i])
    else:
        break

if positions[-1] <= max_reach:
    print("권병장님, 중대장님이 찾으십니다")
else:
    print("엄마 나 전역 늦어질 것 같아")
