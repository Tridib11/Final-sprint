class Animal{
  constructor(name,legCount,speaks){
    this.name=name;
    this.legCount=legCount;
    this.speaks=speaks;
  }

  static myType(){
    console.log("Animal")
  }
  speak(){
    console.log("hi there "+this.speaks)
  }
}

let dog=new Animal("dog",4,"bhow bhow")
dog.speak()

Animal.myType() //static things can be used without declearing an object of it
