class BankAccount:
  def __init__(self,balance):
    self.__balance=balance
  
  def get_balance(self):
    return self.__balance
  
  def deposit(self,amount):
    self.__balance+=amount

a1=BankAccount(1000)
a1.deposit(500)
print(a1.get_balance())