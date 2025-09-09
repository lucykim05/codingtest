def solution(friends, gifts):
    n = len(friends)
    idx = {name: i for i, name in enumerate(friends)}


    give_matrix = [[0] * n for _ in range(n)]
    given = [0] * n
    received = [0] * n


    for g in gifts:
        a, b = g.split()
        i, j = idx[a], idx[b]
        give_matrix[i][j] += 1
        given[i] += 1
        received[j] += 1


    gift_index = [given[i] - received[i] for i in range(n)]


    next_receive = [0] * n

    for i in range(n):
        for j in range(i + 1, n):
            if give_matrix[i][j] > give_matrix[j][i]:
                next_receive[i] += 1
            elif give_matrix[i][j] < give_matrix[j][i]:
                next_receive[j] += 1
            else: 
                if gift_index[i] > gift_index[j]:
                    next_receive[i] += 1
                elif gift_index[i] < gift_index[j]:
                    next_receive[j] += 1

    return max(next_receive)
