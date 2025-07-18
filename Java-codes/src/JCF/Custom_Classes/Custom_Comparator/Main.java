package JCF.Custom_Classes.Custom_Comparator;
import java.util.*;
public class Main {

    public static Comparator<Integer> getComparator(){
        return new  Comparator<Integer>(){
            @Override
            public int compare(Integer num1,Integer num2){
                if(num1<num2){
                    return 1;
                }else if(num1>num2){
                    return -1;
                }
                return 0;
            }
        };
    }
    public static void main(String[] args) {

        List<Integer> list=new ArrayList<>();

        list.add(1);
        list.add(2);
        list.add(3);
        list.add(4);
        System.out.println(list);
        /*

        Collections.sort(list,new Comparator<Integer>(){
            @Override
            public int compare(Integer num1,Integer num2){
                if(num1<num2){
                    return 1;
                }else if(num1>num2){
                    return -1;
                }
                return 0;
            }
        });

         */
            //Collections.sort(list,getComparator());
        Collections.sort(list,(a,b)->b-a);

        System.out.println(list);
    }
}
