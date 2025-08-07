class Car:
  def __init__(self,brand,year):
    self.brand=brand
    self.year=year
  def showDetails(self):
    print(f"The car brand is {self.brand} and the year is {self.year}")

bmw=Car("BMW",2021)
bmw.showDetails()

tata=Car("TATA",2019)
tata.showDetails()