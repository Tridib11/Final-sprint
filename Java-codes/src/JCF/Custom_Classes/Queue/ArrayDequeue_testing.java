package JCF.Custom_Classes.Queue;
import java.util.*;
public class ArrayDequeue_testing {
    public static void main(String[] args) {
        //FIFO
        ArrayDeque<Integer> ad=new ArrayDeque<>();
        for(int i=0;i<10;i++){
            ad.offer(i);
        }
        System.out.println(ad);
        System.out.println(ad.peek());
        System.out.println(ad.pop());
        System.out.println(ad.poll());
        System.out.println(ad);


    }
}
