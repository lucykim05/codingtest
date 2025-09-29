def solution(my_string, indices):
    indices = set(indices) 
    return ''.join(ch for i, ch in enumerate(my_string) if i not in indices)
