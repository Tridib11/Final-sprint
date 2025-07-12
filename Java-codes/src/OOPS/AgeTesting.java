package OOPS;


class Test1{
    int age;
    public void assignAge(int age){
        this.age=age;
    }
    public void printAge(){
        System.out.println(age);
    }
}
public class AgeTesting {
    public static void main(String[] args) {
        Test1 t=new Test1();
        t.age=10;

        t.printAge();
    }
}
