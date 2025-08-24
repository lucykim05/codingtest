class Solution {
    public int solution(int order) {
        String s = String.valueOf(order);
        int count = 0;
        
        for (char c : s.toCharArray()) {
            if (c == '3' || c == '6' || c == '9') {
                count++;
            }
        }
        
        return count;
    }
}
