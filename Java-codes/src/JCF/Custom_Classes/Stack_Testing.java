package JCF.Custom_Classes;
import java.util.*;
public class Stack_Testing {
    //LIFO
    public static void main(String[] args) {
        Stack<Integer> st=new Stack<>();
        for(int i=0;i<10;i++){
            st.add(i);
        }
        System.out.println(st);

        System.out.println(st.peek());
        System.out.println(st.pop());
        System.out.println(st);

        System.out.println(st.isEmpty());

    }
}
