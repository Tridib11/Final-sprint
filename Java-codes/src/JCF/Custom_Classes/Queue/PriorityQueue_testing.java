package JCF.Custom_Classes.Queue;
import java.util.*;
public class PriorityQueue_testing {
    public static void main(String[] args) {
        /*
        Min heap ds
        when you ask for peek() it gives the minimum element
         */
        PriorityQueue<Integer> pq=new PriorityQueue<>();
        for(int i=0;i<10;i++){
            pq.offer(i);
        }

        System.out.println(pq);

        System.out.println(pq.peek());
        pq.poll();
        System.out.println(pq.peek());
    }
}
