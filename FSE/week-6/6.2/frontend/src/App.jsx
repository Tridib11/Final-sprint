import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

function App() {
  const [todos,setTodos]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:3000/todos").then((res)=>{
      setTodos(res.data.todos)
    })
    
  },[])
  return (
    <div>
      <div></div>
      {todos.map(todo=>{
        return <div key={todo.id}>
          <h1>{todo.title}</h1>
          <h2>{todo.description}</h2>
        </div>
      })}
    </div>
  )
}

export default App
