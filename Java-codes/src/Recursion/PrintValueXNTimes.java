package Recursion;

public class PrintValueXNTimes {
    public static void main(String[] args) {
        test(4,5);
    }

    private static void test(int x,int n){
        if(n==0) return;
        System.out.println(x+" ");
        test(x,n-1);
    }
}
