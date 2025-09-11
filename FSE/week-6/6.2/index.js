const express = require("express");
const cors = require("cors");
const app = express();


const todos = [
  {
    id: 1,
    title: "Todo 1",
    description: "This is Todo1",
    completed: "false",
  },
  {
    id: 2,
    title: "Todo 2",
    description: "This is Todo2",
    completed: "false",
  },
  {
    id: 3,
    title: "Todo 3",
    description: "This is Todo3",
    completed: "false",
  },
  {
    id: 4,
    title: "Todo 4",
    description: "This is Todo4",
    completed: "false",
  },
  {
    id: 5,
    title: "Todo 5",
    description: "This is Todo5",
    completed: "false",
  },
  {
    id: 6,
    title: "Todo 6",
    description: "This is Todo6",
    completed: "false",
  },
];


app.use(cors());

app.get("/todo",(req,res)=>{
  const todo=todos.find(t=>t.id==req.query.id)
  res.json({
    todo
  })
})

app.get("/todos",(req,res)=>{
  const randomTodos=[]
  for(let i=0;i<5;i++){
    if(Math.random()>0.5){
      randomTodos.push(todos[i])
    }
  }
  res.json({
    todos:randomTodos
  })
})


app.listen(3000,()=>{
  console.log("Server started")
})
