class Shape:
  def area(self):
    pass

class Square(Shape):
  def area(self):
    return 4*4
    
class Circle(Shape):
  def area(self):
    return 3.14*2*2

shapes=[Square(),Circle()]

for i in shapes:
  print(i.area())