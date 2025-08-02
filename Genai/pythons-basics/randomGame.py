import random

num=random.randint(1,10)


# if num==guess:
#   print("You won")
# else:
#   print(f"You lost the number was {num}")

tries = 0
while True:
  guess = int(input("Enter a number "))
  if guess < num:
    tries += 1
    print("Try a little higher")
  elif guess > num:
    tries += 1
    print("Try a little lower")
  else:
    tries += 1
    print("You won")
    print(f"You took {tries} tries")
    break

  
