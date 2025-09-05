import { useEffect, useState } from 'react'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'
import axios from "axios"

function App() {
  const[todos,setTodos]=useState([])

  const fetchTodos=()=>{
    axios.get("https://todoapplication-liart.vercel.app/todos").then((res)=>{
      setTodos(res.data.todo)
    })
  }

  useEffect(()=>{
    fetchTodos()
  },[])
  return (
    <>
      <CreateTodo onTodoAdded={fetchTodos}/>
      <Todos todos={todos} onTodoUpdated={fetchTodos}/>
    </>
  )
}

export default App
