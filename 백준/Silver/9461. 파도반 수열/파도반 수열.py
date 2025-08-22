import sys
input = sys.stdin.readline

T = int(input())
arr = [0, 1, 1, 1, 2, 2]

for _ in range(T):
    N = int(input())
    while len(arr) <= N:
        arr.append(arr[-1] + arr[-5])
    print(arr[N])
