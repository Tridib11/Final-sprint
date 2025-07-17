package JCF.Custom_Classes;
import java.util.*;
public class HashSet__testing {
    public static void main(String[] args) {

        //Stores unique elements in random order

        HashSet<Integer> hs=new HashSet<>();
        for(int i=0;i<10;i++){
            hs.add(i);
        }
        System.out.println(hs);


    }
}
