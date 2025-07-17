package JCF.Custom_Classes;
import java.util.*;
public class ll_testing {
    public static void main(String[] args) {
        List<Integer> ll=new LinkedList<>();
        ll.add(1);
        ll.add(2);
        ll.add(3);

        ll.addFirst(0);
        System.out.println(ll);
        ll.addLast(2);
        System.out.println(ll);
        System.out.println(ll.getFirst());
        System.out.println(ll.getLast());
    }
}
