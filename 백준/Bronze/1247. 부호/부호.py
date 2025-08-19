import sys
input = sys.stdin.readline

for i in range(3):
  N=int(input())
  answer = 0
  for j in range(N):
    answer += int(input())
  if answer>0:
    print('+')
  elif answer==0:
    print(0)
  else:
    print('-')
