class Student:
  def __init__(self,name,age):
    self.name=name
    self.age=age
  def greet(self):
    print(f"Hi my name is {self.name} and i am {self.age} years old")
  
s1=Student("Tridib",21)
s1.greet()