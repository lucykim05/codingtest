def solution(diffs, times, limit):
    def can_clear(level):
        total = times[0]
        for i in range(1, len(diffs)):
            if diffs[i] <= level:
                total += times[i]
            else:
                mistakes = diffs[i] - level
                total += mistakes * (times[i] + times[i-1]) + times[i]
            if total > limit:
                return False
        return total <= limit

    left, right = 1, max(diffs) 
    answer = right

    while left <= right:
        mid = (left + right) // 2
        if can_clear(mid):
            answer = mid
            right = mid - 1
        else:
            left = mid + 1

    return answer
