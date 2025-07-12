package OOPS.Abstraction;

abstract class BankAccount{
    double balance;
    abstract void AddMoney(double amount);
    abstract void canUserWithdrawMoney(double amount);
    void updateBalance(double _balance){
        this.balance=_balance;
    }
    public double getBalance(){
        return balance;
    }

}

class SavingsAccount extends BankAccount{
    public void AddMoney(double amount){
        super.updateBalance(super.getBalance()+amount);
    }
    public void canUserWithdrawMoney(double amount){
        if(super.getBalance()<=amount){
            System.out.println("User can");
        }else{
            System.out.println("User cannot");
        }
    }
}

class CurrentAccount extends BankAccount{
    double minimumLimit=1000.0;
    public void AddMoney(double amount){
        super.updateBalance(super.getBalance()+amount);
    }
    public void canUserWithdrawMoney(double amount){
        if((super.getBalance()-amount )>=minimumLimit){
            System.out.println("User can");
        }else{
            System.out.println("User cannot");
        }
    }
}

public class Basics {
    public static void main(String[] args) {

    }
}
