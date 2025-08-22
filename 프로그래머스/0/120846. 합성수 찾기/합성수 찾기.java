public class Solution {
    public int solution(int n) {
        int answer = 0;

        for (int i = 1; i <= n; i++) {
            if (find(i)) {
                answer++;
            }
        }
        return answer;
    }

    private boolean find(int x) {
        int count = 0;
        for (int i = 1; i <= x; i++) {
            if (x % i == 0) {
                count++;
            }
            if (count >= 3) {
                return true;
            }
        }
        return false;
    }


}
