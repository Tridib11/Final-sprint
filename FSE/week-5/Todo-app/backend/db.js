const mongoose=require("mongoose")

mongoose.connect("mongodb+srv://admin:admin@cluster0.ksun8sc.mongodb.net/Todo-fullstack").then(()=>{
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