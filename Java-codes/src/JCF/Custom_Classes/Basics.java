package JCF.Custom_Classes;

class Data{
    public Integer num;
    private String name;
    Data(int _num,String _name){
        this.num=_num;
        this.name=_name;
    }

    public void setNum(Integer _num){
        this.num=_num;
    }

    public void setName(String name){
        this.name=name;
    }

    public String getName(){
        return name;
    }
}
public class Basics {
    public static void main(String[] args) {
        Data obj1=new Data(12,"Rohan");
        Data obj2=new Data(14,"Rahul");

        obj2.setName("Rohan");
        System.out.println(obj2.getName());

    }
}
