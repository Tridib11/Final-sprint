package JCF.Custom_Classes;
import java.util.*;
public class Iterator_testing {
    public static void main(String[] args) {
        ArrayList<Integer> al=new ArrayList<>();
        al.add(1);
        al.add(2);
        al.add(3);
        al.add(4);

        Iterator<Integer> iterator=al.iterator();
        while(iterator.hasNext()){
            Integer num=iterator.next();
            System.out.println(num);
        }
    }
}
