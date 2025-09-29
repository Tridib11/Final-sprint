package Arrays;

import java.util.HashMap;
import java.util.Scanner;

public class FractionToRecurringDecimal {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        int numerator=sc.nextInt();
        int denominator=sc.nextInt();
        System.out.println(solution(numerator,denominator));
    }
    private static String solution(int numerator,int denominator){
        StringBuilder ans=new StringBuilder();

        int quotient=numerator/denominator;

        int remainder=numerator%denominator;

        ans.append(quotient);

        if(remainder==0){
            return ans.toString();
        }else{
            ans.append(".");
            HashMap<Integer,Integer> map=new HashMap<>();

            while(remainder!=0){
                if(map.containsKey(remainder)){
                    int position=map.get(remainder);
                    ans.insert(position,"(");
                    ans.append(")");
                    break;
                }else{
                    map.put(remainder,ans.length());
                    remainder*=10;
                    quotient=remainder/denominator;
                    remainder=remainder%denominator;
                    ans.append(quotient);
                }

            }
        }

        return ans.toString();




    }
}
