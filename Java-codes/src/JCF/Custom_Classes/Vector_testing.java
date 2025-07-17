package JCF.Custom_Classes;
import java.util.*;
public class Vector_testing {
    public static void main(String[] args) {
        Vector<Integer> vec=new Vector<>();
        for(int i=0;i<10;i++){
            vec.add(i);
        }

        System.out.println(vec);
        System.out.println(vec.capacity());
    }
}
