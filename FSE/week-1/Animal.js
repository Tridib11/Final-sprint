class Animal {
  constructor(name, legCount, speaks) {
    this.name = name;
    this.legCount = legCount;
    this.speaks = speaks;
  }
  speak() {
    console.log("hi there " + this.speaks);
  }
}

let dog = new Animal("Dog", 4, "Bhow bhow");
dog.speak();