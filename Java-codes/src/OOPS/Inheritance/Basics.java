package OOPS.Inheritance;

class Car{
    private String numberOfCar;
    public Car(String numberOfCar){
        this.numberOfCar=numberOfCar;
    }
    public void printCarNumber(){
        System.out.println(numberOfCar);
    }
}

class Bus{
    private String numberOfCar;
    public Bus(String numberOfCar){
        this.numberOfCar=numberOfCar;
    }
    public void printCarNumber(){
        System.out.println(numberOfCar);
    }
}
public class Basics {
    public static void main(String[] args) {
        Car car=new Car("Car WB824824");
        car.printCarNumber();

        Bus bus=new Bus("Bus WB842040294");
        bus.printCarNumber();
    }
}
