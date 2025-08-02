import random

num=random.randint(1,10)

guess=int(input("Enter a number "))

if num==guess:
  print("You won")
else:
  print(f"You lost the number was {num}")