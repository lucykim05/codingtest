import java.util.*;

class Solution {
    public int solution(int[] array, int n) {
        int answer = array[0];
        
        for (int num : array) {
            int diffCurrent = Math.abs(num - n);
            int diffAnswer = Math.abs(answer - n);

            if (diffCurrent < diffAnswer) {
                answer = num;
            } 

            else if (diffCurrent == diffAnswer && num < answer) {
                answer = num;
            }
        }
        return answer;
    }
}
