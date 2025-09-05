import axios from "axios"

export function Todos({todos,onTodoUpdated}){
  return <div>
    {todos.map((todo)=>{
      return <div key={todo._id}>
        <h1>{todo.title}</h1>
        <h2>{todo.description}</h2>
        <button disabled={todo.completed} 
        onClick={()=>{
          axios.put("https://todoapplication-liart.vercel.app/completed",{
            id:todo._id
          }).then((res)=>{
            alert("Todo marked as completed")
            onTodoUpdated()
          })
        }}>{todo.completed==true?"Completed":"Mark as complete"}</button>
      </div>
    })}
  </div>
}