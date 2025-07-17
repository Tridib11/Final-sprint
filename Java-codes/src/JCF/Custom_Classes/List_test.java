package JCF.Custom_Classes;
import java.util.*;
public class List_test {
    public static void main(String[] args) {
        List<Integer> list=new ArrayList<>();
        for(int i=0;i<10;i++){
            list.add(i);
        }
        System.out.println(list);


        System.out.println(list.size());
        System.out.println(list.remove(2));
        list.add(1,17);
        System.out.println(list);
        System.out.println(list.contains(17));

    }
}
