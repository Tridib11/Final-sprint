# student={
#   "name":"John",
#   "age":20
# }

# print(student["name"])

numbers={1:10,2:20,3:30,4:40}
numbers.update({5:50})#or d[5]=50

# del numbers[30]
# print(numbers)
# for i in numbers:
#   print(i,":",numbers[i])

for i in numbers.values():
  print(i)