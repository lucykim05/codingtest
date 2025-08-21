import sys
input = sys.stdin.readline

N = int(input())
stack = []

def push(x): stack.append(x)
def pop(): print(stack.pop() if stack else -1)
def size(): print(len(stack))
def empty(): print(0 if stack else 1)
def top(): print(stack[-1] if stack else -1)

commands = {
    "pop": pop,
    "size": size,
    "empty": empty,
    "top": top,
}

for _ in range(N):
    cmd = input().split()
    if cmd[0] == "push":
        push(int(cmd[1]))
    else:
        commands[cmd[0]]()