package OOPS;

class Vehicle{
    String numberOfVehicle;
    public Vehicle(String numberOfVehicle){
        this.numberOfVehicle=numberOfVehicle;
    }

    public void Honk(){
        System.out.println("Honk!!!");
    }

    public void printNumberOfTheVehicle(){
        System.out.println(numberOfVehicle);
    }
}

class Car extends Vehicle{
    public Car(String numberOfCar){
        super(numberOfCar);
    }
}

class Bus extends Vehicle{
    public Bus(String numberOfCar){
        super(numberOfCar);
    }
}
public class Inheritance {
    public static void main(String[] args) {
        Car car=new Car("KA01ABCD");
        car.Honk();
        car.printNumberOfTheVehicle();

        Bus bus =new Bus("WB2355345");
        bus.Honk();
        bus.printNumberOfTheVehicle();

    }
}
