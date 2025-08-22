import java.util.*;

class Solution {
    public List<Integer> solution(int n) {
        Set<Integer> set = new LinkedHashSet<>();
        for (int i = 2; i * i <= n; i++) {
            while (n % i == 0) {
                set.add(i);
                n /= i;
            }
        }
        if (n > 1) {
            set.add(n);
        }

        return new ArrayList<>(set);
    }

}
