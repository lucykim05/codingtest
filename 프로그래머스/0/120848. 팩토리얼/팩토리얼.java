class Solution {
    public int solution(int n) {
        int k = 1;
        int fact = 1;

        while (fact <= n) {
            k++;
            fact *= k;
        }

        return k - 1;
    }
}
