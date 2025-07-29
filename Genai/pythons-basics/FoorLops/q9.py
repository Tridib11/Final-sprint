n=input("Enter a String ")

# newString=n[::-1]

# if(n==newString):
#   print("Palindrome")
# else:
#   print("Not palindrome")

print("Palindrome" if n == n[::-1] else "Not palindrome")
