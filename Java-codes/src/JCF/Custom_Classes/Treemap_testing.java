package JCF.Custom_Classes;
import java.util.*;
public class Treemap_testing {
    public static void main(String[] args) {

        /*
        O(log n)
        stores unique keys , doesnot store duplicates

        ceiling key - first element greater than equal to the particular key
         */
        TreeMap<Integer,String> map=new TreeMap<>();
        map.put(1,"Raj");
        map.put(9,"Rohan");
        map.put(3,"Rahul");
        System.out.println(map);
        System.out.println(map.ceilingKey(7));

        Set<Integer> set=map.keySet();
        System.out.println(set);
    }
}
