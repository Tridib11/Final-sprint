package OOPS;

class Test1{
    int age;
    public void assignAge(int age){
        this.age=age;
    }
}
public class Age {
    public static void main(String[] args) {
        Test1 test1=new Test1();
        test1.assignAge(23);

        Test1 test2=new Test1();
        test2.assignAge(21);

        System.out.println(test1.age);
        System.out.println(test2.age);
    }
}
