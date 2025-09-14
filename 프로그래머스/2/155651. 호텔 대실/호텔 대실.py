import heapq

def to_minutes(time_str):
    h, m = map(int, time_str.split(":"))
    return h * 60 + m

def solution(book_time):
    times = []
    for start, end in book_time:
        s = to_minutes(start)
        e = to_minutes(end) + 10 
        times.append((s, e))

    times.sort()

    rooms = []
    for s, e in times:
        if rooms and rooms[0] <= s:

            heapq.heappop(rooms)
        heapq.heappush(rooms, e)

    return len(rooms)
