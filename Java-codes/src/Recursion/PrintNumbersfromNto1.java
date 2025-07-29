package Recursion;

public class PrintNumbersfromNto1 {
    public static void main(String[] args) {
        test(9);
    }

    private static void test(int n){
        if(n==0) return;
        System.out.println(n+" ");
        test(n-1);
    }
}
