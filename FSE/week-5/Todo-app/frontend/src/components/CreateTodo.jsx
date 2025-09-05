import axios from "axios"
import { useState } from "react"

export function CreateTodo({onTodoAdded}){
  const[title,setTitle]=useState("")
  const[description,setDescription]=useState("")
  return <div>
    <input type="text" placeholder="title" value={title} onChange={(e)=>{
      setTitle(e.target.value)
    }} />
    <br />
    <input type="text" placeholder="description" value={description} onChange={(e)=>{
      setDescription(e.target.value)
    }}/>
    <br />

    <button onClick={()=>{
      axios.post("https://todoapplication-liart.vercel.app/todo",{
        title,
        description
      }).then((res)=>{
        alert("Todo created successfully")
        setTitle("")
        setDescription("")
        onTodoAdded()
      })
    }}>Add a todo</button>
  </div>
}