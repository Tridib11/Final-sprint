from pathlib import Path

def readFileAndFolder():
  path=Path('')
  items=list(path.rglob('*'))
  for i,items in enumerate(items):
    print(f"{i+1} : {items}")


def createFile():
  readFileAndFolder()

print("press 1 for creating a file")
print("press 2 for reading a file")
print("press 3 for updating a file")
print("press 4 for deleting a file")

check=int(input("Enter a response"))

if check==1:
  createFile()