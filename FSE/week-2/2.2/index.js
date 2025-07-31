const express=require("express")
const app=express()

app.get('/',(req,res)=>{
  res.send("Hello world")
})

app.get("/shit",(req,res)=>{
  res.json({
    name:"Tridib",
    age:21
  })
})

app.listen(3000,()=>{
  console.log("Server satrted")
})