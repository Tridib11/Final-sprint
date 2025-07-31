const express=require("express")
const app=express()

app.get('/',(req,res)=>{
  res.send("Hello world")
})

app.use(express.json())
app.post("/test",(req,res)=>{
  console.log(req.headers.authorization)
  console.log(req.body.msg)
  res.send({
    msg:"Post works"
  })
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