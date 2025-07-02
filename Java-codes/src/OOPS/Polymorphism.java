package OOPS;

class Vehicle1{
    String numberOfCar;

    public Vehicle1(String numberOfCar){
        this.numberOfCar=numberOfCar;
    }
    public void honk(){
        System.out.println("Honk");
    }

    public void printNumberOfCar(){
        System.out.println(numberOfCar);
    }
}

class Car1 extends Vehicle1{
    public Car1(String numberOfCar){
        super(numberOfCar);
    }
    @Override
    public void honk(){
        System.out.println("Car Honking");
    }
}

class Bus1 extends Vehicle1{
    public Bus1(String numberOfCar){
        super(numberOfCar);
    }
}
public class Polymorphism {
    public static void main(String[] args) {
        Car1 car=new Car1("hefhfoief");
        car.printNumberOfCar();
        car.honk();


        Bus1 bus=new Bus1("fafafasfasf");
        bus.printNumberOfCar();
        bus.honk();
    }

}
