import React, { useState } from "react";

import "./index.css"
function Todo() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "DSA",
      description: "Doing dsa",
    },
    {
      id: 2,
      title: "React Hooks",
      description: "Practice useState and useEffect",
    },
    {
      id: 3,
      title: "Algorithms",
      description: "Solve sorting problems",
    }
  ]);
  return (
    <div>

      <div>
        {todos.map(todo=><Todotitle title={todo.title} description={todo.description} id={todo.id}/>)}
      </div>
      <div>
        <button onClick={()=>{
          setTodos([...todos,{
            id:todos.length+1,
            title:"Random title",
            description:"Random description"
          }])
        }}>Add Todo</button>
      </div>
      
  </div>
  );
}

const Todotitle=React.memo(({ title, description,id })=> {
  return (
      <div key={id}>
        <h1>{title}</h1>
        <h2>{description}</h2>
      </div>    
  );
})

export default Todo;
