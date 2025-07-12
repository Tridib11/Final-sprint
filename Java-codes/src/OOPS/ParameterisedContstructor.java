package OOPS;

class Bank1{
    double balance;
    public Bank1(double _balance){
        balance=_balance;
    }
    public void printBalance(){
        System.out.println(balance);
    }
}
public class ParameterisedContstructor {
    public static void main(String[] args) {
        Bank1 b=new Bank1(100);
        b.printBalance();
    }
}
