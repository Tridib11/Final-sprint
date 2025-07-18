package JCF.Custom_Classes.Collections;
import java.util.*;
public class Srting {
    public static void main(String[] args) {
        List<Integer> list=new ArrayList<>();
        list.add(3);
        list.add(1);
        list.add(9);
        list.add(0);

        System.out.println(list);


        Collections.sort(list);

        System.out.println(list);

        Collections.min(list);
        Collections.reverse(list);
        Collections.frequency(list,2);

    }
}
