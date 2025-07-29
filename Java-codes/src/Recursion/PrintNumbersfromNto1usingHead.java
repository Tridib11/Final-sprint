package Recursion;

public class PrintNumbersfromNto1usingHead {
    public static void main(String[] args) {
        Test(1,5);
    }

    private static void Test(int i,int n){
        if (i > n) return;
        Test(i + 1, n);             // recursive call before printing
        System.out.print(i + " ");
    }
}
