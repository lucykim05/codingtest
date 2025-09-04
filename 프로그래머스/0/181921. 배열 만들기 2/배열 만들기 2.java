import java.util.*;

class Solution {
    public int[] solution(int l, int r) {
        List<Integer> result = new ArrayList<>();
        Queue<Integer> q = new LinkedList<>();
        

        q.add(5);
        
        while (!q.isEmpty()) {
            int num = q.poll();
            
            if (num > r) continue;
            
            if (num >= l) {
                result.add(num);
            }
            

            if (num * 10 <= r) {
                q.add(num * 10);
                q.add(num * 10 + 5);
            }
        }
        
        if (result.isEmpty()) {
            return new int[]{-1};
        }
        

        Collections.sort(result);

        return result.stream().mapToInt(i -> i).toArray();
    }
}
