package JCF.Custom_Classes.Custom_Comparator;
import java.util.*;
public class Testing {
    public static void main(String[] args) {
        String s="tree";
        System.out.println(frequencySort(s));
    }

    public static String frequencySort(String s){
        StringBuilder ans=new StringBuilder();
        Map<Character,Integer> map=new HashMap<>();

        for(char ch:s.toCharArray()){
            map.put(ch,map.getOrDefault(ch,0)+1);
        }

        List<Character> list=new ArrayList<>(map.keySet());
        list.sort((obj1,obj2)->map.get(obj2)-map.get(obj1));

        for(char ch:list){
            for(int i=0;i<map.get(ch);i++){
                ans.append(ch);
            }
        }

        return ans.toString();

    }
}
