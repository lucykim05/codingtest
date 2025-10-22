N, K = map(int, input().split())

arr = [i for i in range (1, N+1)]
result = []
index = 0

while arr:
  index = (index+K-1)%len(arr)
  result.append(arr.pop(index))

print("<"+", ".join(map(str, result))+">")