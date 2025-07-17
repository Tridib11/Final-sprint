package JCF.Custom_Classes;

class Data{
    public Integer num;
    private String name;
    private InternalData internalData;
    Data(int _num,String _name,int _revenue){
        this.num=_num;
        this.name=_name;
        this.internalData=new InternalData(1000);
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

    public int getNum(){
        return num;
    }
}

class InternalData{
    public Integer revenue;
    InternalData(Integer _revenue){
        this.revenue=_revenue;
    }
}
public class Basics {
    public static void main(String[] args) {
        Data obj1=new Data(12,"Rohan",100000);
        Data obj2=new Data(14,"Rahul",1000);

        obj2.setName("Rohan");
        System.out.println(obj2.getName());
        System.out.println(obj2.getNum());

    }
}
