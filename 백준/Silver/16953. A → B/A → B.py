A, B = map(int, input().split())

cnt = 1
while B > A:
    if B % 2 == 0:
        B //= 2
    elif B % 10 == 1:
        B //= 10
    else:    
        break
    cnt += 1

print(cnt if B == A else -1)
