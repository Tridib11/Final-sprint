import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {axios} from "axios"
import './App.css'
import CreateTodo from './components/CreateTodo'
import Todo from './components/Todo'

async function App() {
  const[todos,setTodos]=useState()
  await axios.get("http://localhost:3000/todos")
  return (
    <>
      <CreateTodo/>
      <Todo todos={todos}/>
    </>
  )
}

export default App
