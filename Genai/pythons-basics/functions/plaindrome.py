def palindrome(st):
  rev=""
  for i in range(len(str)-1,-1,-1):
    rev=rev+st[i]
  
  if rev==st:
    print("Plaindrome ")
  else:
    print("Not a palindrome")