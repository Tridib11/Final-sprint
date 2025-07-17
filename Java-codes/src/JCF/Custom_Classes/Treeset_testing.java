package JCF.Custom_Classes;
import java.util.*;
public class Treeset_testing {
    public static void main(String[] args) {
        //DS that stores unique elements in a sorted order

        //log n

        Set<Integer> ts=new TreeSet<>();
        ts.add(3);
        ts.add(1);
        ts.add(4);
        ts.add(-1);
        System.out.println(ts);

        for(var num:ts){
            System.out.println(num);
        }
    }
}
