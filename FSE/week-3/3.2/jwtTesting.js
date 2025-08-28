const jwt=require("jsonwebtoken")

const value={
  name:"Tridib",
  accountNumber:123123

}

const token=jwt.sign(value,"secret")
console.log(token)