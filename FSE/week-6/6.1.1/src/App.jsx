import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Todo 1",
      description: "This is Todo 1",
    },
    {
      id: 2,
      title: "Todo2",
      description: "This is todo 2",
    },
    {
      id: 3,
      title: "Todo 3",
      description: "This is Todo 3",
    }
  ]);
  return <div>
    {todos.map((todo)=>{
      return <div key={todo.id}>
        <h1>{todo.title}</h1>
        <h3>{todo.description}</h3>
      </div>
    })}


    <div>
      <button onClick={()=>{
        setTodos([...todos,{
          id:todos.length+1,
          title:"Random title",
          description:"Random description"
        }])
      }}> Add todo</button>
    </div>
  </div>;
}

export default App;
