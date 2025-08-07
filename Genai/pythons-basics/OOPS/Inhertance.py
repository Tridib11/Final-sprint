class Animal:
  def speak(self):
    print("Animal speaks")
class Dog(Animal):
  def speak(self):
    super().speak()
  
d=Dog()
d.speak()