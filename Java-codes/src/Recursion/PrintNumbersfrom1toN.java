package Recursion;

public class PrintNumbersfrom1toN {
    public static void main(String[] args) {
        test(1,8);
    }

    private static void test(int i,int n){
        if(i>n){
            return ;
        }
        System.out.println(i+" ");
        test(i+1,n);
    }
}
