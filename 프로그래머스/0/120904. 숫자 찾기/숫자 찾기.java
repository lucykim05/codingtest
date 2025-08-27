class Solution {
    public int solution(int num, int k) {
        String s = String.valueOf(num);

        char target = String.valueOf(k).charAt(0);

        int idx = s.indexOf(target);

        if (idx == -1) {
            return -1;
        } else {
            return idx + 1; 
        }
    }
}
