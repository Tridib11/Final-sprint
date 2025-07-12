package OOPS.Abstraction.Interface;

public interface AnimalStuff {
    int age=1;
    String name="John";
    public void poop();
}

class Cat implements AnimalStuff{


    @Override
    public void poop() {
        System.out.println("dkfhoifhoiwhfowd");
    }
}
