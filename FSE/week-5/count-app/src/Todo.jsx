import React, { useState } from "react";
import "./App.css";
function Todo() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Gym",
      description: "Bhai please gym chala ja",
    },
    {
      id: 2,
      title: "Study",
      description: "Kal exam hai, padh le bhai",
    },
    {
      id: 3,
      title: "Groceries",
      description: "Maa ne sabzi laane ko bola hai",
    }
  ]);
  return <div>
    <div>
      {todos.map((todo)=>{
        return <div key={todo.id}>
          <h1>{todo.title}</h1>
          <h2>{todo.description}</h2>
        </div>
      })}
    </div>


    <div>
      <button onClick={() => {
        setTodos([
          ...todos,
          {
            id: todos.length + 1,
            title: "Random title",
            description: "Some random description"
          }
        ]);
      }}>Add random todo</button>
    </div>
  </div>;
}

export default Todo;
