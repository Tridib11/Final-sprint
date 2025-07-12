package OOPS.Polymorphism;
class Vehicle{
    String numberOfCar;
    public Vehicle(String numberOfCar){
        this.numberOfCar=numberOfCar;
    }
    public void Honk(){
        System.out.println("Honk!!!!!");
    }
    public void printNumberOfCar(){
        System.out.println(numberOfCar);
    }
}

class Car extends Vehicle{
    public Car(String numberOfCar){
        super(numberOfCar);
    }
    @Override
    public void Honk(){
        System.out.println("Car Honk");
    }
}

class Bus extends Vehicle{
    public Bus(String numberOfBus){
        super(numberOfBus);
    }
    @Override
    public void Honk(){
        System.out.println("Bus Honk!!!");
    }
}
public class Basics {
    public static void main(String[] args) {
        Car car=new Car("Car WB3883482");
        car.printNumberOfCar();
        car.Honk();

        Bus bus=new Bus("Bus WB0492492");
        bus.printNumberOfCar();
        bus.Honk();

    }
}
