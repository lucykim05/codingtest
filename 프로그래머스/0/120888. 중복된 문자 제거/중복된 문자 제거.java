import java.util.*;
import java.util.stream.Collectors;

class Solution {
    public String solution(String my_string) {
        String[] arr = my_string.split("");

        String result = Arrays.stream(arr)
                              .distinct()
                              .collect(Collectors.joining());

        return result;
    }
}
