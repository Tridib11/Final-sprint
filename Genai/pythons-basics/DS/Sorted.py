list=[1,2,3,4]
for i in range(len(list)-1):
  if list[i]<list[i+1]:
    continue
  else:
    print("Not sorted")
    break
else:
  print("Sorted")


