package OOPS.Inheritance;
// Base class
class Vehicle{
    String numberOfVehicle;
    public Vehicle(String numberOfVehicle){
        this.numberOfVehicle=numberOfVehicle;
    }
    public void Honk(){
        System.out.println("Honk!!!!!!!!!!");
    }
    public void printNumberOfVehicle(){
        System.out.println(numberOfVehicle);
    }
}

// Derived Classes
class Car extends Vehicle{
    private String numberOfCar;
    public Car(String numberOfCar){
        super(numberOfCar);
    }
}

class Bus extends Vehicle{
    private String numberOfCar;
    public Bus(String numberOfCar){
        super(numberOfCar);
    }
}
public class Basics {
    public static void main(String[] args) {
        Car car=new Car("Car WB824824");
        car.printNumberOfVehicle();
        car.Honk();

        Bus bus=new Bus("Bus WB842040294");
        bus.printNumberOfVehicle();
        bus.Honk();
    }
}
