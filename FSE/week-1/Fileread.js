const fs = require("fs");
fs.readFile("a.txt","utf-8",(err,data)=>{
  console.log(data)
})

// const data=fs.readFileSync("a.txt","utf-8")
// console.log(data)
console.log("Skipped");
