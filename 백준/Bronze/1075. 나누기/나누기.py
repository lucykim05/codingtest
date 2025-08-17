import sys
input = sys.stdin.readline

N = int(input())
F = int(input())

X = (N//100) *100
answer = (F-(X%F))%F
print(f"{answer:02d}")