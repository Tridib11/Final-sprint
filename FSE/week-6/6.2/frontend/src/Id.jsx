import axios from "axios";
import React, { useEffect, useState } from "react";

function Id() {
  const [todo, setTodo] = useState(null);
  const [id, setId] = useState(null);

  useEffect(() => {
    if (id === "" || id === null) {
      setTodo(null);
      return;
    }

    const timer = setTimeout(() => {
      axios
        .get(`http://localhost:3000/todo?id=${id}`)
        .then((res) => {
          setTodo(res.data.todo || null);
        })
        .catch((e) => {
          console.error(e);
          setTodo(null);
        });
    }, 1000);

    return () => clearTimeout(timer);
  }, [id]);

  return (
    <div>
      <div>
        <input
          type="number"
          value={id}
          onChange={(e) => {
            setId(e.target.value);
          }}
        />
      </div>
      {todo ? (
        <>
          <h1>{todo.title}</h1>
          <br />
          <h2>{todo.description}</h2>
        </>
      ) : (
        <h1>No todo found</h1>
      )}
    </div>
  );
}

export default Id;
