package Recursion;

public class RecursionTesting {
    public static void main(String[] args) {
        infinite(5);
    }


    private static void Head(int n){
        if(n>0){
            Head(n-1);
            System.out.println(n+" ");
        }
    }

    private static void Tail(int n){
        if(n>0){
            System.out.println(n+" ");
            Tail(n-1);
        }
    }

    private static void infinite(int n){
        System.out.println("Overflow");
        infinite(n+1);
    }
}
