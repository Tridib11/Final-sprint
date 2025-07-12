package OOPS;

class Test2{
    public int sum(int num1,int num2){
        return num1+num2;
    }
}
public class Sum {
    public static void main(String[] args) {
        Test2 t=new Test2();
        System.out.println(t.sum(10,20));
    }
}
