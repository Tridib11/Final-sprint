package OOPS;

class Test3{
    double balance;
    public Test3(){
        balance=100.0;
    }
    public void printBalance(){
        System.out.println(balance);
    }
}
public class BankAccount {
    public static void main(String[] args) {
        Test3 t=new Test3();
        t.printBalance();
    }
}
