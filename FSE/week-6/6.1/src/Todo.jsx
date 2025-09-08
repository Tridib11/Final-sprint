import React, { useState } from "react";

function Todo() {
  const [todo, setTodo] = useState([
    {
      id: 1,
      title: "DSA",
      description: "Ajjj DSA krna h",
    },
    {
      id: 2,
      title: "React",
      description: "Complete React project",
    },
    {
      id: 3,
      title: "JavaScript",
      description: "Practice JS concepts",
    },
  ]);
  return (
    <div>
      <button
        onClick={() => {
          setTodo([
            ...todo,
            {
              id:todo.length+1,
              title: "Random Title",
              description: "Random description",
            },
          ]);
        }}
      >
        Add new todo
      </button>
      {todo.map((todo) => {
        return (
          <div key={todo.id}>
            <h1>{todo.title}</h1>
            <h3>{todo.description}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default Todo;
