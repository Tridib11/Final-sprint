package Youtube;

import java.sql.SQLOutput;
import java.util.Scanner;

/**
 *
 *  1 2
 *  2
 *
 *  2 3
 *
 *  3
 */
public class LargestOfTwoNumbers {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        int a, b;
        System.out.println("Enter a number ");
        a=sc.nextInt();
        System.out.println("Enter second number");
        b=sc.nextInt();

//        if(a>=b){
//            System.out.println(a);
//        }else{
//            System.out.println(b);
//        }

        int max=Math.max(a,b);
        System.out.println(max);

    }
}
