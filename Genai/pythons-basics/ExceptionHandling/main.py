a=int(input("Enter a number"))

# try:
#   print(10/a)
# except ZeroDivisionError:
#   print("Sorry canot do it by zero")


try:
  print(10/a)
except Exception as err:
  print(f"Sorry there is an error as {err}")
else:
  print("No error found")
finally:
  print("I will run no matter what")


