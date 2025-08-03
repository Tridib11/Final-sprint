a=[-1,2,3,-3,5,6]
positive=[]
negative=[]
for i in a :
  if i<0:
    negative.append(i)
  else:
    positive.append(i)


print(f"Negative {negative}")
print(f"Positive {positive}")
