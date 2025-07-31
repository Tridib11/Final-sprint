a="sdkf24124214%@$@$#$%$W^"

char=0 
dig=0
spchr=0

for i in a:
  if i.isdigit():
    dig += 1
  elif i.isalpha():
    char += 1
  else:
    spchr += 1

print(f"Charaters are {char} , Digits are {dig} and SpecialCharacters are {spchr}")
