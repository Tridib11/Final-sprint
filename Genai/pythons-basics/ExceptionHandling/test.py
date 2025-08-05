age=int(input("Enter a number"))

if age<10 or age>18:
  #raise is used for manually raising an error
  
  raise ValueError("Your age must be between 10 and 18")
else:
  print("Welcome to the club")