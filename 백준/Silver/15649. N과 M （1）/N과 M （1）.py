import sys
input = sys.stdin.readline

N, M = map(int, input().split())
visited = [False] * (N+1)
arr = []

def dfs(depth):
    if depth == M:
        print(*arr)
        return
    for i in range(1, N+1):
        if not visited[i]:
            visited[i] = True
            arr.append(i)
            dfs(depth+1)
            arr.pop()
            visited[i] = False

dfs(0)
