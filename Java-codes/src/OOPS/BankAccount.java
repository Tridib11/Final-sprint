package OOPS;

class Bank{
    double balance;
    public Bank(){
        balance=100.0;
    }
    public void printBalance(){
        System.out.println(balance);
    }
}
public class BankAccount {
    public static void main(String[] args) {
        Bank b=new Bank();
        b.printBalance();
    }
}
