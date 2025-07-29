package Recursion;

public class Printing1toNUsingSingleParameter {
    public static void main(String[] args) {
        test(9);
    }

    private static void test(int n){
        if(n==0) return ;
        test(n-1);
        System.out.println(n);
    }
}
