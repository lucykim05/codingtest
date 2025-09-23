def solution(dots):
    def is_parallel(a, b, c, d):
        return (b[1] - a[1]) * (d[0] - c[0]) == (d[1] - c[1]) * (b[0] - a[0])

    pairs = [
        (0, 1, 2, 3),
        (0, 2, 1, 3),
        (0, 3, 1, 2)
    ]

    for a, b, c, d in pairs:
        if is_parallel(dots[a], dots[b], dots[c], dots[d]):
            return 1
    return 0