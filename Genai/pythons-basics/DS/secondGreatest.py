list=[21,33,12,45,6,7]
largest=list[0]
second_Largest=-1
for i in range(1,len(list)):
  if list[i]>largest:
    second_Largest=largest
    largest=list[i]
  
print(second_Largest,largest)