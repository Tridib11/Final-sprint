const express=require("express")
const zod=require("zod")
const app=express()

const schema=zod.array(zod.number())
const userSchema=zod.object({
  email:zod.string(),
  password:zod.string(),
  country:zod.literal("IN").or(zod.literal("US")),
  kidneys:zod.array(zod.number())
})

app.use(express.json())


app.post("/health-checkup",(req,res)=>{
  const kidneys=req.body.kidneys
  const kidneyLength=kidneys.length
  const response=schema.safeParse(kidneys)
  res.send(`You have ${kidneyLength} kidneys`)
})


app.listen(3000,()=>{
  console.log("server started")
})