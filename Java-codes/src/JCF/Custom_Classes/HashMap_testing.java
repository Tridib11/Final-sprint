package JCF.Custom_Classes;
import java.util.*;
public class HashMap_testing {
    public static void main(String[] args) {
        /*
        Doesnot stores keys in the sorted order O(1)
         */
        HashMap<Integer,String> map=new HashMap<>();
        map.put(1,"Raj");
        map.put(2,"Rohan");
        map.put(3,"Rahul");

        System.out.println(map.get(1));

        map.remove(2);
        System.out.println(map.size());
        System.out.println(map);

    }
}
