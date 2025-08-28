const jwt=require("jsonwebtoken")

const value={
  name:"Tridib",
  accountNumber:123123

}

// const token=jwt.sign(value,"secret")
// console.log(token)

const verify=jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiVHJpZGliIiwiYWNjb3VudE51bWJlciI6MTIzMTIzLCJpYXQiOjE3NTY0MDU4NDl9.-LYKvms-WuST0vGQDbie7F2DW6DvDEs6GU809nB79KI","secret")

console.log(verify)