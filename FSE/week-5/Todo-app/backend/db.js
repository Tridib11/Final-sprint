const mongoose=require("mongoose")

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
  console.log("Db connected")
})

const todoSchema=mongoose.Schema({
  title:String,
  description:String,
  completed:Boolean
})

const todos=mongoose.model("Todos",todoSchema)

module.exports={
  todos
}